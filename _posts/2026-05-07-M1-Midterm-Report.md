---
layout: post
title: "M1-Midterm-Report"
date: 2026-05-07 7:00:00
excerpt: "M1-Midterm-Report. Include PPT and video"
doc_type: Midterm
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
  background: #19191a; border: 1px solid var(--border);
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

  /* Hide Jekyll auto-generated post title and date above the document header */
  .post-header, .post-title, .page-heading,
  h1.post-title, h1.page-title,
  .entry-title, .article-title,
  .post > h1:first-of-type,
  article > h1:first-of-type,
  .content > h1:first-of-type,
  .post-content > h1:first-of-type { display: none !important; }
  .post-meta, .post-date, time.dt-published,
  .page-date, span.post-date { display: none !important; }

  /* Download button */
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
  <div class="hld-header-tag">System Design Document · High-Level Design · Part I of II</div>
  <h1>High-Level Design<br><span>M1 — Patient Mobile Application</span></h1>
  <div class="hld-header-meta">
    <span class="meta-chip"><strong>Project:</strong> Limb Motion Recognition and Assistant</span>
    <span class="meta-chip"><strong>Team:</strong> M1 — Patient Mobile App</span>
    <span class="meta-chip"><strong>Layer:</strong> Monitor</span>
    <span class="meta-chip"><strong>Date:</strong> May 7, 2026</span>
  </div>
  <div style="margin-top:1.5rem; text-align:center;">
    <a class="download-btn" 
   href="https://docs.google.com/gview?embedded=1&url=https://diogopinhel.github.io/DSD2026_TeamM1/doc/Wang/M1_MidTerm_Presentation_link.pptx.pptx" 
   target="_blank" 
   rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
  View Presentation Online
</a>
  </div>
</div>

---
