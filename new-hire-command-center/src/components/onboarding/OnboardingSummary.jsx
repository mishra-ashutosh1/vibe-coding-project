import React from "react";

function OnboardingSummary({ completion, outstandingItems }) {
  return (
    <article className="nhc-card nhc-summary">
      <h3>Onboarding summary</h3>
      <p>
        Overall completion: <strong>{completion}%</strong>
      </p>
      <p>Outstanding items:</p>
      <ul>
        {outstandingItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default OnboardingSummary;