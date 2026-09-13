import React from "react";

function McpToolsSection() {
  return (
    <article className="nhc-card nhc-mcp">
      <h3>n8n MCP tools in use</h3>

      <div className="nhc-mcp-item">
        <h4>Policy Lookup Engine</h4>
        <p>
          Searches the actual employee handbook or wiki and returns source-cited
          answers for policy questions, so the concierge never guesses.
        </p>
      </div>

      <div className="nhc-mcp-item">
        <h4>Onboarding Progress Tracker</h4>
        <p>
          Checks IT tickets, benefits forms, and calendar milestones against a
          tracker sheet, then returns percent complete plus remaining tasks.
        </p>
      </div>

      <p className="nhc-note">
        Both tools are exposed to Claude Cowork as MCP connectors so the AI can
        ground every response in your real systems.
      </p>
    </article>
  );
}

export default McpToolsSection;