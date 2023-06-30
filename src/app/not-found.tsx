import styles from "@/styles/common.scss";

import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main>
      <div className={useStyles(["navigation-gutter"])}></div>
      <div style={{ textAlign: "center" }}>
        <h3>404</h3>
        <p>The page that you're looking for does not exist.</p>
      </div>
    </main>
  );
}