// src/components/layout/PageLayout.jsx
import React from "react";

function PageLayout({ title, children }) {
  return (
    <div className="nhc-layout">
      <header className="nhc-header">
        <span className="nhc-logo">New Hire Concierge</span>
        <h2>{title}</h2>
      </header>
      <div className="nhc-content">{children}</div>
      <footer className="nhc-footer">
        Built with vibe coding and AI-assisted workflows.
      </footer>
    </div>
  );
}

export default PageLayout;