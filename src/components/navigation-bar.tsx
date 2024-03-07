import { generateStyler } from "@/lib/utilities";
import Link from "next/link";
import styles from "./navigation-bar.module.scss";

export default function NavigationBar() {
  const style = generateStyler(styles);
  return (
    <div className={style(["navigation-container"])}>
      <nav className={style(["navigation"])}>
        <Link className={style(["title"])} href={"/"}>
          <img src="/favicon.png" />
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