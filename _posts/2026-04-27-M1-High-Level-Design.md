---
layout: post
title: "High-Level Design — M1 Patient Mobile Application"
date: 2026-04-27 10:00:00
excerpt: "High-Level Design document for Team M1. Defines the Data Flow Diagram and internal module overview aligned with the S2 DFD reference and all cross-team interfaces."
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
  .section-divider { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }

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
  .badge-monitor { color: var(--green); border-color: rgba(52,211,153,0.5); background: rgba(52,211,153,0.14); box-shadow: 0 0 10px rgba(52,211,153,0.18); }
  .priority-high   { color: var(--green);  border-color: rgba(52,211,153,0.4);  background: rgba(52,211,153,0.1); }
  .priority-medium { color: var(--amber);  border-color: rgba(251,191,36,0.4);  background: rgba(251,191,36,0.1); }

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

  .module-card {
    background: var(--card); border: 1px solid var(--border); border-radius: 14px;
    overflow: hidden; margin: 1rem 0;
  }
  .module-card-header {
    background: var(--card2); border-bottom: 1px solid var(--border);
    padding: 0.85rem 1.5rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  }
  .module-id {
    font-family: var(--mono); font-size: 0.8rem; font-weight: 700; color: var(--green);
    background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.25);
    padding: 0.2rem 0.65rem; border-radius: 6px; white-space: nowrap;
  }
  .module-name { font-size: 0.95rem; font-weight: 700; color: var(--text); flex: 1; }
  .module-desc { padding: 0.85rem 1.5rem; font-size: 0.85rem; color: var(--text-dim); line-height: 1.65; }
  .module-desc code {
    font-family: var(--mono); font-size: 0.76rem; color: var(--cyan);
    background: rgba(56,189,248,0.08); padding: 0.1rem 0.35rem; border-radius: 4px;
  }

  .info-block {
    border-left: 3px solid var(--cyan); background: var(--card);
    border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; margin: 1rem 0;
    font-size: 0.85rem; color: var(--text-dim); line-height: 1.6;
  }
  .info-block.green { border-left-color: var(--green); }
  .info-block.warn  { border-left-color: var(--amber); }
  .info-block strong { color: var(--text); }

  .dfd-container {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; padding: 1.5rem; margin: 1.5rem 0;
    text-align: center;
  }
  .dfd-container img {
    max-width: 100%; border-radius: 8px;
  }
  .dfd-placeholder {
    background: rgba(52,211,153,0.04); border: 2px dashed rgba(52,211,153,0.3);
    border-radius: 12px; padding: 3rem 2rem; color: var(--text-dim);
    font-size: 0.9rem; text-align: center;
  }
  .dfd-placeholder strong { color: var(--green); display: block; margin-bottom: 0.5rem; font-size: 1rem; }

  pre {
    background: var(--bg2) !important; border: 1px solid var(--border) !important;
    border-radius: 10px !important; padding: 1.2rem !important;
    font-family: var(--mono) !important; font-size: 0.8rem !important;
    line-height: 1.65 !important; overflow-x: auto; color: var(--text);
  }
  code {
    font-family: var(--mono); font-size: 0.8rem;
    background: rgba(56,189,248,0.08); color: var(--cyan);
    padding: 0.1rem 0.35rem; border-radius: 4px;
  }
  h2 { font-size: 1.3rem; font-weight: 700; color: var(--cyan); margin-top: 2.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }
  h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); margin-top: 2rem; }
  h4 { font-size: 0.95rem; font-weight: 700; color: var(--text-dim); margin-top: 1.5rem; }
  p  { color: var(--text-dim); line-height: 1.7; }
  p strong { color: var(--text); }
  ul { color: var(--text-dim); padding-left: 1.5rem; }
  li { margin: 0.3rem 0; }
  li::marker { color: var(--green); }
</style>

<!-- DOCUMENT HEADER -->
<div class="hld-header">
  <div class="hld-header-tag">System Design Document · High-Level Design · Part I of II</div>
  <h1>High-Level Design<br><span>M1 — Patient Mobile Application</span></h1>
  <div class="hld-header-meta">
    <span class="meta-chip"><strong>Project:</strong> Limb Motion Recognition and Assistant</span>
    <span class="meta-chip"><strong>Team:</strong> M1 — Patient Mobile App</span>
    <span class="meta-chip"><strong>Layer:</strong> Monitor</span>
    <span class="meta-chip"><strong>Version:</strong> v1.1</span>
    <span class="meta-chip"><strong>Date:</strong> April 27, 2026</span>
    <span class="meta-chip"><strong>Status:</strong> <span class="badge badge-green">Published for Review</span></span>
  </div>
</div>

---

## 0. Revision History

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>Version</th><th>Date</th><th>Author</th><th>Description</th><th>Status</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>v1.0</strong></td>
        <td>Apr 26, 2026</td>
        <td><strong>Diogo Pinhel</strong></td>
        <td>Initial High-Level Design — module partitioning, DFD, interface specification</td>
        <td><span class="badge badge-amber">Draft</span></td>
      </tr>
      <tr>
        <td><strong>v1.1</strong></td>
        <td>Apr 27, 2026</td>
        <td><strong>Diogo Pinhel</strong></td>
        <td>Document restructured to prioritise the DFD; module detail reduced to overview (detail in SRS); DFD corrected (S1→S2 flow added, S1→M1 direct link removed, App boundary corrected, Level 1 boundary set to dashed); Open Items updated</td>
        <td><span class="badge badge-green">Published for Review</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 1. Overview

### 1.1 Design Objectives

This High-Level Design partitions the M1 Patient Mobile Application into **six internal modules** that collectively cover all internal use cases defined in the M1 SRS. The partitioning follows three principles:

- **Functional cohesion** — each module owns one clearly defined responsibility.
- **Interface clarity** — every data exchange between modules and external teams is named and typed.
- **Use case traceability** — every internal use case (`IUC-M1-xx`) maps to exactly one owning module.

### 1.2 Position in the System

M1 sits at the end of the data pipeline and is the only team that interacts with the **Patient** as a human actor. M1 never communicates directly with V1 or M2 — all server data flows through **V2**.

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>External Team</th><th>Relationship</th><th>Interface ID</th><th>Direction</th></tr></thead>
    <tbody>
      <tr><td><span class="badge badge-orange">S1</span> Sensor Firmware</td><td>Physical IMU sensor worn by patient — BLE data acquisition</td><td><code>IF-S1-M1</code></td><td>S1 → M1 via BLE</td></tr>
      <tr><td><span class="badge badge-orange">S2</span> Data Acquisition</td><td>Provides formatted sensor data; receives session lifecycle control</td><td><code>IF-M1-S2</code> / <code>IF-S2-M1</code></td><td>Bidirectional</td></tr>
      <tr><td><span class="badge badge-blue">V2</span> Backend API</td><td>Central server — processed AI results, session data, plans, recommendations</td><td><code>IF-V2-M1</code> / <code>IF-M1-V2</code></td><td>Bidirectional (REST)</td></tr>
      <tr><td><span class="badge badge-purple">Push Service</span></td><td>External notification delivery (HarmonyOS Push / FCM)</td><td><code>IF-Push-M1</code> / <code>IF-M1-Push</code></td><td>Bidirectional</td></tr>
      <tr><td><span class="badge badge-dim">V1</span></td><td>No direct interface — AI results reach M1 through V2</td><td>—</td><td>Indirect</td></tr>
      <tr><td><span class="badge badge-dim">M2</span></td><td>No direct interface — plans created by M2 are consumed via V2</td><td>—</td><td>Indirect</td></tr>
    </tbody>
  </table>
</div>

---

## 2. Data Flow Diagram

<span class="section-label">Level 0 — System Data Flow · Level 1 — M1 Internal Data Flow</span>

<div class="info-block green">
  <strong>Reading guide:</strong> The DFD is presented in two levels. <strong>Level 0</strong> shows all six teams and external actors in the full system pipeline. <strong>Level 1</strong> zooms into M1's internal modules, showing how data moves between MOD-M1-01 through MOD-M1-06. Solid arrows indicate requests and uploads; dashed arrows indicate responses, push delivery, and internal broadcasts. This diagram is aligned with the <strong>S2 DFD reference</strong> (Apr 2026).
</div>

<div class="dfd-container">
  <img src="{{ '/img/diagrams/External_DFD.svg' | relative_url }}" alt="M1 Data Flow Diagram — Level 0 and Level 1" style="width:100%; border-radius:8px;" />
  <div style="margin-top:0.75rem; font-size:0.72rem; color:var(--text-xs); letter-spacing:0.04em;">
    Figure 1 — M1 AppFrontend · Level 0 System DFD · April 2026
  </div>
</div>

<div class="dfd-container">
  <img src="{{ '/img/diagrams/m1_DFD.svg' | relative_url }}" alt="M1 Data Flow Diagram — Level 0 and Level 1" style="width:100%; border-radius:8px;" />
  <div style="margin-top:0.75rem; font-size:0.72rem; color:var(--text-xs); letter-spacing:0.04em;">
    Figure 2 — M1 AppFrontend · Level 1 Internal DFD · April 2026
  </div>
</div>

### 2.1 Module Legend

After reviewing the DFD, the table below explains what each internal node represents. For full use case descriptions, preconditions, alternative flows, and non-functional requirements for each module, refer to the published SRS:

<div class="info-block green">
  <strong>📄 Full requirements detail:</strong> <a href="https://diogopinhel.github.io/DSD2026_TeamM1/2026/04/21/Software.html" target="_blank" style="color: var(--cyan);">Software Requirements Specification — M1 v1.2 (Final)</a> — covers all IUC-M1-01 through IUC-M1-09 with complete use case flows, actors, and constraints.
</div>

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>Node</th><th>Module Name</th><th>Responsibility (brief)</th><th>IUCs</th></tr></thead>
    <tbody>
      <tr>
        <td><code>MOD-M1-01</code></td>
        <td><strong>Auth &amp; Session Manager</strong></td>
        <td>Patient registration, login, token lifecycle, secure credential storage</td>
        <td><code>IUC-01</code> <code>IUC-02</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-02</code></td>
        <td><strong>BLE Sensor Manager</strong></td>
        <td>BLE scanning, pairing, connection health, IMU data reception from S1</td>
        <td><code>IUC-03</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-03</code></td>
        <td><strong>Session Controller</strong></td>
        <td>Session lifecycle (start / pause / end), S2 session control, V2 session API, measurement upload</td>
        <td><code>IUC-04</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-04</code></td>
        <td><strong>RT Feedback Renderer</strong></td>
        <td>Real-time 3D joint visualisation, deviation score display, alert banners, haptic feedback</td>
        <td><code>IUC-05</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-05</code></td>
        <td><strong>Data Sync &amp; Cache Manager</strong></td>
        <td>Session history, rehabilitation plans, achievements — sync with V2 and local offline cache</td>
        <td><code>IUC-06</code> <code>IUC-07</code> <code>IUC-09</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-06</code></td>
        <td><strong>Notification Manager</strong></td>
        <td>Push token registration, incoming notification routing, foreground / background display</td>
        <td><code>IUC-08</code></td>
      </tr>
    </tbody>
  </table>
</div>

### 2.2 Internal Data Flows (INT)

The arrows between modules inside the Level 1 DFD correspond to the following internal interfaces:

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>ID</th><th>From</th><th>To</th><th>Data</th><th>Trigger</th></tr></thead>
    <tbody>
      <tr><td><code>INT-01</code></td><td>MOD-M1-01</td><td>All modules</td><td>AuthState</td><td>Login / Logout</td></tr>
      <tr><td><code>INT-02</code></td><td>MOD-M1-02</td><td>MOD-M1-03</td><td>SensorConnectionEvent</td><td>BLE connection state change</td></tr>
      <tr><td><code>INT-03</code></td><td>MOD-M1-03</td><td>MOD-M1-04</td><td>SessionContext</td><td>Session successfully started</td></tr>
      <tr><td><code>INT-04</code></td><td>MOD-M1-02</td><td>MOD-M1-04</td><td>SensorSample[]</td><td>Continuous during active session</td></tr>
      <tr><td><code>INT-05</code></td><td>MOD-M1-04</td><td>MOD-M1-03</td><td>MeasurementBatch</td><td>Every ~1s during session</td></tr>
      <tr><td><code>INT-06</code></td><td>MOD-M1-05</td><td>MOD-M1-03</td><td>Plan exercises + target_angles</td><td>On plan load / cache refresh</td></tr>
    </tbody>
  </table>
</div>

---

## 3. External Interface Alignment with S2 DFD

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>S2 DFD Flow</th><th>M1 Interface</th><th>M1 Module</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>M1 → S2: <em>Start/Close session request</em></td>
        <td><code>IF-M1-S2</code></td>
        <td>MOD-M1-03</td>
        <td><span class="badge badge-green">Aligned</span></td>
      </tr>
      <tr>
        <td>S2 → M1: <em>Format data</em></td>
        <td><code>IF-S2-M1</code></td>
        <td>MOD-M1-04</td>
        <td><span class="badge badge-green">Aligned</span></td>
      </tr>
      <tr>
        <td>S2 → V2: <em>Format data</em> (parallel)</td>
        <td>Not M1's responsibility</td>
        <td>—</td>
        <td><span class="badge badge-amber">⚠ Conflict — see OI-02</span></td>
      </tr>
      <tr>
        <td>Patient: <em>Body movement</em> via S1</td>
        <td><code>IF-S1-M1</code> via BLE</td>
        <td>MOD-M1-02</td>
        <td><span class="badge badge-green">Aligned</span></td>
      </tr>
      <tr>
        <td>V2 → M1: <em>Doctor Feedback / Recommendations</em></td>
        <td><code>IF-V2-M1</code></td>
        <td>MOD-M1-05</td>
        <td><span class="badge badge-green">Aligned</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 4. Module-to-Use-Case Traceability

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>IUC</th><th>Title</th><th>Module</th><th>External Interfaces</th></tr></thead>
    <tbody>
      <tr><td><code>IUC-M1-01</code></td><td>Register Patient</td><td>MOD-M1-01</td><td><code>IF-M1-V2</code> (POST /users)</td></tr>
      <tr><td><code>IUC-M1-02</code></td><td>Log In Patient</td><td>MOD-M1-01</td><td><code>IF-M1-V2</code> (POST /auth/login [TBD]), <code>IF-V2-M1</code> (JWT)</td></tr>
      <tr><td><code>IUC-M1-03</code></td><td>Connect Sensor</td><td>MOD-M1-02</td><td><code>IF-S1-M1</code> (BLE)</td></tr>
      <tr><td><code>IUC-M1-04</code></td><td>Establish Rehabilitation Session</td><td>MOD-M1-03</td><td><code>IF-M1-S2</code>, <code>IF-M1-V2</code> (POST /sessions, PATCH /sessions/:id/end, POST /measurements/batch)</td></tr>
      <tr><td><code>IUC-M1-05</code></td><td>Stream Real-Time Session Data</td><td>MOD-M1-04</td><td><code>IF-S2-M1</code> (Format data), <code>IF-V2-M1</code> (Analysis results)</td></tr>
      <tr><td><code>IUC-M1-06</code></td><td>Retrieve Historical Rehabilitation Data</td><td>MOD-M1-05</td><td><code>IF-V2-M1</code> (GET /sessions)</td></tr>
      <tr><td><code>IUC-M1-07</code></td><td>Retrieve Rehabilitation Plan</td><td>MOD-M1-05</td><td><code>IF-V2-M1</code> (GET /plans/active [TBD])</td></tr>
      <tr><td><code>IUC-M1-08</code></td><td>Retrieve Notification Messages</td><td>MOD-M1-06</td><td><code>IF-M1-Push</code>, <code>IF-Push-M1</code>, <code>IF-M1-V2</code> (POST /notifications/register)</td></tr>
      <tr><td><code>IUC-M1-09</code></td><td>Retrieve Achievement Data</td><td>MOD-M1-05</td><td><code>IF-V2-M1</code> (GET /recommendations/engine/:userId)</td></tr>
    </tbody>
  </table>
</div>

---

## 5. Open Items

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>ID</th><th>Item</th><th>Status</th><th>Owner</th></tr></thead>
    <tbody>
      <tr>
        <td><code>OI-01</code></td>
        <td><strong>Real-time delivery from V2 to M1</strong> — V2 is REST-only. WebSocket proposed but unconfirmed. M1 implements HTTP polling fallback until WebSocket is confirmed.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + V2</td>
      </tr>
      <tr>
        <td><code>OI-02</code></td>
        <td><strong>Measurement upload path</strong> — S2 DFD shows S2 uploading Format data to V2. V2 Integration Guide shows M1 calling <code>POST /measurements/batch</code>. M1 assumes it is responsible for upload until resolved.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + S2 + V2</td>
      </tr>
      <tr>
        <td><code>OI-03</code></td>
        <td><strong>Joint naming convention</strong> — Must align with V1 model output. Example: <code>"knee"</code> vs <code>"left_knee_flexion"</code>. Unresolved.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + V1 + V2</td>
      </tr>
      <tr>
        <td><code>OI-04</code></td>
        <td><strong>Authentication endpoint</strong> — V2 has no auth endpoint defined. M1 requires JWT before going live. <code>POST /auth/login</code> is marked <code>[TBD]</code> pending V2 confirmation.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + V2</td>
      </tr>
      <tr>
        <td><code>OI-05</code></td>
        <td><strong>3D rendering library</strong> — Must be HarmonyOS-compatible (ArkTS). React-three-fiber and three.js are not applicable. Candidates: ArkUI XComponent + OpenGL ES. Decision pending Sprint 2.</td>
        <td><span class="badge badge-cyan">Internal M1</span></td>
        <td>MOD-M1-04</td>
      </tr>
      <tr>
        <td><code>OI-06</code></td>
        <td><strong>Push notification provider</strong> — V2 configures the push service. M1 integrates the HarmonyOS Push SDK accordingly.</td>
        <td><span class="badge badge-blue">V2 Decision</span></td>
        <td>V2 → M1</td>
      </tr>
      <tr>
        <td><code>OI-07</code></td>
        <td><strong>Rehabilitation plan endpoint</strong> — <code>GET /plans/active</code> is not defined in the current V2 Interface Specification. Marked TBD pending V2 confirmation.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + V2</td>
      </tr>
      <tr>
        <td><code>OI-08</code></td>
        <td><strong>Alerting confidence threshold</strong> — Threshold for suppressing low-confidence alerts is TBD, pending calibration with V1 after first real data tests.</td>
        <td><span class="badge badge-amber">Open</span></td>
        <td>M1 + V1</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 6. References

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead><tr><th>#</th><th>Document</th><th>Source</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>M1 SRS — Final v1.2</td><td><code>2026-04-21-Software.md</code></td></tr>
      <tr><td>2</td><td>M1 Interface Specification v1.0</td><td><code>2026-04-26-M1_Interface_Specification.md</code></td></tr>
      <tr><td>3</td><td>S2 Interface Specification</td><td>https://rsdbkhusky.github.io/DSD2026_TeamS2/news/s2-interface-spec.html</td></tr>
      <tr><td>4</td><td>S2 System Design Revision — DFD v0.2</td><td>https://rsdbkhusky.github.io/DSD2026_TeamS2/news/system-design-revision.html</td></tr>
      <tr><td>5</td><td>V2 Backend Integration Guide</td><td><code>V2_Backend_Integration_Guide_EN.pdf</code></td></tr>
      <tr><td>6</td><td>V1 Requirement Analysis</td><td>https://abenjas69.github.io/DSD2026_TeamV1/assets/docs/requirement-analysis.html</td></tr>
    </tbody>
  </table>
</div>

---

<div style="text-align:center; padding:2rem 0 1rem; color:#475569; font-size:0.72rem; letter-spacing:0.06em;">
  <span style="color:#34d399; font-weight:700;">M1 — Patient Mobile Application</span> &nbsp;·&nbsp;
  High-Level Design · Part I of II &nbsp;·&nbsp;
  DSD 2025–2026 · UTAD × Jilin University &nbsp;·&nbsp;
  v1.1 · Published for Review &nbsp;·&nbsp; Owner: <span style="color:#38bdf8;">Diogo Pinhel</span>
</div>