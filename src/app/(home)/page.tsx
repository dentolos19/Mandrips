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
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "2rem" }}>
            <Link className={style(["button", "primary"])} href={"/products"} style={{ width: "fit-content" }}>
              Shop now!
            </Link>
            <Link className={style(["button"])} href={"/about"} style={{ width: "fit-content" }}>
              Learn more!
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
    </main>
  );
}