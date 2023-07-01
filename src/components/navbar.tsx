import styles from "./navbar.module.scss";
import Link from "next/link";
import { makeUseStyles } from "@/lib/utilities";

export default function Navbar() {
  const useStyles = makeUseStyles(styles);
  return (
    <div className={useStyles(["navigation-container"])}>
      <nav className={useStyles(["navigation"])}>
        <div>
          <Link href={"/"} className={useStyles(["title"])}>
            Mandrips
          </Link>
          <span className={useStyles(["socials"])}>
            <Link href={"https://github.com/dentolos19/Mandrips"}>
              <i className={"lni lni-github-original"}></i>
            </Link>
            <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
              <i className={"lni lni-facebook-original"}></i>
            </Link>
            <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
              <i className={"lni lni-instagram-original"}></i>
            </Link>
            <Link href={"https://youtu.be/dQw4w9WgXcQ"}>
              <i className={"lni lni-twitter-original"}></i>
            </Link>
          </span>
        </div>
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