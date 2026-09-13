import React from "react";

function NewHireCard({
  name,
  role,
  startDate,
  completion,
  essentialsCompleted,
  essentialsTotal,
}) {
  const progressText = `${completion}% complete`;
  const essentialsText = `${essentialsCompleted} of ${essentialsTotal} essentials complete`;

  return (
    <article className="nhc-card">
      <h3>{name}'s onboarding progress</h3>
      <p className="nhc-role">{role}</p>
      <p className="nhc-start-date">{startDate}</p>

      <div className="nhc-progress">
        <div className="nhc-progress-bar">
          <div
            className="nhc-progress-fill"
            style={{ width: `${completion}%` }}
          />
        </div>
        <p className="nhc-progress-label">{progressText}</p>
        <p className="nhc-progress-sub">{essentialsText}</p>
      </div>

      <p className="nhc-note">
        Three items still need attention before her first week ends. Keep the
        welcome warm and the work moving.
      </p>
    </article>
  );
}

export default NewHireCard;