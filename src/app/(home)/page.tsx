import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
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
            <h1>Welcome to our online store!</h1>
            <p>The world's oldest clothing provider!</p>
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