const DB_NAME = 'HosmasAttendanceDB';
const DB_VERSION = 1;
const STORE_NAME = 'attendance_files';

export interface LocalFileRecord {
  key: string; // `${date}_${type}`
  date: string; // 'YYYY-MM-DD'
  type: 'gate' | 'fingerprint';
  fileName: string;
  fileData: File | Blob;
  uploadedAt: string; // ISO string when loaded locally
}

function getDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('IndexedDB is only available in the browser'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };
  });
}

export async function saveLocalFile(
  date: string,
  type: 'gate' | 'fingerprint',
  file: File
): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const record: LocalFileRecord = {
      key: `${date}_${type}`,
      date,
      type,
      fileName: file.name,
      fileData: file,
      uploadedAt: new Date().toISOString(),
    };

    const request = store.put(record);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function getLocalFile(
  date: string,
  type: 'gate' | 'fingerprint'
): Promise<LocalFileRecord | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(`${date}_${type}`);

    request.onsuccess = () => {
      resolve(request.result || null);
    };
    request.onerror = () => reject(request.error);
  });
}

export async function deleteLocalFile(
  date: string,
  type: 'gate' | 'fingerprint'
): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(`${date}_${type}`);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export function downloadFile(file: File | Blob, fileName: string): void {
  if (typeof window === 'undefined') return;
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
