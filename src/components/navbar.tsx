import styles from "./navbar.module.scss";

import Link from "next/link";
import { makeUseStyles } from "@/lib/utilities";

export default function Navbar() {
  const useStyles = makeUseStyles(styles);
  return (
    <div className={useStyles(["navigation-container"])}>
      <nav className={useStyles(["navigation"])}>
        <span className={useStyles(["title"])}>Mandrips</span>
        <span className={useStyles(["items"])}>
          <Link href={"/#start"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/#wip"}>Feedback</Link>
          <Link href={"/#wip"}>About</Link>
          <Link href={"/#wip"}>Cart</Link>
        </span>
      </nav>
    </div>
  );
}