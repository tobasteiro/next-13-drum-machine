"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";

import { MuteContext } from "../../app/layout";

function Header() {
  const id = React.useId();

  let { muted, setMuted } = React.useContext(MuteContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setMuted(!muted);
          }}
        >
          {!muted ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {!muted ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
