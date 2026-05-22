# HOSMAS — Subadmin Client

Dashboard for **Supervisors** (hostel caretakers) and **Sub-admins** to manage hostel operations — cleaning worker assignment, laundry tracking, leave approvals, and mess management.

- **Framework**: Next.js 14 (App Router) + TypeScript  
- **UI**: Material-UI (MUI) v5  
- **State**: TanStack Query v5  
- **HTTP**: Axios  
- **Default port**: `3001`

---

## Table of Contents

1. [Setup](#setup)
2. [Environment Variables](#environment-variables)
3. [Service Endpoints](#service-endpoints-api-map)
4. [Feature Pages](#feature-pages)
5. [Services Layer](#services-layer)
6. [Architecture Notes](#architecture-notes)

---

## Setup

```bash
cd Hosmas/subadmin_client
npm install
npm run dev          # http://localhost:3001
```

---

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_CENTRAL_URL=http://localhost:3376/
NEXT_PUBLIC_ALLOCATION_URL=http://localhost:6543/
NEXT_PUBLIC_CLEANING_URL=http://localhost:3378/
NEXT_PUBLIC_LAUNDRY_URL=http://localhost:3388/
NEXT_PUBLIC_LEAVE_URL=http://localhost:6699/
NEXT_PUBLIC_MESS_URL=http://localhost:6555/
```

> **Production URLs** (commented out in `src/services/api.ts`):  
> `https://central.hosmas.ccstiet.com/`, etc.

---

## Service Endpoints (API Map)

All API calls are made via Axios instances defined in `src/services/api.ts`.

| Axios Instance | Base URL | Used for |
|---|---|---|
| `authApi` | `CENTRAL_URL` | Login, token refresh |
| `centralApi` | `CENTRAL_URL` | User profile |
| `cleaningApi` | `CLEANING_URL` | Cleaning request management |
| `laundryApi` | `LAUNDRY_URL` | Laundry slip management |
| `leaveApi` | `LEAVE_URL` | Leave approval/rejection |
| `messApi` | `MESS_URL` | Menu management, ratings |

---

## Feature Pages

| Route | Service(s) | Description |
|---|---|---|
| `/auth/login` | Central Repo | JWT login |
| `/dashboard` | All | Summary stats and quick actions |
| `/cleaning` | Cleaning | View all requests, assign workers, track status |
| `/cleaning/workers` | Cleaning | Worker management (add, attendance) |
| `/laundry` | Laundry | View slips, checkout, deliver, search by laundry number |
| `/leave` | Leave | View/approve/reject leave applications, search/filter |
| `/leave/settings` | Leave | Configure auto-approve for hostel |
| `/mess` | Mess | View ratings, manage menu items |
| `/profile` | Central Repo | View own supervisor profile |

---

## Services Layer

Each file in `src/services/` maps to one backend service:

### `auth.ts`
```typescript
login(email, password)       // POST /user/login/
logout()                     // clears localStorage
getCurrentUser()             // GET /user/
refreshToken()               // POST /token/refresh/
```

### `cleaning.ts`
```typescript
getCleaningRequests(status?)          // GET /getCleaningRequests/?status=
getCleaningRequest(id)                // GET /getCleaningRequests/:id/
assignSingleRequest(id, workerId, slotId)  // POST /assign-request/:id/
assignFloors()                         // GET /assign-floors-to-workers/
assignRequests()                       // GET /assign-requests-to-workers/
getWorkers(hostelId)                   // GET /hostels/:hostelId/workers/
createWorker(name, phone, photo)       // POST /createWorker/
markAttendance(workers)                // POST /workers/mark-attendance/
getSlots()                             // GET /getSlots/
createSlot(name)                       // POST /createSlot/
```

### `laundry.ts`
```typescript
getLaundryDetails(hostelId)          // GET /collected/:hostelId/
getStudentSlips(laundryNumber)       // GET /get-student-slips/:id/
findSlipByTxId(txId, action)         // POST /get-slip/
checkout(txId, items)                // PATCH /checkout/
deliver(txId)                        // PATCH /deliver/:id/
isHostelActive(hostelId)             // GET /hostel-active/:hostelId/
```

### `leave.ts`
```typescript
getLeaveInfo()                                 // GET /leave/get-info/
getLeaveRequests(page, limit, status)          // GET /leave/get-requests/
setLeaveStatus(txId, status)                   // PATCH /leave/set-status/
deleteLeave(txId)                              // DELETE /leave/delete/:id
setAutoApprove(autoApprove)                    // POST /leave/set-auto-approve/
searchLeaves(query, dates, status, page, limit)// POST /leave/search/
```

### `mess.ts`
```typescript
getRatings()                   // GET /mess/get-ratings/ (all ratings)
getMenuItems()                 // GET /mess/get-menu-items/
setMenu(data)                  // POST /mess/set-menu/
getMenu(hostelId)              // GET /mess/get-menu/:hostel/
```

### `group.ts`
```typescript
getGroupMembers()   // GET /halloc/group/view/  (view group if student is part of)
```

### `profile.ts`
```typescript
getProfile()        // GET /user/
```

---

## Architecture Notes

### Auth Flow
1. Supervisor logs in via `/auth/login`.
2. Axios request interceptor attaches `Authorization: Bearer <token>` to all requests.
3. 401 responses trigger token refresh; failed refresh redirects to `/auth/login`.
4. The `/user/` endpoint returns `role: "supervisor"` with a nested `supervisor` object containing `hostel` details — this is used throughout the app to scope data to the right hostel automatically.

### Role-Based UI
- The sidebar and available pages are conditionally rendered based on the `role` field in the user profile.
- Supervisors only see data for **their hostel** — the backend enforces this at the API level via JWT claims.

### Real-time (Cleaning)
- The Subadmin client does **not** use WebSocket — only the Cleaner Client (worker-facing) does.
- Cleaning request status is polled via TanStack Query's `refetchInterval`.

### QR Code Scanning
- The subadmin client includes a QR scanner for laundry slip verification.
- When scanning a drop-off QR: calls `POST /get-slip/` with `action: "drop"` → then `PATCH /checkout/`.
- When scanning a delivery QR: calls `POST /get-slip/` with `action: "pick"` → then `PATCH /deliver/:id/`.
