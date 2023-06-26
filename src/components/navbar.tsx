import styles from "./navbar.module.css";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navigation}>
      <nav className={"glass-effect"}>
        <h3>Mandrips</h3>
        <span className={styles.items}>
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/feedback"}>Feedback</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>Cart</Link>
        </span>
      </nav>
    </div>
  );
}