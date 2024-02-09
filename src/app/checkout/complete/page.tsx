import { generateStyler } from "@/lib/utilities";
import styles from "./page.module.scss";

export default function Page() {
  const style = generateStyler(styles);
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