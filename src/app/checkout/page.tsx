import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <div className={style(["container"])}>
        <div className={style(["left"])}>
          Left
        </div>
        <div className={style(["right"])}>
          Right
        </div>
      </div>
    </main>
  )
}