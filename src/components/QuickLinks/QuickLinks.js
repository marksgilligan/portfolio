import React from "react";
import css from "./QuickLinks.module.css";

function QuickLinks({ handleQuickLinksClick }) {
  return (
    <div className={css.quickLinks} onClick={handleQuickLinksClick}>
      <p className={css.quickLinksText}>Quick Links</p>
    </div>
  );
}

export default QuickLinks;
