# HOSMAS — Student Client

Self-service web portal for hostel students to access all HOSMAS services.

- **Framework**: Next.js 14 (App Router) + TypeScript  
- **UI**: Material-UI (MUI) v5  
- **State**: TanStack Query v5  
- **HTTP**: Axios  
- **3D**: Three.js + React Three Fiber  
- **Default port**: `3000`

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
cd Hosmas/student_client
npm install
npm run dev          # http://localhost:3000
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
> `https://central.hosmas.ccstiet.com/`, `https://api.hosmas.ccstiet.com/`, etc.

---

## Service Endpoints (API Map)

All API calls are made via Axios instances defined in `src/services/api.ts`.

| Axios Instance | Base URL | Used for |
|---|---|---|
| `authApi` | `CENTRAL_URL` | Login, token refresh |
| `centralApi` | `CENTRAL_URL` | User profile, hostel data |
| `groupApi` | `ALLOCATION_URL/halloc/group/` | Group management |
| `invitationApi` | `ALLOCATION_URL/halloc/group/invitation/` | Invitations |
| `preferenceApi` | `ALLOCATION_URL/halloc/pref/` | Hostel preferences |
| `roomApi` | `ALLOCATION_URL/halloc/pref/alloted-hostel-levels/` | Allotment result |
| `dashboardApi` | `ALLOCATION_URL/dashboard/` | FAQ |
| `cleaningApi` | `CLEANING_URL` | Cleaning requests |
| `laundryApi` | `LAUNDRY_URL` | Laundry slips |
| `leaveApi` | `LEAVE_URL` | Leave requests |
| `messApi` | `MESS_URL` | Mess menu + feedback |

---

## Feature Pages

| Route | Service(s) | Description |
|---|---|---|
| `/auth/login` | Central Repo | JWT login |
| `/auth/reset-password` | Central Repo | Password reset |
| `/dashboard` | — | Home dashboard |
| `/cleaning` | Cleaning | View/create cleaning requests, rate completed work |
| `/laundry` | Laundry | Create slip, track status |
| `/leave` | Leave | Apply for leave, track status, cancel |
| `/mess` | Mess | View weekly menu, submit feedback |
| `/profile` | Central Repo | View/edit personal profile |
| `/allocation` | Hostel Allocation | Group, invitation, preference, allotment |
| `/allocation/hostel-3d` | — | 3D hostel viewer (Three.js) |

---

## Services Layer

Each file in `src/services/` maps to one backend service:

### `auth.ts`
```typescript
login(email, password)       // POST /user/login/
logout()                     // clears localStorage
getCurrentUser()             // GET /user/  (with JWT)
refreshToken()               // POST /token/refresh/
resetPassword(slug, pass)    // POST /user/reset-password/
initiateReset(email)         // POST /user/initiate-reset-password/
```

### `cleaning.ts`
```typescript
getCleaningRequests(status?)         // GET /getCleaningRequests/
getCleaningRequest(id)               // GET /getCleaningRequests/:id/
createCleaningRequest(slots, dates)  // POST /createCleaningRequests/
markRequestComplete(rating, comment) // POST /mark-request-complete/
getSlots()                          // GET /getSlots/
```

### `laundry.ts`
```typescript
createLaundrySlip(items)         // POST /create-laundry-slips/
updateLaundrySlip(txId, items)   // PUT /update-laundry-slip/
getMySlips()                     // GET /get-slips/
createComplaint(title, desc)     // POST /complaint/
```

### `leave.ts`
```typescript
getLeaveInfo()                           // GET /leave/get-info/
getLeaveRequests(page, limit, status)    // GET /leave/get-requests/
createLeaveRequest(data)                 // POST /leave/create-request/
updateLeaveRequest(txId, dates)          // PATCH /leave/update-request/
deleteLeave(txId)                        // DELETE /leave/delete/:id
```

### `mess.ts`
```typescript
getMenu(hostelId)          // GET /mess/get-menu/:hostel/
giveFeedback(rating, desc) // POST /mess/give-feedback/
getFeedbacks()             // GET /mess/get-feedbacks/
```

### `group.ts`
```typescript
createGroup()              // POST /halloc/group/create/
getGroupMembers()          // GET /halloc/group/view/
leaveGroup()               // POST /halloc/group/leave/
getMyToken()               // GET /halloc/group/token/
searchStudent(id)          // POST /halloc/group/search-student/
```

### `invitation.ts`
```typescript
sendInvitation(token)       // POST /halloc/group/invitation/send/
getSentInvitations()        // GET /halloc/group/invitation/view/sent/
getReceivedInvitations()    // GET /halloc/group/invitation/view/received/
acceptInvitation(id)        // POST /halloc/group/invitation/accept/
rejectInvitation(id)        // POST /halloc/group/invitation/reject/
withdrawInvitation(id)      // POST /halloc/group/invitation/withdraw/
```

### `preference.ts`
```typescript
createPreference(groupId, hostels)  // POST /halloc/pref/create/
getPreferences()                    // GET /halloc/pref/get/
deletePreferences(groupId)          // POST /halloc/pref/delete/
getChoices()                        // GET /halloc/pref/choices/
retain()                            // POST /halloc/pref/retain/
getStatus()                         // GET /halloc/pref/status/
getAllotedHostel()                   // GET /halloc/pref/alloted-hostel-levels/
```

### `profile.ts`
```typescript
getProfile()                   // GET /user/
getHostelDetails(hostelId)     // GET /hostel/:id/
```

---

## Architecture Notes

### Auth Flow
1. User logs in via `/auth/login` — access + refresh tokens stored in `localStorage`.
2. Axios **request interceptor** (in `api.ts`) automatically attaches `Authorization: Bearer <token>` to every request.
3. Axios **response interceptor** handles 401 by attempting refresh; if refresh fails, redirects to login.

### 3D Hostel Viewer
Located at `src/components/allocation/hostels/`. Built with:
- `three` — 3D engine
- `@react-three/fiber` — React renderer
- `@react-three/drei` — Orbit controls, GLTF loader
- GLB models stored in `public/r3f/`

### State Management
- All server state managed by **TanStack Query** (queries + mutations).
- Local UI state via **React `useState`** / **React Context** (`UserContext`).
