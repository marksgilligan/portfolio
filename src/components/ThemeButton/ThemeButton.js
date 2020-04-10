import React from "react";
import css from "./ThemeButton.module.css";

function ThemeButton({ handleThemeClick, theme }) {
  return (
    <div className={css.switchArea}>
      <span className={css.themeText}>
        {theme === "Light" ? "Dark" : "Light"} Mode
      </span>
      <label className={css.switch}>
        <input
          type="checkbox"
          onClick={handleThemeClick}
          className={css.modeButton}
        />
        <span className={css.sliderRound}></span>
      </label>
    </div>
  );
}

export default ThemeButton;
