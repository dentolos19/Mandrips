import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <div style={{ textAlign: "center" }}>
        <h3>Thank you!</h3>
        <p>We will deliver your items to you within 4 to 5 business days.</p>
      </div>
    </main>
  );
}