import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.sections}>
      <section>
        <div className={"navigation-gutter"}></div>
        <div
          className={[styles.content, "glass-effect"].join(" ")}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Welcome to our online store!</h1>
          <p>The world's oldest clothing provider!</p>
          <p>
            <button className={"button"} style={{ marginRight: "8px" }}>
              Shop now!
            </button>
            <button className={"button"}>Learn more...</button>
          </p>
        </div>
      </section>
      <section>
        <div className={"navigation-gutter"}></div>
        <div className={[styles.content, "glass-effect"].join(" ")}></div>
      </section>
      <section>
        <div className={"navigation-gutter"}></div>
        <div className={[styles.content, "glass-effect"].join(" ")}></div>
      </section>
      <section>
        <div className={"navigation-gutter"}></div>
        <div className={[styles.content, "glass-effect"].join(" ")}></div>
      </section>
    </div>
  );
}