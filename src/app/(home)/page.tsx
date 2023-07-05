import Link from "next/link";
import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content", "home"])}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div className={useStyles(["title"])}>Mandrips</div>
            <div>It fits, it drips.</div>
            <div className={useStyles(["socials"])}>
              <Link href={"https://github.com/dentolos19/Mandrips"}>
                <i className="lni lni-github-original"></i>
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
          </div>
        </div>
      </section>
      <section id="wip">
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
            <h1>Work-in-progress!</h1>
            <p>This website is still under construction.</p>
          </div>
        </div>
      </section>
    </main>
  );
}