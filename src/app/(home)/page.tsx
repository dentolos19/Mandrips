import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.sections}>
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