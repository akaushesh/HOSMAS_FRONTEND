export interface AttendanceSession {
  id: number;
  hostel: string;
  date: string;
  createdBy: string;
  createdAt: string;
}

export interface AttendanceResult {
  id: number;
  attendanceSessionId: number;
  rollNumber: string;
  studentName: string;
  status: 'outside_college' | 'out_of_hostel' | 'on_leave' | 'present';
  lastWhereabout: string;
  mailSent: boolean;
  mailSentAt: string | null;
}

export interface StudentAttendanceDay {
  date: string;
  status: 'outside_college' | 'out_of_hostel' | 'on_leave' | 'present' | null;
  detail: string;
}

export interface MyAttendanceResponse {
  month: string;
  records: StudentAttendanceDay[];
}

export interface ListSessionsResponse {
  sessions: AttendanceSession[];
}

export interface SessionResultsResponse {
  session: AttendanceSession;
  results: AttendanceResult[];
}

export interface ComputeAttendanceResponse {
  success: boolean;
  results: AttendanceResult[];
}

export interface SendMailResponse {
  success: boolean;
  message: string;
  summary: {
    total_flagged: number;
    sent: number;
    failed: number;
  };
}
