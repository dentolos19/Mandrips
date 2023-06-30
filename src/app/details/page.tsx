import styles from "./page.module.scss";

import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content-product"])}>
          <div className={useStyles(["left"])}>
            <div className={useStyles(["display"])} style={{ display: "grid", placeItems: "center", height: "80vh" }}>
              Image here.
            </div>
          </div>
          <div className={useStyles(["right"])}>
            <div className={useStyles(["details"])}>
              <div className={useStyles(["title"])}>Product Name</div>
              <div>Price</div>
              <div className={useStyles(["description"])}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </div>
              <div className={useStyles(["setting"])}>
                <select>
                  <option>White</option>
                  <option>Black</option>
                </select>
              </div>
              <div className={useStyles(["setting"])}>
                <select>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className={useStyles(["setting"])}>
                <input type={"number"} min={1} />
              </div>
              <div className={useStyles(["buttons"])}>
                <button className={useStyles(["button"])} type={"submit"}>
                  Add to Cart
                </button>
                <button className={useStyles(["button"])} type={"reset"}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content-reviews"])}>Reviews here.</div>
      </section>
    </main>
  );
}