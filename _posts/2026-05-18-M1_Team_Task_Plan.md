---
layout: post
title: "Team Task Plan — M1 Patient Mobile Application"
date: 2026-05-18 00:00:00
excerpt: "Task plan for Team M1 — divides the remaining work into three independent tracks, assigns responsibilities, defines Definition of Done criteria, and establishes team workflow rules for the remainder of the project."
doc_type: Planning
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

  /* Track cards */
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

  /* Definition of Done checklist */
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
  <div class="hld-header-tag">Team Planning Document · M1 — Patient Mobile Application</div>
  <h1>Team Task Plan<br><span>M1 — Patient Mobile Application</span></h1>
  <div class="hld-header-meta">
    <span class="meta-chip"><strong>Project:</strong> Limb Motion Recovery App (M1 — Patient Mobile Application)</span>
    <span class="meta-chip"><strong>Repository:</strong> diogopinhel/DSD2026_LimbMotionRecoveryApp</span>
    <span class="meta-chip"><strong>Plan date:</strong> May 16, 2026</span>
    <span class="meta-chip"><strong>Team lead:</strong> Diogo Pinhel (<code style="background:rgba(52,211,153,0.12);color:var(--green);font-size:0.72rem;border-radius:4px;padding:0.1rem 0.3rem;">dpinhel</code>)</span>
    <span class="meta-chip"><strong>Status:</strong> <span class="badge badge-green">Active</span></span>
  </div>
  <div style="margin-top:1.5rem; text-align:center;">
    <a class="download-btn" href="{{ '/doc/Pinhel/TEAM_TASK_PLAN.md' | relative_url }}" download="TEAM_TASK_PLAN.md">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download Markdown
    </a>
  </div>
</div>

---

## 1. Purpose of This Document

<p>This document divides the remaining M1 work into three independent tracks. Diogo Pinhel <strong>co-owns the heaviest track (session controller + plan wiring + real-time feedback) together with Yiding Wang</strong> because it has the highest integration risk and needs an extra pair of hands. Diogo is also the <strong>sole reviewer</strong> of Sara's and Enhe's pull requests, so he stays close to those tracks without taking individual tasks in them.</p>

<p>Each track lists:</p>
<ul>
  <li><strong>Scope</strong> — what to build.</li>
  <li><strong>Files to create / touch</strong> — exact paths in this repo.</li>
  <li><strong>Designs to follow</strong> — the HTML mockup in <code>/design/</code>.</li>
  <li><strong>Dependencies</strong> — which V2 endpoints are needed and who to contact if missing.</li>
  <li><strong>Definition of done</strong> — what "finished" looks like.</li>
</ul>

---

## 2. Current State of the App

<span class="section-label">Snapshot — what exists and what is still missing</span>

### Already implemented (do not redo)

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>Module</th><th>Feature</th><th>Files</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>MOD-M1-01</code></td>
        <td>Login / Register / Logout (<code>POST /auth/login</code>, <code>POST /auth/register</code>, token in <code>SharedPreferences</code>)</td>
        <td><code>screens/auth/*</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-01</code></td>
        <td>Bottom navigation (Home, Plans, Progress, Profile)</td>
        <td><code>MainActivity.kt</code></td>
      </tr>
      <tr>
        <td><span class="badge badge-dim">—</span></td>
        <td>Home screen (greeting, week progress, sensor banner, "Today at a glance")</td>
        <td><code>screens/home/*</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-05</code></td>
        <td>Plans list grouped by Active / Upcoming / Completed from <code>GET /schedule/{userId}</code></td>
        <td><code>screens/plans/PlansFragment.kt</code>, <code>PlansViewModel.kt</code>, <code>PlanAdapter.kt</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-05</code></td>
        <td>Plan Details UI shell (exercise list <strong>blocked</strong> by missing V2 endpoint)</td>
        <td><code>screens/plans/PlanDetailsActivity.kt</code>, <code>PlanDetailsViewModel.kt</code>, <code>ExerciseAdapter.kt</code></td>
      </tr>
      <tr>
        <td><span class="badge badge-dim">—</span></td>
        <td>Progress screen UI (Overview / Pain / ROM tabs, custom <code>LineChartView</code> + <code>DonutChartView</code>) — placeholders only</td>
        <td><code>screens/progress/*</code></td>
      </tr>
      <tr>
        <td><span class="badge badge-dim">—</span></td>
        <td>Profile screen UI (initials, user info, settings rows — all "Coming soon")</td>
        <td><code>screens/profile/*</code></td>
      </tr>
      <tr>
        <td><code>MOD-M1-02</code></td>
        <td>BLE sensor connection flow (<code>SensorActivity</code> + <code>SensorRepository</code>, 4 states: Searching / Found / Connecting / Connected, plus Error)</td>
        <td><code>sensor/SensorActivity.kt</code>, <code>sensor/SensorRepository.kt</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Still missing (this is what we divide)

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>#</th><th>Module</th><th>Feature</th><th>Blocker</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1</strong></td>
        <td><code>MOD-M1-03</code></td>
        <td>Exercise session controller — start / stop S2 session, sensor ↔ joint mapping, stream <code>FormatData</code> → <code>POST /measurements/raw</code>, end session</td>
        <td>Needs <code>GET /schedule/{scheduleId}/exercises</code> from V2 (currently missing).</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td><code>MOD-M1-04</code></td>
        <td>Real-time feedback UI during a session — live joint angle, ROM counter, rep counter, deviation alerts</td>
        <td>Depends on #1 being far enough along; can be developed against the simulator (<code>s2.session.setMode(useSimulator = true)</code>).</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td><code>MOD-M1-05</code></td>
        <td>Plan Details — wire real exercises into the existing UI</td>
        <td>Same V2 endpoint as #1.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td><code>MOD-M1-05</code></td>
        <td>Progress screen — replace placeholders with real data</td>
        <td>Needs <code>GET /progress/{userId}</code> (missing from V2).</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td><code>MOD-M1-01</code></td>
        <td>Profile sub-screens (My Recovery, Appointments, Medications, Settings, Help, Privacy) — currently all show a <code>Toast</code></td>
        <td>Some need new V2 endpoints.</td>
      </tr>
      <tr>
        <td><strong>6</strong></td>
        <td><code>MOD-M1-06</code></td>
        <td>Push notifications — FCM token register via <code>POST /push/register</code>, foreground notification handling</td>
        <td>Needs an FCM project to be created in Firebase Console.</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 3. Track Assignments

### 3.1 — Yiding Wang + Diogo Pinhel — Exercise Controller, Plans Wiring &amp; Real-Time Feedback

<div class="track-card">
  <div class="track-card-header">
    <span class="track-id track-id-cyan">Track 3.1</span>
    <span class="track-name">Yiding Wang + Diogo Pinhel</span>
    <span class="badge badge-cyan">MOD-M1-03</span>
    <span class="badge badge-cyan">MOD-M1-04</span>
    <span class="badge badge-cyan">MOD-M1-05 (data wiring)</span>
  </div>
  <div class="track-focus">
    <strong>Track focus:</strong> MOD-M1-03, MOD-M1-04 and the data-wiring part of MOD-M1-05.<br><br>
    This is the most integration-heavy track on the project — it bridges the S2 module (sensor data), the V2 backend (session storage) and the live feedback the patient sees on screen. Because the workload is high and the risk of integration bugs is high, <strong>Yiding Wang and Diogo Pinhel pair on this track</strong>. Yiding has the strongest technical background on the team and leads the work; Diogo helps on implementation alongside reviewing the other two tracks.<br><br>
    <strong>Split of responsibilities inside the pair:</strong>
    <ul style="margin-top:0.5rem;">
      <li><strong>Yiding</strong> — leads. Owns the <code>SessionController</code> design + S2/V2 plumbing, drives the rep-counter heuristic, and is the <strong>single point of contact with Sergio Moniz</strong> for V2 endpoints.</li>
      <li><strong>Diogo</strong> — helps. Picks up sub-tasks Yiding hands off (typically the <code>LiveFeedbackFragment</code> UI work and the <code>PlanDetailsActivity</code> wiring once <code>getPlanExercises</code> lands), integrates the pieces, and keeps the rest of the team unblocked.</li>
    </ul>
    The pair agrees on who picks up what at the start of each day and writes it in their daily reports (see §4.4).
  </div>
</div>

#### Scope

<ol>
  <li>
    <p><strong>Wire the exercise list into <code>PlanDetailsActivity</code></strong> (data only — UI is already built)</p>
    <ul>
      <li>Today the activity shows <code>State.EndpointMissing</code> because the V2 endpoint does not exist.</li>
      <li>When the endpoint is delivered, replace the placeholder in <code>PlanDetailsViewModel.load()</code> (see lines 40–52) with the real call.</li>
      <li>Parse the response into the existing <code>PlanDetails</code> / <code>Exercise</code> model.</li>
    </ul>
  </li>
  <li>
    <p><strong>Exercise Session Controller</strong> (the backend of the session — Sara builds the UI shell around it)</p>
    <ul>
      <li>Provide a <code>SessionController</code> class that exposes a clean API to Sara's <code>SessionPlayerActivity</code>:</li>
    </ul>
<pre>class SessionController(context: Context) {
    val samples: Flow&lt;FormatData&gt;        // hot flow, ticks at ~10 Hz
    val state: StateFlow&lt;SessionState&gt;   // IDLE / RUNNING / PAUSED / ENDED
    suspend fun start(scheduleId: Int, sensorJointMapping: Map&lt;String,String&gt;)
    fun pause(); fun resume(); suspend fun stop()
}</pre>
    <ul>
      <li>Internally, call <code>s2.session.start(...)</code>, poll <code>s2.data.read()</code>, upload each <code>FormatData</code> to V2 with <code>PayloadConverter.formatDataToPayload(...)</code> + <code>V2ApiClient.uploadMeasurement(...)</code>.</li>
      <li>On <code>stop()</code>, call <code>PATCH /sessions/{id}/end</code> and <code>PATCH /schedule/{scheduleId}</code> to mark the session done.</li>
      <li>Must work against both the real S1 module and the simulator (<code>s2.session.setMode(useSimulator = true)</code>).</li>
    </ul>
  </li>
  <li>
    <p><strong>Real-time feedback UI</strong> (MOD-M1-04) — embedded inside Sara's session screen</p>
    <ul>
      <li><strong>Live joint angle gauge</strong> — custom view (same pattern as <code>progress/DonutChartView.kt</code>) that draws the current angle as an arc, updated at ~10 Hz from the <code>samples</code> Flow.</li>
      <li><strong>ROM live tracker</strong> — current / min / max angle, with a "You reached 95° — keep going to 110°" coaching line.</li>
      <li><strong>Rep counter</strong> — heuristic based on angle peaks and troughs in <code>FormatData</code>. Visual confirmation animation when a rep is counted.</li>
      <li><strong>Deviation alerts</strong> — non-blocking warning if the patient exceeds the safe ROM ("Slow down — you went past 130°"); also "Sensor lost — check the strap" after 2 s without samples.</li>
      <li>Expose this as a single fragment that Sara hosts inside her <code>SessionPlayerActivity</code>:</li>
    </ul>
<pre>class LiveFeedbackFragment : Fragment() {
    fun bind(samples: Flow&lt;FormatData&gt;, exercise: Exercise)
    fun currentSummary(): SessionSummary
}</pre>
  </li>
</ol>

#### V2 Dependencies — Yiding is the single point of contact with Sergio Moniz

<div class="info-block">
  Yiding owns the conversation with <strong>Sergio Moniz</strong> (V2 team lead) about every endpoint M1 needs for the session/plans area. Diogo CC'd on the thread but does not message Sergio directly to avoid duplicate requests. Refer Sergio to <code>docs/V2_API_REQUIREMENTS.md</code>. Open the conversation on day 1.
</div>

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>Priority</th><th>Endpoint</th><th>Why</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="badge badge-red">High</span></td>
        <td><code>GET /schedule/{scheduleId}/exercises</code></td>
        <td>Without this, Plan Details cannot show exercises.</td>
      </tr>
      <tr>
        <td><span class="badge badge-red">High</span></td>
        <td>Confirm exact shape of <code>POST /sessions</code> response (must return <code>session_id</code>).</td>
        <td>Needed to start streaming measurements.</td>
      </tr>
      <tr>
        <td><span class="badge badge-amber">Medium</span></td>
        <td>Confirm <code>POST /measurements/raw</code> accepts the <code>FormatData</code> payload built by <code>PayloadConverter.kt</code>.</td>
        <td>Needed to upload sensor data.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="info-block green">
  While waiting on V2, develop against the <strong>simulator</strong> so the controller and feedback fragment can be finished before any endpoint lands.
</div>

#### Files to touch / create

<ul>
  <li>Touch: <code>screens/plans/PlanDetailsActivity.kt</code>, <code>screens/plans/PlanDetailsViewModel.kt</code>.</li>
  <li>Extend: <code>com/dsd/m1/api/V2ApiClient.kt</code> (add <code>getPlanExercises(planId, token)</code> — this file is in the "extendable" list).</li>
  <li>Create: <code>session/SessionController.kt</code> (controller backbone — pure logic, no Activity dependency).</li>
  <li>Create: <code>screens/session/feedback/LiveFeedbackFragment.kt</code></li>
  <li>Create: <code>screens/session/feedback/JointAngleGaugeView.kt</code> (custom view)</li>
  <li>Create: <code>screens/session/feedback/RepCounter.kt</code> (pure Kotlin, unit-testable)</li>
  <li>Layouts: <code>res/layout/fragment_live_feedback.xml</code></li>
</ul>

#### Designs

<ul>
  <li><code>design/PlansDetails.html</code> — already implemented, only needs data wiring.</li>
</ul>

<div class="info-block warn">
  <strong>⚠️ No design exists yet</strong> for the live feedback gauge, ROM tracker or deviation alerts. Send a WeChat message to Diogo specifying:
  <div class="wechat-msg">
    <span class="wechat-msg-label">WeChat message to Diogo</span>
    "I need designs for: (1) Live feedback area (gauge + ROM + rep counter) inside the session screen, (2) Deviation alert visual style."
  </div>
</div>

#### Definition of Done

<ul class="dod-list">
  <li><code>PlanDetailsActivity</code> shows the real exercise list when the V2 endpoint is delivered.</li>
  <li><code>SessionController.start(...)</code> runs a session end-to-end: S2 starts, samples flow, payloads upload, session ends, schedule item is marked done.</li>
  <li>Live gauge updates smoothly (≥ 10 Hz) against the simulator.</li>
  <li>Rep counter detects at least 3 consecutive reps in a sinusoidal signal.</li>
  <li>Deviation alert fires when angle crosses a configurable threshold.</li>
  <li>Works against both the real S1 module and the simulator.</li>
</ul>

---

### 3.2 — Sara Costa — Session Player UI Shell &amp; Surrounding Screens

<div class="track-card">
  <div class="track-card-header">
    <span class="track-id track-id-orange">Track 3.2</span>
    <span class="track-name">Sara Costa</span>
    <span class="badge badge-orange">UI Shell</span>
    <span class="badge badge-orange">Session Flow</span>
  </div>
  <div class="track-focus">
    <strong>Track focus:</strong> the UI scaffolding around Yiding's controller — everything the patient sees in the session flow <strong>except the live feedback area</strong> (that one belongs to Yiding).<br><br>
    Sara's track is essentially "make the session flow feel like an app": navigation in and out of the session, the player layout, the sensor↔joint mapping step before starting, and the summary screen at the end.
  </div>
</div>

#### Scope

<ol>
  <li>
    <p><strong>Session Player Activity (UI shell)</strong></p>
    <ul>
      <li>New activity launched when the user taps <strong>"Start Session"</strong> in <code>PlanDetailsActivity</code> (currently shows a <code>Toast</code> — see <code>PlanDetailsActivity.kt:88</code>).</li>
      <li>Layout: top bar with exercise name + progress (<code>Exercise 2 of 5</code>), a content area where Yiding's <code>LiveFeedbackFragment</code> is embedded, and bottom controls (<strong>Pause / Resume / Stop</strong>).</li>
      <li>The activity <strong>does not</strong> poll S2 or talk to V2 — it only forwards user actions to Yiding's <code>SessionController</code> and observes its <code>state</code> StateFlow.</li>
      <li>"Next exercise" and "Skip" buttons that advance through the exercise list of the plan.</li>
    </ul>
  </li>
  <li>
    <p><strong>Sensor↔Joint mapping step</strong></p>
    <ul>
      <li>Small screen or bottom-sheet shown before the session starts.</li>
      <li>Two WitMotion sensors are required to compute one joint angle. The user has to confirm which two sensors map to which joint (e.g. <code>"AA:BB" → "knee"</code>, <code>"CC:DD" → "knee"</code>).</li>
      <li>Use <code>SensorRepository</code> to read the currently connected sensors.</li>
      <li>Hands the resulting <code>Map&lt;String, String&gt;</code> to <code>SessionController.start(...)</code>.</li>
    </ul>
  </li>
  <li>
    <p><strong>End-of-session summary screen</strong></p>
    <ul>
      <li>Reached automatically when <code>SessionController.state</code> transitions to <code>ENDED</code>.</li>
      <li>Reads the totals from <code>LiveFeedbackFragment.currentSummary()</code> (Yiding exposes this): total reps, average ROM, max ROM, total time.</li>
      <li>"Save &amp; Continue" button that finishes the activity and returns to the Plan Details screen.</li>
    </ul>
  </li>
</ol>

#### Coordination

<div class="info-block">
  Sara talks to <strong>Yiding and Diogo</strong> — not to V2 / Sergio. The three must agree on the <code>SessionController</code> + <code>LiveFeedbackFragment</code> contracts on <strong>day 1</strong> (15-min WeChat call). Document the agreement in your end-of-day report.
</div>

#### Files to create

<ul>
  <li><code>screens/session/SessionPlayerActivity.kt</code>, <code>SessionPlayerViewModel.kt</code></li>
  <li><code>screens/session/SensorJointMappingFragment.kt</code> (or bottom sheet)</li>
  <li><code>screens/session/SessionSummaryActivity.kt</code></li>
  <li>Layouts: <code>res/layout/activity_session_player.xml</code>, <code>res/layout/fragment_sensor_joint_mapping.xml</code>, <code>res/layout/activity_session_summary.xml</code></li>
</ul>

#### Designs

<div class="info-block warn">
  <strong>⚠️ No design exists yet</strong> for any of these screens. Send a WeChat message to Diogo specifying:
  <div class="wechat-msg">
    <span class="wechat-msg-label">WeChat message to Diogo</span>
    "I need designs for: (1) Session Player screen layout (top bar + feedback slot + bottom controls), (2) Sensor↔Joint mapping step, (3) End-of-session summary screen."
  </div>
</div>

#### Definition of Done

<ul class="dod-list">
  <li>User can tap "Start Session" on a plan and reach the player activity.</li>
  <li>The mapping step appears before the session starts and produces a valid <code>Map&lt;String, String&gt;</code>.</li>
  <li>Pause / Resume / Stop buttons correctly call <code>SessionController</code> and reflect its state.</li>
  <li>Next / Skip advance the exercise correctly.</li>
  <li>On stop, the summary screen appears with totals from Yiding's fragment.</li>
  <li>No memory leaks or freezes when the session ends abruptly (e.g. user backs out).</li>
</ul>

---

### 3.3 — Enhe Zhang — Notifications, Profile &amp; Progress Wiring

<div class="track-card">
  <div class="track-card-header">
    <span class="track-id track-id-purple">Track 3.3</span>
    <span class="track-name">Enhe Zhang</span>
    <span class="badge badge-purple">MOD-M1-05 (Progress)</span>
    <span class="badge badge-purple">MOD-M1-06 (Push)</span>
    <span class="badge badge-purple">Profile</span>
  </div>
  <div class="track-focus">
    <strong>Track focus:</strong> MOD-M1-05 (Progress data) + MOD-M1-06 (Push Notifications) + Profile sub-screens.<br><br>
    Smaller individual features but spread across the app — good for someone who wants variety.
  </div>
</div>

#### Scope

<ol>
  <li>
    <p><strong>Push notifications (MOD-M1-06)</strong></p>
    <ul>
      <li>Add Firebase Cloud Messaging dependency in <code>app/build.gradle.kts</code>.</li>
      <li>Create a <code>FirebaseMessagingService</code> subclass that:
        <ul>
          <li>Retrieves the FCM token at login time.</li>
          <li>Calls <code>V2ApiClient.registerPushToken(userId, deviceToken, "android", token)</code> (already implemented in <code>V2ApiClient.kt:123</code>).</li>
          <li>Displays incoming notifications as system notifications.</li>
        </ul>
      </li>
      <li><strong>You will need to create an FCM project in Firebase Console</strong> — ask Diogo to add you to the project or to forward the <code>google-services.json</code>.</li>
    </ul>
  </li>
  <li>
    <p><strong>Wire the Progress screen with real data</strong></p>
    <ul>
      <li>The Progress screen UI is fully built (<code>screens/progress/ProgressFragment.kt</code>) but uses placeholders.</li>
      <li>Endpoint needed: <code>GET /progress/{userId}</code> — does <strong>not exist yet</strong> in V2. Send a message to Sergio Moniz to request it. Required fields:</li>
    </ul>
<pre>{
  "weeklyRom":    [85, 90, 92, 95, 98, 100, 105],
  "weeklyPain":   [6, 5, 5, 4, 4, 3, 3],
  "adherencePct": 78,
  "streakDays":   12
}</pre>
    <ul>
      <li>Until then, work with mock data inside <code>ProgressViewModel</code>.</li>
    </ul>
  </li>
  <li>
    <p><strong>Profile sub-screens — replace "Coming soon" <code>Toast</code>s with real screens</strong></p>
    <ul>
      <li>Current placeholders are in <code>screens/profile/ProfileFragment.kt:39-56</code>.</li>
      <li>Priority order:
        <ol>
          <li><strong>Settings</strong> — language, units (degrees vs radians), notification preferences, dark mode toggle.</li>
          <li><strong>Help</strong> — static FAQ + "Contact support" mail intent.</li>
          <li><strong>Privacy</strong> — static text + link to the privacy policy.</li>
          <li><strong>My Recovery</strong> — recovery history (depends on a new V2 endpoint, request from Sergio).</li>
          <li><strong>Appointments</strong> — depends on <code>/appointments/{userId}</code> (not in V2 yet).</li>
          <li><strong>Medications</strong> — depends on <code>/medications/{userId}</code> (not in V2 yet).</li>
        </ol>
      </li>
    </ul>
    <p>Build the first three (no backend dependency), then unblock the rest as endpoints arrive.</p>
  </li>
</ol>

#### V2 Dependencies — message Sergio Moniz

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>Priority</th><th>Endpoint</th><th>For</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="badge badge-amber">Medium</span></td>
        <td><code>GET /progress/{userId}</code></td>
        <td>Progress screen</td>
      </tr>
      <tr>
        <td><span class="badge badge-green">Low</span></td>
        <td><code>GET /appointments/{userId}</code></td>
        <td>Profile → Appointments</td>
      </tr>
      <tr>
        <td><span class="badge badge-green">Low</span></td>
        <td><code>GET /medications/{userId}</code></td>
        <td>Profile → Medications</td>
      </tr>
    </tbody>
  </table>
</div>

#### Files to create / touch

<ul>
  <li>Touch: <code>app/build.gradle.kts</code> (add <code>com.google.firebase:firebase-messaging</code>).</li>
  <li>Touch: <code>screens/profile/ProfileFragment.kt</code>, <code>screens/progress/ProgressFragment.kt</code>, <code>screens/progress/ProgressViewModel.kt</code>.</li>
  <li>Touch: <code>screens/auth/LoginViewModel.kt</code> (register FCM token after successful login).</li>
  <li>Create: <code>notifications/FcmService.kt</code>.</li>
  <li>Create: <code>screens/profile/settings/SettingsActivity.kt</code> (+ layout).</li>
  <li>Create: <code>screens/profile/help/HelpActivity.kt</code> (+ layout).</li>
  <li>Create: <code>screens/profile/privacy/PrivacyActivity.kt</code> (+ layout).</li>
</ul>

#### Designs

<ul>
  <li><code>design/PerfilScreen.html</code> — already implemented for the main Profile page.</li>
</ul>

<div class="info-block warn">
  <strong>⚠️ No design exists</strong> for Settings / Help / Privacy / Appointments / Medications. Send a WeChat message to Diogo specifying which one you need next.
</div>

#### Definition of Done

<ul class="dod-list">
  <li>FCM token is registered with V2 right after login (verify in Logcat).</li>
  <li>A test notification sent from Firebase Console reaches the device.</li>
  <li>At least Settings / Help / Privacy screens replace their <code>Toast</code> placeholders.</li>
  <li>Progress screen renders mock data with no crashes, and switches to live data when the endpoint exists.</li>
</ul>

---

## 4. Team Workflow Rules

<div class="info-block red">
  These rules apply to <strong>every</strong> teammate. They are non-negotiable so the repo stays clean and reviewable.
</div>

### 4.1 — Branches

<p>Each member works on their own branch named after themselves, all lowercase, no spaces:</p>

<ul>
  <li>Enhe Zhang → <code>ezhang</code></li>
  <li>Yiding Wang → <code>ywang</code></li>
  <li>Sara Costa → <code>scosta</code></li>
</ul>

<p>Never commit to <code>master</code> or to anyone else's branch. Pull from <code>master</code> daily before starting work:</p>

<pre>git checkout master
git pull
git checkout &lt;your-branch&gt;
git rebase master</pre>

### 4.2 — Designs

<p>The design source of truth is the folder <code>/design/</code> at the repo root. It contains the HTML mockups for every implemented screen.</p>

<ul>
  <li><strong>Match the design exactly</strong> — colours, spacing, font sizes, icons. Use the existing <code>colors.xml</code> / <code>themes.xml</code> rather than hard-coding hex values.</li>
  <li><strong>If a design is missing</strong>, do not invent one — send a WeChat message to Diogo specifying:</li>
</ul>

<div class="wechat-msg">
  <span class="wechat-msg-label">WeChat message to Diogo</span>
  "I need the design for: [screen name] — for the [feature] track. Blocking me from continuing."
</div>

### 4.3 — Commits

<p>Commit messages must be <strong>in English</strong> and <strong>explanatory</strong> — the title should describe <em>what</em> changed, the body (optional) should explain <em>why</em>. Use Conventional Commits style (the repo already uses this — see <code>git log</code>):</p>

<pre>feat(session): add live joint angle gauge with rep counter
fix(plans): correct status badge color when plan is upcoming
refactor(profile): extract Settings row into reusable view
docs(team): update task plan with v2 dependencies</pre>

<p>One concern per commit. Avoid "fix stuff" or "update".</p>

### 4.4 — End-of-Day Report

<p>Every working day, before logging off, each teammate creates a Markdown file in <code>/docs/daily/&lt;your-name&gt;/</code> named <code>YYYY-MM-DD.md</code>. The template is:</p>

<pre># Daily Report — &lt;Your Name&gt;

**Date:** YYYY-MM-DD
**Branch:** &lt;your-branch&gt;
**Track:** &lt;Session controller / Real-time feedback / Notifications &amp; Profile&gt;

## Done today
- ...

## Blockers
- (e.g. waiting on V2 endpoint X; waiting on design Y)

## Planned for tomorrow
- ...

## Questions for Diogo
- ...</pre>

<p>Commit this file at the end of the day in the same push. This is how Diogo reviews progress and unblocks people without needing a daily standup.</p>

### 4.5 — Weekly Evaluation (Professor ZHANG)

<p>Every week, <strong>each teammate</strong> must complete the weekly evaluation required by Professor ZHANG using <strong>his official base template</strong>. This is a mandatory academic requirement.</p>

<ul>
  <li><strong>Frequency:</strong> once per week, at the end of each working week (before Sunday midnight).</li>
  <li><strong>Template:</strong> use the base template provided by Professor ZHANG — do not create your own format.</li>
  <li><strong>Where to submit:</strong> as instructed by Professor ZHANG (platform / WeChat / email — follow his instructions directly).</li>
  <li><strong>Content expected</strong> (to fill in the template):
    <ul>
      <li>Tasks completed this week (reference branch, PR, or commit where applicable).</li>
      <li>Blockers encountered and how they were resolved.</li>
      <li>Tasks planned for the following week.</li>
      <li>Any questions or impediments requiring professor attention.</li>
    </ul>
  </li>
  <li><strong>Diogo is not the reviewer for this</strong> — submit directly to Professor ZHANG.</li>
  <li>Missing a weekly evaluation without prior notice is not acceptable.</li>
</ul>

### 4.6 — Pull Requests

<p>When a feature is done (matching the Definition of Done), open a Pull Request from your branch → <code>master</code>. PR title in English, same Conventional Commits style as commit titles.</p>

<p>PR description must include:</p>
<ul>
  <li><strong>Summary</strong> — 1–3 bullets of what changed.</li>
  <li><strong>How to test</strong> — exact steps on a device or emulator.</li>
  <li><strong>Screenshots</strong> — at least one for any UI change.</li>
</ul>

<div class="info-block">
  Diogo is the reviewer for Sara's and Enhe's PRs.<br>
  For the session track (Yiding + Diogo paired), the <strong>author who did not write the code reviews</strong> — i.e. Yiding reviews Diogo's PRs and vice-versa. Never merge your own PR.
</div>

### 4.7 — Communication

<ul>
  <li>Day-to-day chat: <strong>WeChat group</strong>.</li>
  <li>For V2 endpoint questions: contact <strong>Sergio Moniz</strong> (V2 team lead) directly on WeChat — CC Diogo so he knows it's in progress.</li>
  <li>For design requests: contact <strong>Diogo</strong> on WeChat with the exact screen / feature name.</li>
</ul>

---

## 5. Cross-Track Dependencies

<span class="section-label">Read before starting</span>

<pre>Yiding + Diogo (SessionController + V2 upload)
    │
    └──> exposes Flow&lt;FormatData&gt; + StateFlow&lt;SessionState&gt;
                  │
                  └──> Yiding + Diogo (LiveFeedbackFragment) consume the Flow
                  │
                  └──> Sara (SessionPlayerActivity) hosts the fragment and
                       drives Pause / Resume / Stop on the controller

Enhe (FCM)
    │
    └──> registers token in LoginViewModel after login   (no impact on the session track)

Enhe (Profile sub-screens + Progress wiring)
    │
    └──> independent of the session track</pre>

<div class="info-block green">
  <strong>Action for day 1:</strong> a 15-min WeChat call with Yiding + Diogo + Sara to lock the <code>SessionController</code> and <code>LiveFeedbackFragment</code> contracts. Enhe does not need to join.
</div>

---

## 6. Files You Must NOT Modify

<p>These are owned by other teams and copied as-is. Touching them will break cross-team compatibility. <br>
If you need to change this, speak with me (Diogo Pinhel) or Yiding Wang First!</p>

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>Path</th><th>Owner</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>app/src/main/java/com/dsd/s1/**</code></td>
        <td>S1 team (BLE driver, Java)</td>
      </tr>
      <tr>
        <td><code>app/src/main/java/com/dsd/s2/**</code></td>
        <td>S2 team (processing, Kotlin) — but <code>S2Module.kt</code> is the public facade you call from M1</td>
      </tr>
      <tr>
        <td><code>app/src/main/java/com/dsd/s2/core/S1Interfaces.kt</code></td>
        <td>Interface contract — frozen</td>
      </tr>
      <tr>
        <td><code>app/src/main/java/com/dsd/s2/S2Module.kt</code> interface methods</td>
        <td>Interface contract — frozen</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="info-block green">
  You <strong>can</strong> extend <code>app/src/main/java/com/dsd/m1/api/V2ApiClient.kt</code> — add new methods, do not remove or rename existing ones.
</div>

---

## 7. Reference Documents

<div class="m1-table-wrap">
  <table class="m1-table">
    <thead>
      <tr><th>#</th><th>Document</th><th>Source</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>CLAUDE.md — full architecture, build instructions, V2 endpoint summary</td>
        <td><code>CLAUDE.md</code></td>
      </tr>
      <tr>
        <td>2</td>
        <td>M1 Status — what is already implemented, with test cases for the BLE flow</td>
        <td><code>docs/M1_STATUS.md</code></td>
      </tr>
      <tr>
        <td>3</td>
        <td>V2 API Requirements — the formal endpoint request list to send to V2</td>
        <td><code>docs/V2_API_REQUIREMENTS.md</code></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Design source of truth for each screen</td>
        <td><code>design/*.html</code></td>
      </tr>
    </tbody>
  </table>
</div>

---

<div style="text-align:center; padding:2rem 0 1rem; color:#475569; font-size:0.72rem; letter-spacing:0.06em;">
  <span style="color:#34d399; font-weight:700;">M1 — Patient Mobile Application</span> &nbsp;·&nbsp;
  Team Task Plan &nbsp;·&nbsp;
  DSD 2025–2026 · UTAD × Jilin University &nbsp;·&nbsp;
  Plan date: May 16, 2026 &nbsp;·&nbsp; Owner: <span style="color:#38bdf8;">Diogo Pinhel</span>
</div>
