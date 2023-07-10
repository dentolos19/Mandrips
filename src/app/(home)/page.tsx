"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "home"])}>
          <div className={style(["title"])}>Mandrips</div>
          <div>It fits, it drips.</div>
          <div className={style(["socials"])}>
            <Link href={"https://github.com/dentolos19/Mandrips"}>
              <i className="lni lni-github-original"></i>
            </Link>
            <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
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
          <div className={style(["images"])}>
            <img
              src={"assets/dude-1.png"}
              style={{
                height: "90%",
                left: "10%",
              }}
            />
            <img
              src={"assets/dude-2.png"}
              style={{
                height: "100%",
                right: "5%",
              }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content"])}>
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
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content"])}>
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
  );
}