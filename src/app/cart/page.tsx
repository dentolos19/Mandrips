import styles from "./page.module.scss";

import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main>
      <div className={useStyles(["navigation-gutter"])}></div>
      <div style={{ textAlign: "center" }}>
        <h3>Cart</h3>
      </div>
    </main>
  );
}