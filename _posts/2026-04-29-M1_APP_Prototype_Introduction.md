---
layout: post
title: "M1 APP Prototype Introduction v0.2"
date: 2026-04-29 7:00:00
excerpt: ""
---

<style>
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --border: #334155;
    --success: #22c55e;
    --warning: #f59e0b;
    --code-bg: #0f172a;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    line-height: 1.7;
    padding: 2rem 2.5rem;
  }

  h1 {
    color: var(--text-primary);
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.6rem;
    margin-top: 2.5rem;
    font-size: 1.9rem;
    font-weight: 600;
  }

  h2 {
    color: var(--text-primary);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.4rem;
    margin-top: 2.2rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    color: var(--accent);
    margin-top: 1.8rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  h4 {
    color: var(--text-secondary);
    margin-top: 1.4rem;
    font-size: 1.05rem;
    font-weight: 600;
  }

  p, li {
    color: var(--text-secondary);
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  a:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.2rem 0;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }

  th {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
    padding: 0.75rem 1rem;
    text-align: left;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
  }

  td {
    padding: 0.7rem 1rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background-color: rgba(59, 130, 246, 0.08);
  }

  blockquote {
    border-left: 4px solid var(--accent);
    background-color: var(--bg-secondary);
    padding: 0.8rem 1.2rem;
    margin: 1rem 0;
    border-radius: 0 6px 6px 0;
    color: var(--text-secondary);
  }

  code {
    background-color: var(--code-bg);
    color: #e2e8f0;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: "Fira Code", "Consolas", monospace;
    font-size: 0.9em;
    border: 1px solid var(--border);
  }

  pre {
    background-color: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem 1.2rem;
    overflow-x: auto;
  }

  pre code {
    background: none;
    border: none;
    padding: 0;
  }

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2rem 0;
  }

  ul, ol {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  .status-badge {
    display: inline-block;
    padding: 0.15rem 0.6rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .status-done {
    background-color: rgba(34, 197, 94, 0.15);
    color: var(--success);
  }

  .status-partial {
    background-color: rgba(245, 158, 11, 0.15);
    color: var(--warning);
  }

  .status-pending {
    background-color: rgba(100, 116, 139, 0.2);
    color: var(--text-muted);
  }
</style>

Author：Enhe Zhang

## 1. Application Overview

This application is a mobile APP for rehabilitation patients, developed based on HarmonyOS. It aims to realize real-time rehabilitation training monitoring and data recording by connecting BLE sensors. The APP adopts a bottom-tab navigation architecture, containing four core modules: **Main (Home)**, **Test (Training)**, **Record**, and **Account**.

---

## 2. Navigation Architecture

The fixed bottom navigation bar contains four entries:

| Tab | Icon | Function |
|:---:|:---:|:---|
| **main** | 🏠 Home | Application main entry, displaying core overview information |
| **test** | ➕ Training | Rehabilitation training initiation and sensor connection |
| **record** | 📄 Record | Historical rehabilitation data and training record review |
| **account** | 👤 Account | User login, registration, and personal information management |

> **Interaction Note:** The currently selected tab is highlighted in blue; page transitions use smooth sliding animations.

---

## 3. Development Progress

The following table summarizes the current development status of each module based on the prototype demonstration:

| Module | Development Status | Remarks |
|:---|:---|:---|
| **Account** | <span class="status-badge status-partial">Partially Completed</span> | Preliminary development of login, registration, and account home pages is complete. **Not yet connected to the backend** (V2); all authentication logic is currently local/mock. |
| **Test / Rehab Training** | <span class="status-badge status-partial">Partially Completed</span> | The training home page and sensor connection page have been preliminarily implemented. BLE scanning interaction is in place; actual device pairing and real-time data streaming are pending. |
| **Main (Home)** | <span class="status-badge status-pending">Framework Only</span> | Basic page shell created; dashboard content and data binding remain to be developed. |
| **Record** | <span class="status-badge status-pending">Framework Only</span> | Basic page shell created; historical data retrieval and visualization remain to be developed. |

---

## 4. Functional Module Details

### 4.1 Account Module

The Account module handles user identity authentication and session management, including two states: **Logged-out** and **Logged-in**.

#### 4.1.1 Login Page

- **Input Fields:**
  - Username
  - Password, with visibility toggle (👁️ icon)
- **Action Button:** Log In
- **Secondary Entry:** "No account? **Create an account**" — navigates to the registration page
- **Status Feedback:** Button displays "Logging in..." loading state during authentication

#### 4.1.2 Registration Page (Create Account)

- **Page Title:** Create Your Account
- **Subtitle:** Sign up to start your rehabilitation journey
- **Input Fields:**
  - Username: minimum 3 characters, with real-time placeholder hint
  - Password: minimum 6 characters
  - Confirm Password: re-enter password to ensure consistency
- **Password Visibility:** Each password field is equipped with a show/hide toggle button
- **Action Button:** Create Account
- **Status Feedback:**
  - Button displays "Creating..." loading state upon submission
  - Bottom toast prompt on success: "Account created successfully!"
  - Automatic navigation back to the login page
- **Secondary Entry:** "Already have an account? **Sign In**" — returns to login page

#### 4.1.3 Logged-in State (Account Home)

After successful login, the Account page switches to a personal information view:

- **User Avatar:** Circular placeholder avatar
- **Username:** Displays current logged-in username (e.g., `zeh`)
- **Welcome Message:** Welcome!
- **Action Button:** Logout

---

### 4.2 Main (Home Module)

- **Page Title:** Main
- **Current State:** Basic framework page; reserved as a core data dashboard
- **Design Position:** Planned to display daily training overview, rehabilitation plan progress, quick-access entries, and other aggregated information

---

### 4.3 Test / Rehab Training Module

This is the core business module of the APP, responsible for initiating rehabilitation training sessions.

#### 4.3.1 Training Home Page

- **Module Title:** Rehab Training
- **Function Description:** Connect sensors and start your rehab training
- **Function Card:**
  - **Title:** Start Training
  - **Description:** Connect BLE sensor for real-time rehab training
  - **Action Button:** **Connect Sensor** (primary blue button)

#### 4.3.2 Sensor Connection Page (Connect Sensor)

Triggered by tapping "Connect Sensor":

- **Page Title:** Connect Sensor
- **Top Navigation:** Back arrow (returns to training home)
- **Guidance Text:** Make sure your sensor is turned on and nearby.
- **Action Button:** **Scan for Sensors**
  - Tapping disables the button and displays a "Scanning..." loading animation
  - Indicates the APP is scanning for nearby available BLE sensor devices
- **Interaction Flow:** Upon successful scan, a device list is expected to be displayed for user selection and pairing

---

### 4.4 Record Module

- **Page Title:** Record
- **Current State:** Basic framework page
- **Design Position:** Used to display historical rehabilitation training records, data trend charts, physician feedback, and other retrospective content

---

## 5. Typical User Flow

The following flow is organized based on the video demonstration:

```text
1. User opens the APP → defaults to the Account page (logged-out state)
2. Taps "Create an account" → enters the registration page
3. Enters username (zeh), password, and confirm password
4. Taps "Create Account" → system creates account → prompts "Account created successfully!"
5. Automatically returns to login page → enters username and password
6. Taps "Log In" → login successful → enters Account center (displays avatar and Welcome)
7. User browses each tab: Record → Main → Test
8. On Test page, taps "Connect Sensor" → enters scanning page
9. Taps "Scan for Sensors" → begins scanning nearby BLE devices
```

<video src="https://diogopinhel.github.io/DSD2026_TeamM1/doc/Zhang/Prototype_Introduction_v0.2.mp4" controls width="100%" style="max-width: 600px; border-radius: 8px;"></video>


---

## 6. Design Specifications & Interaction Highlights

| Feature | Description |
|:---|:---|
| **Password Visibility Toggle** | All password fields support show/hide toggle to enhance user experience |
| **Loading State Feedback** | Key operations (registration, login, scanning) are equipped with button-level loading states to prevent duplicate submission |
| **Toast Notification** | Bottom lightweight toast ("Account created successfully!") provides operation result feedback |
| **Page Transitions** | Tab switching uses horizontal sliding transitions; hierarchical pages use stack-style push navigation |
| **Input Validation Hints** | Registration page uses placeholders to clearly indicate character length limits (At least 3/6 characters) |

---

## 7. Pending Features (Based on Current Prototype)

According to the video demonstration, the following modules still require further development:

- **Main Page:** Needs to add rehabilitation data overview, notification center, and quick-action entries
- **Record Page:** Needs to add historical data list, chart visualization, filtering, and export functions
- **Connect Sensor:** Needs to add device list display, pairing confirmation, and connection status indicators
- **Real-time Training Monitor:** The real-time data display interface after successful sensor connection (not shown in video)

---

*Document generated based on prototype video demonstration.*
*Date: April 29, 2026*
