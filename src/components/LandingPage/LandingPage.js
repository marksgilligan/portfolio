import React, { useState } from "react";
import css from "./LandingPage.module.css";
import QuickLinks from "../QuickLinks/QuickLinks";
import QuickLinksOpen from "../QuickLinksOpen/QuickLinksOpen";
import ThemeButton from "../ThemeButton/ThemeButton";

function LandingPage() {
  const [theme, setTheme] = useState("Dark");
  const [quickLinks, setQuickLinks] = useState(false);

  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color");

  function handleThemeClick() {
    if (theme === "Dark") {
      setTheme("Light");
      document.documentElement.style.setProperty("--primary-color", "#f8f4e3");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#d6d3ea"
      );
      document.documentElement.style.setProperty("--third-color", "#002642");
      document.documentElement.style.setProperty(
        "--forth-color",
        "rgb(88, 88, 88)"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#002642"
      );
    } else if (theme === "Light") {
      setTheme("Dark");
      document.documentElement.style.setProperty("--primary-color", "#002642");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#d6d3ea"
      );
      document.documentElement.style.setProperty("--third-color", "#f8f4e3");
      document.documentElement.style.setProperty(
        "--forth-color",
        "rgb(88, 88, 88)"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#d1d1d1"
      );
    } else console.log("no good");
  }

  function handleQuickLinksClick() {
    setQuickLinks(!quickLinks);
  }

  return (
    <div className={css.landingPageGrid}>
      <section className={css.fixedHeader}>
        <ThemeButton
          theme={theme}
          setTheme={setTheme}
          handleThemeClick={handleThemeClick}
        />
        {!quickLinks ? (
          <QuickLinks handleQuickLinksClick={handleQuickLinksClick} />
        ) : (
          <QuickLinksOpen handleQuickLinksClick={handleQuickLinksClick} />
        )}
      </section>
      <article className={css.headers}>
        <h1 className={css.mainHeader}>Mark Gilligan</h1>
        <h3 className={css.subHeader}>Junior Developer</h3>
      </article>
      <p className={css.about}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <p className={css.navDestination}>Scroll to My Journey</p>
      <section id={css.section02} class="demo">
        <a href="#section03">
          <span></span>
        </a>
      </section>
    </div>
  );
}

export default LandingPage;
