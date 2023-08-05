import styles from "./navigationBar.module.scss";
import Link from "next/link";
import { useStyles } from "@/lib/utilities";

export default function NavigationBar() {
  const style = useStyles(styles);
  return (
    <div className={style(["navigation-container"])}>
      <nav className={style(["navigation"])}>
        <Link className={style(["title"])} href={"/"}>
          <img src="/assets/icon.png"/>
        </Link>
        <div className={style(["items"])}>
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/feedback"}>Feedback</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>
            <i className={"lni lni-cart"}></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}