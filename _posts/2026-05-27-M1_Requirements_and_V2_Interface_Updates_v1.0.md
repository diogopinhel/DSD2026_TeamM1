---
layout: post
title: "M1 Requirements & V2 Interface Updates — Doctor Binding & Schedule Enhancement"
date: 2026-05-27 00:00:00
excerpt: "Consolidated document covering Internal Use Cases for patient-doctor binding and schedule detail enhancements, plus the corresponding V2 HTTP REST API adjustments."
doc_type: "Requirements"
status: current
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg:        #0b0f1a;
    --bg2:       #0e1320;
    --bg3:       #111827;
    --card:      #141c2e;
    --card2:     #1a2236;
    --border:    rgba(255,255,255,0.07);
    --border2:   rgba(255,255,255,0.12);
    --cyan:      #38bdf8;
    --cyan-dim:  rgba(56,189,248,0.15);
    --green:     #34d399;
    --green-dim: rgba(52,211,153,0.12);
    --blue:      #60a5fa;
    --blue-dim:  rgba(96,165,250,0.08);
    --orange:    #fb923c;
    --orange-dim:rgba(251,146,60,0.08);
    --amber:     #fbbf24;
    --amber-dim: rgba(251,191,36,0.08);
    --red:       #f87171;
    --red-dim:   rgba(248,113,113,0.08);
    --purple:    #c084fc;
    --purple-dim:rgba(192,132,252,0.08);
    --text:      #e2e8f0;
    --text-dim:  #94a3b8;
    --text-xs:   #475569;
    --font:      'Inter', -apple-system, sans-serif;
    --mono:      'JetBrains Mono', 'Fira Code', monospace;
  }

  body, .markdown-body {
    background: var(--bg) !important;
    color: var(--text) !important;
    font-family: var(--font) !important;
    line-height: 1.7;
  }

  .hld-header {
    background: linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 100%);
    border: 1px solid var(--border2);
    border-radius: 16px;
    padding: 2.5rem 3rem;
    margin-bottom: 2.5rem;
    position: relative;
    overflow: hidden;
  }
  .hld-header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 80% 50%, rgba(52,211,153,0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  .hld-header-tag {
    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--green); margin-bottom: 0.6rem;
  }
  .hld-header h1 {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 800;
    letter-spacing: -0.03em; color: var(--text); margin: 0 0 0.5rem; line-height: 1.1;
  }
  .hld-header h1 span { color: var(--green); }
  .hld-header-meta {
    display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.2rem;
  }
  .meta-chip {
    font-size: 0.72rem; font-weight: 500; color: var(--text-dim);
    background: rgba(255,255,255,0.04); border: 1px solid var(--border2);
    border-radius: 999px; padding: 0.25rem 0.8rem; letter-spacing: 0.02em;
  }
  .meta-chip strong { color: var(--text); }

  .section-label {
    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--green); margin-bottom: 0.5rem; display: block;
  }

  .badge {
    display: inline-flex; align-items: center; gap: 0.2rem;
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 0.2rem 0.6rem;
    border-radius: 5px; border: 1px solid; white-space: nowrap;
  }
  .badge-cyan    { color: var(--cyan);   border-color: rgba(56,189,248,0.4);  background: rgba(56,189,248,0.1); }
  .badge-green   { color: var(--green);  border-color: rgba(52,211,153,0.4);  background: rgba(52,211,153,0.1); }
  .badge-blue    { color: var(--blue);   border-color: rgba(96,165,250,0.4);  background: rgba(96,165,250,0.1); }
  .badge-orange  { color: var(--orange); border-color: rgba(251,146,60,0.4);  background: rgba(251,146,60,0.1); }
  .badge-amber   { color: var(--amber);  border-color: rgba(251,191,36,0.4);  background: rgba(251,191,36,0.1); }
  .badge-red     { color: var(--red);    border-color: rgba(248,113,113,0.4); background: rgba(248,113,113,0.1); }
  .badge-purple  { color: var(--purple); border-color: rgba(192,132,252,0.4); background: rgba(192,132,252,0.1); }
  .badge-dim     { color: var(--text-dim); border-color: var(--border2); background: transparent; }

  .m1-table-wrap { border-radius: 12px; border: 1px solid var(--border); overflow: hidden; margin: 1.2rem 0; }
  .m1-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; font-family: var(--font); }
  .m1-table th {
    font-size: 0.63rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--cyan); padding: 0.85rem 1.25rem; text-align: left;
    border-bottom: 1px solid var(--border); background: var(--card2); white-space: nowrap;
  }
  .m1-table td { padding: 0.9rem 1.25rem; border-bottom: 1px solid var(--border); color: var(--text-dim); vertical-align: top; }
  .m1-table tr:last-child td { border-bottom: none; }
  .m1-table tbody tr { transition: background 0.18s; }
  .m1-table tbody tr:hover td { background: rgba(56,189,248,0.03); }
  .m1-table td strong { color: var(--text); }
  .m1-table td code {
    font-family: var(--mono); font-size: 0.78rem;
    background: rgba(56,189,248,0.08); color: var(--cyan); padding: 0.1rem 0.4rem; border-radius: 4px;
  }

  .track-card {
    background: var(--card); border: 1px solid var(--border); border-radius: 14px;
    overflow: hidden; margin: 1.5rem 0;
  }
  .track-card-header {
    background: var(--card2); border-bottom: 1px solid var(--border);
    padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  }
  .track-id {
    font-family: var(--mono); font-size: 0.8rem; font-weight: 700;
    padding: 0.22rem 0.7rem; border-radius: 6px; white-space: nowrap;
  }
  .track-id-cyan   { color: var(--cyan);   background: rgba(56,189,248,0.1);  border: 1px solid rgba(56,189,248,0.3); }
  .track-id-orange { color: var(--orange); background: rgba(251,146,60,0.1);  border: 1px solid rgba(251,146,60,0.3); }
  .track-id-purple { color: var(--purple); background: rgba(192,132,252,0.1); border: 1px solid rgba(192,132,252,0.3); }
  .track-name { font-size: 0.95rem; font-weight: 700; color: var(--text); flex: 1; }
  .track-focus {
    padding: 0.85rem 1.5rem; font-size: 0.85rem; color: var(--text-dim); line-height: 1.65;
    border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.015);
  }
  .track-focus strong { color: var(--text); }

  .info-block {
    border-left: 3px solid var(--cyan); background: var(--card);
    border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 1rem 0;
    font-size: 0.85rem; color: var(--text-dim); line-height: 1.6;
  }
  .info-block.green { border-left-color: var(--green); }
  .info-block.warn  { border-left-color: var(--amber); }
  .info-block.red   { border-left-color: var(--red); }
  .info-block strong { color: var(--text); }
  .info-block code {
    font-family: var(--mono); font-size: 0.76rem; color: var(--cyan);
    background: rgba(56,189,248,0.08); padding: 0.1rem 0.35rem; border-radius: 4px;
  }

  .wechat-msg {
    background: rgba(52,211,153,0.04); border: 1px solid rgba(52,211,153,0.18);
    border-radius: 8px; padding: 0.8rem 1rem; margin: 0.75rem 0;
    font-size: 0.83rem; color: var(--text-dim); font-style: italic; line-height: 1.6;
  }
  .wechat-msg-label {
    display: block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--green); margin-bottom: 0.4rem;
    font-style: normal;
  }

  .dod-list { list-style: none !important; padding-left: 1.3rem !important; margin: 0.6rem 0 !important; }
  .dod-list li { position: relative; margin: 0.45rem 0 !important; color: var(--text-dim); font-size: 0.875rem; line-height: 1.6; }
  .dod-list li::before { content: '☐'; position: absolute; left: -1.3rem; color: var(--text-xs); }
  .dod-list li code {
    font-family: var(--mono); font-size: 0.76rem; color: var(--cyan);
    background: rgba(56,189,248,0.08); padding: 0.1rem 0.35rem; border-radius: 4px;
  }

  pre {
    background: var(--bg2) !important; border: 1px solid var(--border) !important;
    border-radius: 10px !important; padding: 1.2rem !important;
    font-family: var(--mono) !important; font-size: 0.8rem !important;
    line-height: 1.65 !important; overflow-x: auto; color: var(--text);
    margin: 1rem 0 !important;
  }
  code {
    font-family: var(--mono); font-size: 0.8rem;
    background: rgba(56,189,248,0.08); color: var(--cyan);
    padding: 0.1rem 0.35rem; border-radius: 4px;
  }
  h2 { font-size: 1.3rem; font-weight: 700; color: var(--cyan); margin-top: 2.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }
  h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); margin-top: 2rem; }
  h4 { font-size: 0.92rem; font-weight: 700; color: var(--text-dim); margin-top: 1.4rem; margin-bottom: 0.5rem; }
  p  { color: var(--text-dim); line-height: 1.7; }
  p strong { color: var(--text); }
  ul { color: var(--text-dim); padding-left: 1.5rem; }
  ol { color: var(--text-dim); padding-left: 1.5rem; }
  li { margin: 0.3rem 0; }
  li::marker { color: var(--green); }
  ol li::marker { color: var(--cyan); }

  .post-header, .post-title, .page-heading,
  h1.post-title, h1.page-title,
  .entry-title, .article-title,
  .post > h1:first-of-type,
  article > h1:first-of-type,
  .content > h1:first-of-type,
  .post-content > h1:first-of-type { display: none !important; }
  .post-meta, .post-date, time.dt-published,
  .page-date, span.post-date { display: none !important; }

  .download-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    margin-top: 1.4rem;
    padding: 0.6rem 1.4rem;
    background: linear-gradient(135deg, #34d399 0%, #059669 100%);
    color: #0b0f1a; font-weight: 700; font-size: 0.82rem;
    letter-spacing: 0.06em; text-transform: uppercase;
    border-radius: 8px; text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 0 18px rgba(52,211,153,0.35);
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .download-btn:hover {
    box-shadow: 0 0 28px rgba(52,211,153,0.55);
    transform: translateY(-1px);
    text-decoration: none; border-bottom: none;
  }
  .download-btn svg { flex-shrink: 0; }
</style>

<!-- DOCUMENT HEADER -->
<div class="hld-header">
  <div class="hld-header-tag">Consolidated Requirements & Interface Update · M1 Patient Mobile Application</div>
  <h1>M1 Requirements & V2 Interface Updates<br><span>Doctor Binding & Schedule Enhancement</span></h1>
  <div class="hld-header-meta">
    <span class="meta-chip"><strong>Project:</strong> Limb Motion Recovery App (M1 — Patient Mobile Application)</span>
    <span class="meta-chip"><strong>Programme:</strong> DSD 2025-2026 · UTAD × Jilin University</span>
    <span class="meta-chip"><strong>Date:</strong> May 27, 2026</span>
    <span class="meta-chip"><strong>Author:</strong> Yiding WANG</span>
    <span class="meta-chip"><strong>Status:</strong> <span class="badge badge-green">Active</span></span>
  </div>
</div>

---

## Internal Use Cases (New)

<span class="section-label">New requirements — doctor-patient binding & schedule detail enhancement</span>

### 1. Actor Table

*Select and supplement from the following candidate pool: Doctor, Patient, System Administrator, S1, S2, V1, V2, M1, M2.*

| Actor | Description |
| :--- | :--- |
| Patient | External business participant, triggers via UI |
| M1 | Application core, coordinates modules and renders UI |
| V2 | Central backend database, provides HTTP REST API |

### 2. Use Case Table

| Use Case ID | Use Case Name | Primary Actors | Brief Description |
| :--- | :--- | :--- | :--- |
| IUC-M1-06 | Patient Registration with Doctor Binding | Patient, M1, V2 | Patient registers account and binds a doctor during registration |
| IUC-M1-07 | Doctor Rebinding in Settings | Patient, M1, V2 | Patient changes bound doctor via Profile Settings |
| IUC-M1-08 | View Schedule Detail with Video | Patient, M1 | Patient views plan details including description and demo video |
| IUC-M1-09 | Mark Schedule as Completed | Patient, M1, V2 | Patient confirms completion and updates schedule status |

### 3. Detailed Use Cases

#### IUC-M1-06+Patient Registration with Doctor Binding

| Element | Description |
| :--- | :--- |
| **Reference** | UC-M1-01 (Register/Login) |
| **Actors** | Patient, M1 (AppFrontend), V2 (DB) |
| **Goal** | Create patient account and establish initial doctor-patient binding |
| **Summary** | Patient enters registration info and doctorId; M1 verifies doctor existence via V2; M1 shows confirmation dialog with doctor name, role and id; upon confirmation, M1 submits registration to V2; after successful registration, M1 immediately PATCHes doctorId to V2; if binding fails, M1 shows Snackbar prompting manual bind later |
| **Trigger** | Patient taps "Register" button on registration screen |
| **Precondition** | Patient has not registered; Patient knows target doctorId; Network available |
| **Postconditions** | Patient account created in V2; doctorId bound if verification and PATCH succeed; patient navigated to home screen |

**Basic Flow**

| Step | Patient | M1 | V2 |
| :--- | :--- | :--- | :--- |
| 1 | Enters name, email, password, doctorId | | |
| 2 | Taps "Verify Doctor" | | |
| 3 | | Sends `GET /users/:doctorId` request | |
| 4 | | | Returns doctor info (name, role, id) |
| 5 | | Validates role == "clinician" | |
| 6 | | Displays confirmation dialog (name + role + doctorId) | |
| 7 | Confirms doctor in dialog | | |
| 8 | Taps "Register" | | |
| 9 | | Sends `POST /auth/register` | |
| 10 | | | Creates user with doctorId initialized to 0 |
| 11 | | Receives JWT token and user object | |
| 12 | | Sends `PATCH /users/:id` with {doctorId: verifiedId} | |
| 13 | | | Updates doctorId |
| 14 | | Navigates to Home screen | |

**Alternative Flow** (Optional)

| Occurrence Step | Condition | System Response |
| :--- | :--- | :--- |
| 2 | doctorId field empty or invalid format | M1 disables "Register" button, shows inline error |
| 4 | V2 returns 404 or role != "clinician" | M1 shows "Invalid doctor ID" error, clears verification state |
| 6 | Patient cancels dialog | M1 closes dialog, keeps doctorId field, allows re-verify |
| 12 | PATCH fails (network/server error) | M1 shows Snackbar: "Binding failed. Please bind manually in Settings." |
| 12 | PATCH returns 409 or 403 | M1 shows error dialog and redirects to Settings |

---

#### IUC-M1-07+Doctor Rebinding in Settings

| Element | Description |
| :--- | :--- |
| **Reference** | IUC-M1-06 |
| **Actors** | Patient, M1, V2 |
| **Goal** | Allow patient to change bound doctor after registration |
| **Summary** | Patient navigates to Settings > My Doctor; M1 displays current doctor info from V2; patient enters new doctorId and verifies; M1 queries V2 and shows confirmation dialog; upon confirmation, M1 PATCHes new doctorId to V2; M1 refreshes display |
| **Trigger** | Patient taps "Change Doctor" in Settings |
| **Precondition** | Patient logged in; current doctorId may be 0 (unbound) |
| **Postconditions** | doctorId updated in V2; Settings page shows new doctor info |

**Basic Flow**

| Step | Patient | M1 | V2 |
| :--- | :--- | :--- | :--- |
| 1 | Navigates to Settings > My Doctor | | |
| 2 | | Sends `GET /auth/me` or reads cached user | |
| 3 | | Displays current doctor info (name, role, id) or "Not bound" | |
| 4 | Enters new doctorId | | |
| 5 | Taps "Verify" | | |
| 6 | | Sends `GET /users/:doctorId` | |
| 7 | | | Returns doctor info |
| 8 | | Validates role == "clinician" | |
| 9 | | Shows confirmation dialog (name + role + doctorId) | |
| 10 | Confirms | | |
| 11 | | Sends `PATCH /users/:id` with new doctorId | |
| 12 | | | Updates doctorId |
| 13 | | Refreshes Settings page with new doctor info | |

**Alternative Flow** (Optional)

| Occurrence Step | Condition | System Response |
| :--- | :--- | :--- |
| 6 | doctorId same as current | M1 shows inline warning "Already bound to this doctor" |
| 7 | 404 or role != "clinician" | M1 shows "Invalid doctor ID" |
| 10 | Patient cancels dialog | M1 closes dialog, no PATCH sent |
| 11 | PATCH fails | M1 shows Snackbar "Update failed. Please try again." |

---

#### IUC-M1-08+View Schedule Detail with Video

| Element | Description |
| :--- | :--- |
| **Reference** | UC-M1-05 (Plans) |
| **Actors** | Patient, M1 |
| **Goal** | Display detailed rehabilitation plan with task description and demo video |
| **Summary** | Patient taps a schedule item from Plans list; M1 receives schedule object (passed from list); M1 renders date, notes (as task description), video player with videoUrl, and completion button; M1 loads video via ExoPlayer with local caching |
| **Trigger** | Patient taps schedule card in Plans list |
| **Precondition** | Plans list already loaded from V2; schedule object contains date, notes, videoUrl, status |
| **Postconditions** | Detail page rendered; video ready to play; completion button state reflects status |

**Basic Flow**

| Step | Patient | M1 | V2 |
| :--- | :--- | :--- | :--- |
| 1 | Taps schedule item in Plans list | | |
| 2 | | Receives schedule object from list navigation | |
| 3 | | Renders date, notes, video player placeholder | |
| 4 | | Initializes ExoPlayer with videoUrl | |
| 5 | | Displays completion button (enabled if status != "completed") | |
| 6 | Taps play button | | |
| 7 | | ExoPlayer buffers and plays video | |

**Alternative Flow** (Optional)

| Occurrence Step | Condition | System Response |
| :--- | :--- | :--- |
| 4 | videoUrl is null or empty | M1 hides video player, shows "Video not available" placeholder |
| 4 | Network error loading video | M1 shows "Unable to load video. Check connection." |
| 5 | status == "completed" | Button shows "completed" and is disabled |

---

#### IUC-M1-09+Mark Schedule as Completed

| Element | Description |
| :--- | :--- |
| **Reference** | IUC-M1-08 |
| **Actors** | Patient, M1, V2 |
| **Goal** | Patient confirms plan completion and updates server status |
| **Summary** | Patient taps completion button on schedule detail; M1 shows AlertDialog for confirmation; upon confirmation, M1 sends PATCH /schedule/:id with status "completed"; V2 updates record; M1 disables button and shows "completed" |
| **Trigger** | Patient taps "complete" button |
| **Precondition** | Schedule detail page open; current status != "completed"; Network available |
| **Postconditions** | V2 schedule status set to "completed"; UI button disabled and relabeled |

**Basic Flow**

| Step | Patient | M1 | V2 |
| :--- | :--- | :--- | :--- |
| 1 | Taps "complete" button | | |
| 2 | | Shows AlertDialog: "Confirm completion?" | |
| 3 | Taps "Confirm" | | |
| 4 | | Sends `PATCH /schedule/:id` {status: "completed"} | |
| 5 | | | Updates status |
| 6 | | Receives 200 OK | |
| 7 | | Disables button, changes text to "completed" | |

**Alternative Flow** (Optional)

| Occurrence Step | Condition | System Response |
| :--- | :--- | :--- |
| 3 | Patient taps "Cancel" | M1 dismisses dialog, no request sent |
| 4 | PATCH returns 409 Conflict | M1 shows "Schedule already completed" |
| 4 | PATCH fails (network/500) | M1 shows Snackbar "Update failed. Please try again." |
| 4 | status already "completed" (race condition) | M1 shows "Already completed" and disables button |

---

## V2 Interface Specification Updates

<span class="section-label">Backend API changes required to support new M1 features</span>

### 3.2 Users — Field Additions & New Endpoint

Used by: M1

#### 3.2.1 `GET /users/:id` — Response Update

**Note:** Response now includes `doctor_id` field. Default value is `0` for newly registered patients, indicating no doctor bound.

**Response (200):**
```json
{
  "id": 1,
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient",
  "doctor_id": 5,
  "created_at": "2026-05-02T13:43:28.000Z",
  "session_count": 3
}
```

**Note:** When `role` is `"clinician"`, `doctor_id` is irrelevant and may be `0` or omitted from business logic.

---

#### 3.2.2 `PATCH /users/:id` — New Endpoint

Update user profile, including doctorId binding.

**Request body:**
```json
{
  "doctorId": 5
}
```

**Response (200):**
```json
{
  "id": 1,
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient",
  "doctor_id": 5,
  "created_at": "2026-05-02T13:43:28.000Z"
}
```

**Note:** `doctorId` is optional in request. Only fields provided are updated. Response uses snake_case per convention.

**Note:** When role is `"patient"`, `doctor_id` represents the bound clinician. Default is `0` (unbound).

**Error responses:**
- 400 Bad Request: Invalid doctorId format or user not found
- 403 Forbidden: Attempting to bind to a user whose role is not "clinician"

---

### 3.1 Authentication — Behavior Update

Used by: M1

#### 3.1.1 `POST /auth/register` — doctor_id Initialization

**Note:** Upon successful registration, the system automatically initializes `doctor_id` to `0` for all new users. This field is returned in the user object.

**Response (201):**
```json
{
  "token": "jwt-token-string",
  "user": {
    "id": 1,
    "name": "Ana Costa",
    "email": "ana@utad.pt",
    "role": "patient",
    "doctor_id": 0,
    "created_at": "2026-05-02T13:43:28.000Z"
  }
}
```

---

#### 3.1.3 `GET /auth/me` — Response Update

**Note:** Response now includes `doctor_id` field. Default value is `0` for patients who have not bound a doctor.

**Response (200):**
```json
{
  "id": 1,
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient",
  "doctor_id": 5,
  "created_at": "2026-05-02T13:43:28.000Z"
}
```

---

### 3.6 Schedule — Field Addition

Used by: M1 (read)

**Note:** All schedule-related responses (`POST /schedule`, `GET /schedule/:userId`, `PATCH /schedule/:id`) now include an optional `video_url` field. This URL points to an externally hosted demonstration video (e.g., GitHub Pages). If no video is assigned, the field value is `null`.

#### 3.6.1 `POST /schedule` — Response Update

**Response (201):**
```json
{
  "id": 1,
  "user_id": 1,
  "exercise": "squat",
  "date": "2026-05-03T21:43:43.000Z",
  "duration": 30,
  "notes": "Keep back straight, bend knees to 90 degrees",
  "video_url": "https://dsd2026-m1.github.io/videos/squat_demo.mp4",
  "status": "pending",
  "created_at": "2026-05-02T13:43:46.000Z"
}
```

#### 3.6.2 `GET /schedule/:userId` — Response Update

**Response (200):**
```json
[
  {
    "id": 1,
    "user_id": 1,
    "exercise": "squat",
    "date": "2026-05-03T21:43:43.000Z",
    "duration": 30,
    "notes": "Keep back straight, bend knees to 90 degrees",
    "video_url": "https://dsd2026-m1.github.io/videos/squat_demo.mp4",
    "status": "pending",
    "created_at": "2026-05-02T13:43:46.000Z"
  }
]
```

#### 3.6.3 `PATCH /schedule/:id` — Response Update

**Response (200):**
```json
{
  "id": 1,
  "user_id": 1,
  "exercise": "squat",
  "date": "2026-05-03T21:43:43.000Z",
  "duration": 30,
  "notes": "Keep back straight, bend knees to 90 degrees",
  "video_url": "https://dsd2026-m1.github.io/videos/squat_demo.mp4",
  "status": "completed",
  "created_at": "2026-05-02T13:43:46.000Z"
}
```

---

<div style="text-align:center; padding:2rem 0 1rem; color:#475569; font-size:0.72rem; letter-spacing:0.06em;">
  <span style="color:#34d399; font-weight:700;">M1 — Patient Mobile Application</span> &nbsp;·&nbsp;
  Requirements & Interface Update &nbsp;·&nbsp;
  DSD 2025–2026 · UTAD × Jilin University &nbsp;·&nbsp;
  Date: May 27, 2026 &nbsp;·&nbsp; Owner: <span style="color:#38bdf8;">M1 Team</span>
</div>
