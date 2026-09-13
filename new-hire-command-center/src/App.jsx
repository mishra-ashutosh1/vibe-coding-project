import { useState } from "react";
import { dummyNewHire, trackerSheetUrl } from "./data/onboardingData";

const connectedSources = [
  ["Google Calendar", "Onboarding schedule", "calendar", "https://calendar.google.com/calendar/u/0/r"],
  ["Google Drive", "Handbook and policy docs", "drive", "https://drive.google.com/drive/folders/1nQi5-5rs7UW1Ke2c6ZiT0OIYDhLDUDSK"],
  ["Gmail", "Welcome emails and reminders", "gmail", "mailto:acm5520@gmail.com"],
  ["Google Tasks", "Onboarding checklist", "tasks", "https://tasks.google.com/u/0/tasks/"],
  ["Google Sheets", "Tracker link · demo data", "sheets", trackerSheetUrl],
  ["Slack", "Buddy and team intros", "slack", "#slack"],
];

const conciergeSkills = [
  "Answer policy questions only from the actual handbook",
  "Write onboarding reminders in a warm, welcoming tone",
  "Escalate pay, legal, and grievance questions to People Ops",
  "Summarize onboarding progress for managers weekly",
  "Never share one employee's personal data with another",
];

function App() {
  const [tasks, setTasks] = useState(dummyNewHire.tasks);
  const [policyQuestion, setPolicyQuestion] = useState("");
  const [policyAnswer, setPolicyAnswer] = useState(false);
  const [notice, setNotice] = useState("");
  const completedCount = tasks.filter((task) => task.complete).length + dummyNewHire.completedEssentialsBeforeVisibleTasks;
  const completion = Math.round((completedCount / dummyNewHire.totalEssentials) * 100);

  function toggleTask(index) {
    setTasks((currentTasks) => currentTasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, complete: !task.complete } : task,
    ));
    setNotice("Milestone status updated in the onboarding tracker.");
  }

  function searchPolicy(event) {
    if (event.key === "Enter" && policyQuestion.trim()) setPolicyAnswer(true);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">W</span><span>WelcomeFlow</span></div>
        <p className="eyebrow">People Operations</p>
        <nav className="nav" aria-label="Main navigation">
          <button className="nav-item active" type="button"><span>▦</span>Command center</button>
          <button className="nav-item" type="button"><span>✓</span>New hires</button>
          <button className="nav-item" type="button"><span>◷</span>Calendar</button>
          <button className="nav-item" type="button"><span>?</span>Policy library</button>
        </nav>
        <div className="source-list">
          <h2>Connected sources <span>6/6</span></h2>
          {connectedSources.map(([name, detail, tone, url]) => (
            <a className="source" href={url} key={name} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noreferrer" : undefined}><span className={`source-icon ${tone}`} aria-hidden="true">●</span><span><strong>{name}</strong><small>{detail}</small></span><i aria-label="Connected" /></a>
          ))}
        </div>
        <div className="sidebar-foot"><span className="status-dot" />Demo data active · tracker link ready</div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div><p className="kicker">Monday, September 13 · {dummyNewHire.cohort}</p><h1>New Hire Command Center</h1></div><div className="profile"><span>People Ops</span><b>AP</b></div></header>
        <section className="hero"><div className="hero-copy"><p className="kicker">{dummyNewHire.checkInLabel}</p><h2>{dummyNewHire.checkInMessage}</h2><p>{dummyNewHire.checkInSummary}</p><div className="hero-actions"><button className="primary" type="button" onClick={() => setNotice(`Slack draft created: warm day-3 benefits reminder for ${dummyNewHire.name}.`)}>✦ Draft Slack reminder</button><button className="secondary" type="button" onClick={() => setNotice("Manager summary generated with outstanding actions and next meetings.")}>Generate manager summary</button></div></div><div className="hero-stamp"><strong>DAY<br />03</strong><span>ONBOARDING<br />PULSE</span></div></section>

        <section className="dashboard-grid">
          <article className="panel progress-panel"><div className="panel-head"><div><h2>{dummyNewHire.name}&apos;s onboarding progress</h2><p>{dummyNewHire.role} · Started {dummyNewHire.startDate}</p></div><span className="badge">{completion}% complete</span></div><div className="progress-wrap"><div className="progress-row"><span>{completedCount} of {dummyNewHire.totalEssentials} essentials complete</span><strong>{completion}%</strong></div><div className="meter"><i style={{ width: `${completion}%` }} /></div></div><div className="tasks" aria-label="Onboarding milestones">{tasks.map((task, index) => <label className={`task ${task.complete ? "done" : ""}`} key={task.title}><input type="checkbox" checked={task.complete} onChange={() => toggleTask(index)} /><span className="task-copy"><strong>{task.title}</strong><small>{task.meta}</small></span><span className={`tag ${task.complete ? "ok" : ""}`}>{task.complete ? "Done" : index === 2 ? "Due soon" : "Pending"}</span></label>)}</div></article>
          <div className="side-stack"><article className="panel"><div className="panel-head"><div><h2>Upcoming moments</h2><p>Google Calendar sync</p></div><span className="sync-label">● Live</span></div><div className="meetings">{dummyNewHire.meetings.map((meeting) => <div className="meeting" key={meeting.title}><time>{meeting.month}<strong>{meeting.day}</strong></time><span><strong>{meeting.title}</strong><small>{meeting.meta}</small></span></div>)}</div></article><article className="panel policy-panel"><div className="panel-head"><div><h2>Ask the policy library</h2><p>Answers cite the handbook only</p></div><span className="book-icon">▤</span></div><input value={policyQuestion} onChange={(event) => setPolicyQuestion(event.target.value)} onKeyDown={searchPolicy} placeholder="e.g. How many leave days do I get?" aria-label="Ask a policy question" />{policyAnswer && <div className="answer"><strong>Employees receive 20 paid leave days</strong> per calendar year, accrued monthly.<br /><a href="#handbook">Source: Employee Handbook §4.2 ↗</a></div>}</article></div>
        </section>

        <section className="integration-section"><div className="section-heading"><div><p className="kicker">Custom connectors</p><h2>Two n8n tools make the context useful</h2></div><span className="mcp-badge">MCP · Cowork</span></div><div className="mcp-grid"><article className="mcp-card"><span className="mcp-mark">⌁</span><div><h3>Policy Lookup Engine</h3><p>Searches the actual handbook and returns source-cited answers, so the concierge never guesses.</p></div><button type="button" onClick={() => setNotice("Policy Lookup Engine queried successfully.")}>Test tool</button></article><article className="mcp-card"><span className="mcp-mark">↗</span><div><h3>Onboarding Progress Tracker</h3><p>Checks IT, benefits, and calendar milestones against the tracker and returns what remains.</p></div><button type="button" onClick={() => setNotice(`${completedCount} of 9 milestones complete. Tracker refreshed.`)}>Refresh</button></article></div></section>
        <section className="rules-section"><div className="rules-heading"><div><p className="kicker">Installed plugin</p><h2>Onboarding Concierge</h2><p>Five skills keep every answer grounded, warm, and appropriately scoped.</p></div><span className="installed-badge">✓ Installed</span></div><div className="skill-list">{conciergeSkills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></section>
        <p className="privacy-note">Personal data stays scoped to the employee and manager view. Pay, legal, and grievance questions escalate to People Ops.</p>
      </main>
      {notice && <button className="toast" type="button" onClick={() => setNotice("")} aria-label="Dismiss notification">{notice} <span>×</span></button>}
    </div>
  );
}

export default App;
