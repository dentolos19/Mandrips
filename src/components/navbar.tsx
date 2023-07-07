import styles from "./navbar.module.scss";
import Link from "next/link";
import { useStyles } from "@/lib/utilities";

export default function Navbar() {
  const style = useStyles(styles);
  return (
    <div className={style(["navigation-container"])}>
      <nav className={style(["navigation"])}>
        <Link href={"/"} className={style(["title"])}>
          Mandrips
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