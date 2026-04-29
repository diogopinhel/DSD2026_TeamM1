---
layout: post
title: "M1 Weekly Report W1"
date: 2026-04-29 8:00:00
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
    --danger: #ef4444;
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

  .status-delayed {
    background-color: rgba(239, 68, 68, 0.15);
    color: var(--danger);
  }

  .meta-box {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
  }

  .meta-box p {
    margin: 0.3rem 0;
  }
</style>


<div class="meta-box">

Week: 1 (April 21 – April 27, 2026)

Report Owner: Wang Yiding

Team: M1 (APP Frontend)

Project: Rehabilitation Exercise Monitoring System

</div>

---

## 1. Task List (Attachment)

[Download Link]()

---

## 2. Task Assignment & Completion Status

| ID | Task Name | Description | Owner | Status | Link |
|:---:|:---|:---|:---|:---|:---|
| 1 | Improve M1 Internal SRS | Refine internal use cases to cover all external use-case technical paths; clarify data exchange with external systems. | Wang Yiding | <span class="status-badge status-done">Completed</span> | Not submitted |
| 2 | Integrate Six-Group SRS | Standardize and merge SRS documents from all six groups. | Wang Yiding | <span class="status-badge status-partial">Partially Completed</span> | [M1 SRS v1.3](https://diogopinhel.github.io/DSD2026_TeamM1/2026/04/27/M1_SRS_v1.3.html) · [S1 Update](https://dsd-s1-test.github.io/DSD-S1.github.io/#/news/2026-04-27-updsrs) · [S2 Update](https://rsdbkhusky.github.io/DSD2026_TeamS2/news/srs-update.html) |
| 3 | M1 High-Level Design | Complete the high-level system design for the M1 group. | Diogo Pinhel | <span class="status-badge status-done">Preliminarily Completed</span> | [M1-High-Level-Design](https://diogopinhel.github.io/DSD2026_TeamM1/2026/04/27/M1-High-Level-Design.html) |
| 4 | Interface Specification | Consolidate existing documents to define M1 inter-group interface specifications. | Enhe Zhang | <span class="status-badge status-done">Preliminarily Completed</span> | [M1 Interface Spec](https://diogopinhel.github.io/DSD2026_TeamM1/2026/04/26/M1_Interface_Specification.html) |
| 5 | Partial Prototype Development | Develop prototype pages satisfying first-round iteration UI requirements. | Enhe Zhang | <span class="status-badge status-done">Completed</span> | [Prototype Intro](https://tnxmy.github.io/DSD2026_TeamM1/2026/04/29/M1_APP_Prototype_Introduction.html) |
| 6 | Prepare Mid-Term Presentation | Create PPT and speak at the meeting. | — | <span class="status-badge status-delayed">Deferred to Next Week</span> | N/A |

---

## 3. Completed Task Briefings

### 3.1 Task 1 — Improve M1 Internal SRS

**Owner:** Wang Yiding

The internal section of the M1 SRS has been thoroughly revised. All internal use cases now cover the technical implementation paths of their corresponding external use cases, and data exchange with external systems (S1, S2, V1, V2, etc.) has been explicitly defined. The actor list was updated to include every group that exchanges data with M1. However, the updated document link has not yet been submitted to the report owner for archiving.

### 3.2 Task 3 — M1 High-Level Design

**Owner:** Diogo Pinhel

The high-level system design for the M1 group has been preliminarily completed. The document includes system block decomposition, module-to-use-case mapping, and data interface definitions between internal modules. The design conforms to the M1 portion of the S2 DFD. The document has been published to the team website and is available for review.

### 3.3 Task 4 — Interface Specification

**Owner:** Enhe Zhang

Based on existing collaboration documents, the interface specification consolidating M1\'s data interfaces with other groups has been preliminarily finalized. Each interface clearly defines data flow direction and payload content. The specification document is now online and will serve as the baseline for subsequent detailed design and implementation.

### 3.4 Task 5 — Partial Prototype Development

**Owner:** Enhe Zhang

The first round of iterative prototypes has been partially completed. Implemented modules include:

- **Account Module:** login page, registration page (with validation and secure input), and account home page (avatar, welcome message, logout).
- **Test / Rehab Training Module:** training home page and BLE sensor connection page (with scanning interaction).

The prototype is rendered in English and satisfies the UI requirements for the first iteration. A detailed introduction document with embedded video demonstration has been published.

---

## 4. Incomplete Task Reasons

### 4.1 Task 2 — Integrate Six-Group SRS

**Owner:** Wang Yiding

**Reason:** This task involves standardizing and merging SRS documents from six independent groups, which entails high coordination overhead and dependency on external deliverables. As of the reporting deadline, the M1, S1 and S2 groups have completed their SRS standardization, while other groups are still revising their documents. Full integration is therefore blocked until all groups provide stable versions. The owner will continue tracking each group\'s progress and finalize the integrated document once all inputs are received

### 4.2 Task 6 — Prepare Mid-Term Presentation

**Owner:** Unassigned

**Reason:** The mid-term meeting schedule was adjusted by Professor Zhang. Consequently, the presentation preparation task has been officially deferred to Week 2. No owner was assigned for this task in Week 1, and work will commence at the start of the next cycle.

---


*Report compiled according to Weekly Report Rules v0.1.*
*Submission Date: April 29, 2026*
