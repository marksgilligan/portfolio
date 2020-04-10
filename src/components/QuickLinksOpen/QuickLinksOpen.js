import React from "react";
import css from "./QuickLinksOpen.module.css";

function QuickLinksOpen({ handleQuickLinksClick }) {
  return (
    <div className={css.quickLinks}>
      <p id={css.quickLinks} className={css.quickLinksTextHome}>
        Home
      </p>
      <p id={css.quickLinks} className={css.quickLinksTextJourney}>
        My Journey
      </p>
      <p id={css.quickLinks} className={css.quickLinksTextProjects}>
        Projects
      </p>
      <p id={css.quickLinks} className={css.quickLinksTextOther}>
        Other
      </p>
      <p
        id={css.quickLinks}
        className={css.quickLinksTextClose}
        onClick={handleQuickLinksClick}
      >
        x
      </p>
    </div>
  );
}

export default QuickLinksOpen;
