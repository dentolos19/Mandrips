"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";
import { useState } from "react";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false); // TODO: false to true

  const useStyles = makeUseStyles(styles);
  return (
    <>
      <dialog className={useStyles(["dialog"])} open={dialogOpen}>
        <div
          className={useStyles(["content"])}
          style={{ display: "flex", maxWidth: "25%", flexDirection: "column", alignItems: "center" }}
        >
          <h3 style={{ textAlign: "center" }}>
            This is a fictionous website! More info in{" "}
            <Link href={"https://github.com/dentolos19/Mandrips"}>our GitHub page</Link>.
          </h3>
          <button
            className={useStyles(["button"])}
            style={{ width: "fit-content" }}
            onClick={() => setDialogOpen(false)}
          >
            Okay
          </button>
        </div>
      </dialog>
      <main className={useStyles(["sections"])}>
        <section>
          <div className={useStyles(["navigation-gutter"])}></div>
          <div className={useStyles(["content", "home"])}>
            <div className={useStyles(["title"])}>Mandrips</div>
            <div>It fits, it drips.</div>
            <div className={useStyles(["socials"])}>
              <Link href={"https://github.com/dentolos19/Mandrips"}>
                <i className="lni lni-github-original"></i>
              </Link>
              <Link href={"https://github.com/dentolos19/Mandrips"}>
                <i className="lni lni-linkedin-original"></i>
              </Link>
              <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
                <i className="lni lni-instagram-original"></i>
              </Link>
              <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
                <i className="lni lni-twitter-original"></i>
              </Link>
              <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
                <i className="lni lni-facebook-original"></i>
              </Link>
            </div>
            <div className={useStyles(["images"])}>
              <img src={"assets/dude-1.png"} style={{
                height: "550px",
                left: "96px",
              }}/>
              <img src={"assets/dude-2.png"} style={{
                height: "600px",
                right: "64px"
              }}/>
            </div>
          </div>
        </section>
        <section>
          <div className={useStyles(["navigation-gutter"])}></div>
          <div className={useStyles(["content"])}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <h1>To be added.</h1>
              <p>This website is still under construction.</p>
            </div>
          </div>
        </section>
        <section>
          <div className={useStyles(["navigation-gutter"])}></div>
          <div className={useStyles(["content"])}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <h1>To be added.</h1>
              <p>This website is still under construction.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}