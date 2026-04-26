---
layout: post
title: "Interface_Specification—M1"
date: 2026-04-25 9:00:00
excerpt: ""
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

  /* ═══════════════════════════════════════════════════════════
     ADDED HTML COMPONENTS (classes only)
  ═══════════════════════════════════════════════════════════ */

  .doc-header {
    background: linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 100%);
    border: 1px solid var(--border2);
    border-radius: 16px;
    padding: 2.5rem 3rem;
    margin-bottom: 2.5rem;
    position: relative;
    overflow: hidden;
  }
  .doc-header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .doc-header-tag {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 0.6rem;
  }
  .doc-header h1 {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0 0 0.5rem;
    line-height: 1.1;
  }
  .doc-header h1 span { color: var(--cyan); }
  .doc-header-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.2rem;
  }
  .meta-chip {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--text-dim);
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border2);
    border-radius: 999px;
    padding: 0.25rem 0.8rem;
    letter-spacing: 0.02em;
  }
  .meta-chip strong { color: var(--text); }

  .section-label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 0.5rem;
    display: block;
  }

  .m1-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .info-block {
    border-left: 3px solid var(--cyan);
    background: var(--card);
    border-radius: 0 10px 10px 0;
    padding: 1rem 1.25rem;
    margin: 1rem 0;
    font-size: 0.85rem;
    color: var(--text-dim);
    line-height: 1.6;
  }
  .info-block.warn { border-left-color: var(--amber); }
  .info-block strong { color: var(--text); }

  .section-divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2.5rem 0;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 5px;
    border: 1px solid;
    white-space: nowrap;
  }
  .badge-cyan    { color: var(--cyan);   border-color: rgba(56,189,248,0.4);  background: rgba(56,189,248,0.1); }
  .badge-green   { color: var(--green);  border-color: rgba(52,211,153,0.4);  background: rgba(52,211,153,0.1); }
  .badge-blue    { color: var(--blue);   border-color: rgba(96,165,250,0.4);  background: rgba(96,165,250,0.1); }
  .badge-orange  { color: var(--orange); border-color: rgba(251,146,60,0.4);  background: rgba(251,146,60,0.1); }
  .badge-amber   { color: var(--amber);  border-color: rgba(251,191,36,0.4);  background: rgba(251,191,36,0.1); }
  .badge-red     { color: var(--red);    border-color: rgba(248,113,113,0.4); background: rgba(248,113,113,0.1); }
  .badge-dim     { color: var(--text-dim); border-color: var(--border2); background: transparent; }

  /* ═══════════════════════════════════════════════════════════
     MARKDOWN RENDERED ELEMENTS (general selectors)
  ═══════════════════════════════════════════════════════════ */

  h1, h2, h3, h4, h5, h6 {
    color: var(--text);
    font-weight: 700;
    letter-spacing: -0.02em;
    border-color: var(--border);
  }
  h1 { font-size: 1.5rem; margin-top: 1.5rem; }
  h2 {
    font-size: 1.3rem;
    margin-top: 2.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
    color: var(--cyan);
  }
  h3 {
    font-size: 1.05rem;
    margin-top: 2rem;
    color: var(--text);
  }
  h4 {
    font-size: 0.95rem;
    margin-top: 1.5rem;
    color: var(--text-dim);
  }

  p {
    color: var(--text-dim);
    line-height: 1.7;
  }
  p strong { color: var(--text); }

  a {
    color: var(--cyan);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }
  a:hover {
    border-bottom-color: var(--cyan);
  }

  ul, ol {
    color: var(--text-dim);
    padding-left: 1.5rem;
  }
  li {
    margin: 0.35rem 0;
  }
  li::marker {
    color: var(--cyan);
  }

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2.5rem 0;
  }

  blockquote {
    border-left: 3px solid var(--orange);
    background: var(--card);
    border-radius: 0 10px 10px 0;
    padding: 0.75rem 1.25rem;
    margin: 1rem 0;
    color: var(--text-dim);
  }
  blockquote p { margin: 0; }
  blockquote strong { color: var(--text); }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.875rem;
    font-family: var(--font);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin: 1.2rem 0;
    display: table;
  }
  thead {
    background: var(--card2);
  }
  th {
    font-size: 0.63rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cyan);
    padding: 0.85rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
  }
  td {
    padding: 0.9rem 1.25rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-dim);
    vertical-align: middle;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr { transition: background 0.18s; }
  tbody tr:hover td { background: rgba(56,189,248,0.03); }
  td strong { color: var(--text); }
  td code {
    font-family: var(--mono);
    font-size: 0.78rem;
    background: rgba(56,189,248,0.08);
    color: var(--cyan);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }

  pre {
    background: var(--bg2) !important;
    border: 1px solid var(--border) !important;
    border-radius: 12px !important;
    padding: 1.25rem !important;
    overflow-x: auto;
    margin: 1.2rem 0;
  }
  pre code {
    font-family: var(--mono) !important;
    font-size: 0.82rem !important;
    line-height: 1.6 !important;
    color: var(--text) !important;
    background: transparent !important;
    padding: 0 !important;
    border-radius: 0 !important;
  }
  code {
    font-family: var(--mono) !important;
    font-size: 0.82rem;
    background: rgba(56,189,248,0.08);
    color: var(--cyan);
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
  }

  p code, li code {
    font-size: 0.78rem;
    padding: 0.1rem 0.35rem;
  }

  /* Table corner rounding */
  thead tr:first-child th:first-child { border-top-left-radius: 11px; }
  thead tr:first-child th:last-child  { border-top-right-radius: 11px; }
  tbody tr:last-child td:first-child { border-bottom-left-radius: 11px; }
  tbody tr:last-child td:last-child  { border-bottom-right-radius: 11px; }
</style>

<!-- ═══════════════════════════════════════════════════════════
     DOCUMENT HEADER
═══════════════════════════════════════════════════════════ -->

<div class="doc-header">
  <div class="doc-header-tag">Interface Specification</div>
  <h1><span>M1</span> Interface Specification</h1>
  <div class="doc-header-meta">
    <span class="meta-chip"><strong>Team:</strong> M1 — Patient Mobile Application</span>
    <span class="meta-chip"><strong>Programme:</strong> DSD 2025–2026</span>
    <span class="meta-chip"><strong>Partners:</strong> UTAD × Jilin University</span>
    <span class="meta-chip"><strong>Date:</strong> April 25, 2026</span>
    <span class="meta-chip"><strong>Author:</strong> Enhe Zhang</span>
    <span class="meta-chip"><strong>Status:</strong> <span class="badge badge-amber">Draft</span></span>
  </div>
</div>

<span class="section-label">Document Overview</span>

<div class="m1-card" style="margin-bottom:2rem;">
  This document defines the interface specifications for all data exchanges that cross the M1 module boundary. M1 is the Patient Mobile Application responsible for user interaction, session management, real-time feedback display, and data synchronization with the backend.
</div>

<hr class="section-divider">

# M1 Interface Specification

**Team M1 — Patient Mobile Application**

DSD 2025–2026 · UTAD × Jilin University

Date: April 25, 2026

Author: Enhe Zhang

---

## 1. Overview

This document defines the interface specifications for all data exchanges that cross the M1 module boundary. M1 is the Patient Mobile Application responsible for user interaction, session management, real-time feedback display, and data synchronization with the backend.

### Interface Summary

| ID | Direction | From | To | Data Flow |
|----|-----------|------|-----|-----------|
| IF-V2-M1 | Input | V2 Backend | M1 | User data, session data, recommendations |
| IF-M1-V2 | Output | M1 | V2 Backend | User registration, session control, measurement data |
| IF-S1-M1 | Input | S1 (Sensor Layer) | M1 | Raw IMU sensor data via BLE |
| IF-M1-S2 | Output | M1 | S2 (Sensor Layer) | Session control commands |
| IF-S2-M1 | Input | S2 (Sensor Layer) | M1 | Formatted sensor data |
| IF-Push-M1 | Input | Push Service | M1 | Push notifications |
| IF-M1-Push | Output | M1 | Push Service | Device token registration |

---

## 2. Interface Specifications

### 2.1 IF-V2-M1: V2 Backend Data (Input)

This interface covers data received from V2 Backend by M1, including user information, session details, and AI recommendations.

| Attribute | Value |
|------------|-------|
| Dataflow direction | V2 → M1 |
| Cross-device | Yes |
| Possible transport | HTTP REST API |
| Service provider | V2 Backend |
| Service user | M1 App |
| Contact person | Diogo Pinhel (V2 Lead) — In discussion |

#### 2.1.1 GET /users/:id

Retrieve user information from V2 Backend.

**Parameters:**
- `id` (path): User identifier (integer)

**Returns:** `User` object

```json
{
  "id": 1,
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient",
  "created_at": "2026-04-21T14:00:00.000Z",
  "session_count": 3
}
```

#### 2.1.2 GET /sessions/:id

Retrieve session details including all measurements.

**Parameters:**
- `id` (path): Session identifier (integer)

**Returns:** `Session` object

```json
{
  "id": 1,
  "user_id": 1,
  "user_name": "Ana Costa",
  "user_email": "ana@utad.pt",
  "started_at": "2026-04-21T14:00:00.000Z",
  "ended_at": null,
  "measurements": [
    {
      "id": 1,
      "session_id": 1,
      "joint_angles": {"knee": 45.2, "hip": 30.1},
      "is_correct": true,
      "timestamp": "2026-04-21T14:01:00.000Z"
    }
  ]
}
```

#### 2.1.3 GET /recommendations/engine/:userId

Retrieve AI-generated movement suggestions based on the last 10 sessions.

**Parameters:**
- `userId` (path): User identifier (integer)

**Returns:** `RecommendationEngine` object

```json
{
  "userId": 1,
  "sessions_analysed": 5,
  "generated_at": "2026-04-21T14:10:00.000Z",
  "suggestions": [
    {
      "joint": "knee",
      "accuracy_percent": 42,
      "total_measurements": 50,
      "priority": "high",
      "suggestion": "Needs improvement (42% correct)"
    }
  ]
}
```

---

### 2.2 IF-M1-V2: M1 Requests to V2 Backend (Output)

This interface covers requests from M1 to V2 Backend for user registration, session management, and data upload.

| Attribute | Value |
|------------|-------|
| Dataflow direction | M1 → V2 |
| Cross-device | Yes |
| Possible transport | HTTP REST API |
| Service provider | V2 Backend |
| Service user | M1 App |
| Contact person | M1 Team — In discussion |

#### 2.2.1 POST /users

Create a new user account.

**Request body:**
```json
{
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient"
}
```

**Returns (201):** `User` object

```json
{
  "id": 1,
  "name": "Ana Costa",
  "email": "ana@utad.pt",
  "role": "patient",
  "created_at": "2025-04-21T14:00:00.000Z"
}
```

**Error responses:**
- `400 Bad Request`: Missing required fields
- `409 Conflict`: Email already registered

#### 2.2.2 POST /sessions

Start a new rehabilitation session.

**Request body:**
```json
{
  "userId": 1
}
```

**Returns (201):** `Session` object

```json
{
  "id": 1,
  "user_id": 1,
  "user_name": "Ana Costa",
  "started_at": "2025-04-21T14:00:00.000Z",
  "ended_at": null
}
```

#### 2.2.3 PATCH /sessions/:id/end

End an active session.

**Parameters:**
- `id` (path): Session identifier

**Returns (200):** Updated `Session` object with `ended_at` timestamp

```json
{
  "id": 1,
  "user_id": 1,
  "user_name": "Ana Costa",
  "started_at": "2025-04-21T14:00:00.000Z",
  "ended_at": "2025-04-21T14:30:00.000Z"
}
```

**Error responses:**
- `404 Not Found`: Session does not exist
- `409 Conflict`: Session already closed

#### 2.2.4 POST /measurements

Add a single measurement to an active session.

**Request body:**
```json
{
  "sessionId": 1,
  "jointAngles": {
    "knee": 45.2,
    "hip": 30.1
  },
  "isCorrect": true
}
```

**Note:** Request uses **camelCase** (`sessionId`, `jointAngles`, `isCorrect`).

**Returns (201):** `Measurement` object

```json
{
  "id": 1,
  "session_id": 1,
  "joint_angles": {"knee": 45.2, "hip": 30.1},
  "is_correct": true,
  "timestamp": "2025-04-21T14:01:00.000Z"
}
```

**Note:** Response uses **snake_case** (`session_id`, `joint_angles`, `is_correct`).

#### 2.2.5 POST /measurements/batch

Add multiple measurements at once for efficient burst uploads.

**Request body:**
```json
{
  "sessionId": 1,
  "measurements": [
    {"jointAngles": {"knee": 45.2}, "isCorrect": true},
    {"jointAngles": {"knee": 38.0}, "isCorrect": false},
    {"jointAngles": {"knee": 41.5}, "isCorrect": true}
  ]
}
```

**Returns (201):**
```json
{
  "inserted": 3,
  "sessionId": 1
}
```

**Error responses:**
- `409 Conflict`: Session is closed

---

### 2.3 IF-S1-M1: Raw IMU Sensor Data

This interface covers BLE communication between the IMU sensor (S1) and M1 App.

| Attribute | Value |
|------------|-------|
| Dataflow direction | S1 → M1 |
| Cross-device | No (same device, BLE connection) |
| Possible transport | Bluetooth Low Energy (BLE) |
| Service provider | S1 (Sensor Layer) |
| Service user | M1 App |
| Contact person | Derui TANG (S1) — In discussion |

#### 2.3.1 Sensor Connection Flow

```
M1 App                    Sensor (S1)
  |                            |
  |--- BLE Scan -------------> |
  |                            |
  |<-- BLE Advertisement ------|
  |                            |
  |--- BLE Pair Request -----> |
  |                            |
  |<-- Pair Accept ------------|
  |                            |
  (Connection Established)     |
```

#### 2.3.2 Sensor Data Format

**Data format per sample:**

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | int | Unix timestamp in milliseconds |
| `deviceId` | string | Unique sensor device identifier |
| `deviceName` | string | Human-readable sensor name (e.g., "WTL1") |
| `accX/Y/Z` | float | Accelerometer readings (g) |
| `gyroX/Y/Z` | float | Gyroscope readings (deg/s) |
| `roll` | float | Roll angle (degrees) |
| `pitch` | float | Pitch angle (degrees) |
| `yaw` | float | Yaw angle (degrees) |

**Error types:**
- `"sensor_disconnected"`: BLE link lost
- `"data_corruption"`: Invalid data checksum
- `"timeout"`: No response within expected window

---

### 2.4 IF-M1-S2: Session Control Commands

This interface covers M1 sending session control commands to S2 to start and stop sensor data acquisition.

| Attribute | Value |
|------------|-------|
| Dataflow direction | M1 → S2 |
| Cross-device | No |
| Possible transport | Function call / HTTP REST API |
| Service provider | S2 |
| Service user | M1 App |
| Contact person | S2 Team — In discussion |

#### s2.session.start(sessionId, patientId, sensorJointMapping, payloadStatus)

Start a data acquisition session on S2.

**Parameters:**
- `sessionId` (string): Unique session identifier. **MUST be non-empty.**
- `patientId` (string): Patient identifier. **MUST be non-empty.**
- `sensorJointMapping` (object): Mapping from sensor device ID to joint name
- `payloadStatus` (string): Exercise/task type (e.g., `"bend_knee_10"`)

**Returns:** `StartResult`

```javascript
const result = s2.session.start(
  "session-001",
  "patient-001",
  {"1IYw...": "left_knee", "xR3f...": "right_elbow"},
  "bend_knee_10"
);
```

#### s2.session.stop()

Stop the current session and flush remaining data.

**Parameters:** None

**Returns:** `SessionSummary`

```javascript
{
  sessionId: "session-001",
  sampleCount: 1200,
  errorCount: 3,
  startTime: 1714456800000,
  endTime: 1714457100000
}
```

---

### 2.5 IF-S2-M1: Formatted Sensor Data

This interface covers real-time formatted sensor data pushed from S2 to M1 during active sessions.

| Attribute | Value |
|------------|-------|
| Dataflow direction | S2 → M1 |
| Cross-device | No |
| Possible transport | Function call / WebSocket |
| Service provider | S2 |
| Service user | M1 App |
| Contact person | S2 Team — In discussion |

#### s2.data.read()

Read accumulated formatted sensor data since last call.

**Parameters:** None

**Returns:** `FormatData`

```javascript
const data = s2.data.read();

for (const s of data.sensorData) {
  console.log(s.timestamp, s.deviceId, s.roll, s.pitch, s.yaw);
}

for (const t of data.targetAngles) {
  console.log(t.timestamp, t.angleID, t.angle);
}
```

---

### 2.6 IF-Push-M1: Push Notifications

This interface covers push notification delivery from external push service to M1.

| Attribute | Value |
|------------|-------|
| Dataflow direction | Push Service → M1 |
| Cross-device | Yes |
| Possible transport | FCM / APNS |
| Service provider | Push Service (V2-configured) |
| Service user | M1 App |
| Contact person | M1 Team — Pending confirmation |

#### 2.6.1 Notification Types

| Type | Trigger | Example Message |
|------|---------|-----------------|
| Session Reminder | Scheduled session time approaching | `"Your session starts in 30 minutes."` |
| Plan Updated | Doctor modifies patient's plan | `"Your rehabilitation plan has been updated."` |
| Doctor Message | Doctor sends a message | `"You have a new message from your physiotherapist."` |
| Milestone | Patient completes a streak or goal | `"You completed 7 sessions in a row!"` |

#### 2.6.2 class PushPayload

```typescript
interface PushPayload {
  type: "reminder" | "plan_update" | "doctor_message" | "milestone";
  title: string;        // Notification title
  body: string;         // Notification body
  timestamp: number;    // Unix ms
  data?: object;        // Optional deep link data
}
```

---

### 2.7 IF-M1-Push: Device Token Registration

This interface covers M1's registration with the push notification service.

| Attribute | Value |
|------------|-------|
| Dataflow direction | M1 → V2 / Push Service |
| Cross-device | Yes |
| Possible transport | HTTP REST API |
| Service provider | V2 Backend |
| Service user | M1 App |
| Contact person | M1 Team — In discussion |

#### 2.7.1 Token Registration Flow

```
M1 App                    Push Service              V2 Backend
  |                            |                         |
  |--- Register Device ------> |                         |
  |                            |                         |
  |<-- Device Token ---------- |                         |
  |                            |                         |
  |--- Report Token ------------------------------------->|
  |                                                      |
  |<-- Token Stored --------------------------------------|
```

**Note:** Push notification delivery is configured by V2. M1 only handles registration and display.

---

## 3. Data Structures Summary

### 3.1 V2 Backend Types

#### User
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: "patient" | "clinician";
  created_at: string;    // ISO 8601
  session_count?: number;
}
```

#### Session
```typescript
interface Session {
  id: number;
  user_id: number;
  user_name: string;
  user_email: string;
  started_at: string;    // ISO 8601
  ended_at: string | null;
  measurements?: Measurement[];
}
```

#### Measurement
```typescript
interface Measurement {
  id: number;
  session_id: number;
  joint_angles: { [joint: string]: number };
  is_correct: boolean;
  timestamp: string;     // ISO 8601
}
```

#### Recommendation
```typescript
interface Recommendation {
  id: number;
  session_id: number;
  movement: string;
  confidence: number;     // 0.0 - 1.0
  status: "pending" | "accepted" | "rejected";
  created_at: string;     // ISO 8601
}
```

### 3.2 S2 Data Types

#### StartResult
```typescript
interface StartResult {
  success: boolean;         // Whether session started
  errorMessage?: string;    // Reason for failure
}
```

**Error values:**
- `"session_already_active"`
- `"sensor_not_connected"`

#### SessionSummary
```typescript
interface SessionSummary {
  sessionId: string;       // Session identifier
  sampleCount: number;     // Total valid samples
  errorCount: number;      // Rejected samples
  startTime: number;       // Start timestamp (Unix ms)
  endTime: number;         // End timestamp (Unix ms)
}
```

#### FormatData
```typescript
interface FormatData {
  sessionContext: SessionContext;   // Session-level info
  sensorData: SensorSample[];        // Validated sensor readings
  targetAngles: TargetAngle[];      // Computed target angles
  errors: ErrorEvent[];             // Error events
}
```

#### SessionContext
```typescript
interface SessionContext {
  sessionId: string;           // Unique session ID
  patientId: string;           // Patient ID
  sensorJointMapping: object;  // Device ID → joint name
  payloadStatus: string;       // Exercise type
}
```

#### SensorSample
```typescript
interface SensorSample {
  timestamp: number;     // Unix ms
  deviceId: string;      // Sensor UUID
  deviceName: string;   // e.g., "WTL1"
  accX: number;          // Accelerometer X (g)
  accY: number;          // Accelerometer Y (g)
  accZ: number;          // Accelerometer Z (g)
  gyroX: number;         // Gyroscope X (deg/s)
  gyroY: number;         // Gyroscope Y (deg/s)
  gyroZ: number;         // Gyroscope Z (deg/s)
  roll: number;          // Roll (deg)
  pitch: number;         // Pitch (deg)
  yaw: number;           // Yaw (deg)
}
```

#### TargetAngle
```typescript
interface TargetAngle {
  timestamp: number;    // Unix ms when computed
  angleID: string;      // Angle identifier
  angle: number;        // Angle value (degrees)
}
```

#### ErrorEvent
```typescript
interface ErrorEvent {
  timestamp: number;     // Unix ms
  sensorId?: string;     // Sensor causing error (if applicable)
  errorType: string;     // Error category
  message: string;       // Human-readable description
}
```

**Error types:**
- `"sensor_disconnected"`
- `"validation_failure"`
- `"timeout"`

---

## 4. Communication Methods

### 4.1 HTTP REST API (Cross-Device)

Used for all V2 Backend communication.

**Base URL:** `http://<server-ip>:3000`

**Headers:**
```
Content-Type: application/json
```

**Response Format:** All responses are JSON

**Error Format:**
```json
{
  "error": "Human-readable message"
}
```

| HTTP Status | Meaning |
|-------------|---------|
| 200 OK | Request successful |
| 201 Created | Resource created successfully |
| 400 Bad Request | Missing required fields |
| 404 Not Found | Resource does not exist |
| 409 Conflict | Duplicate resource or invalid state |
| 500 Server Error | Unexpected server failure |

### 4.2 Bluetooth Low Energy (Same Device)

Used for IMU sensor communication.

**Services:**
- Device Discovery via BLE scan
- Data streaming via BLE characteristics

**Connection Flow:**
1. M1 initiates BLE scan
2. Sensor advertises presence
3. M1 requests pairing
4. Sensor accepts pairing
5. Secure BLE connection established

### 4.3 Function Call (Same Device)

Used for S2 communication when running on the same device.

---

## 5. Revision History

| Date | Author | Description | Status |
|------|--------|-------------|--------|
| Apr 25, 2026 | Enhe Zhang | Initial interface specification for M1 | Draft |
| Apr 25, 2026 | Enhe Zhang | Separated IF-M1-S2 and IF-S2-M1; fixed interface count | Draft |
| Apr 25, 2026 | Enhe Zhang | Split V2 communication into 2.1 IF-V2-M1 (input) and 2.2 IF-M1-V2 (output); now 7 interfaces total | Draft |

---

**Team M1 — Patient Mobile Application**
**DSD 2025–2026 · UTAD × Jilin University**
