import styles from "./navbar.module.scss";
import Link from "next/link";
import { makeUseStyles } from "@/lib/utilities";

export default function Navbar() {
  const useStyles = makeUseStyles(styles);
  return (
    <div className={useStyles(["navigation-container"])}>
      <nav className={useStyles(["navigation"])}>
        <Link href={"/"} className={useStyles(["title"])}>
          Mandrips
        </Link>
        <div className={useStyles(["items"])}>
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