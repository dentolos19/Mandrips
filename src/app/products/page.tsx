import styles from "./page.module.css";

export default function Page() {
  return (
    <form>
      <div className={"navigation-gutter"}></div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={[styles.filters, "glass-effect"].join(" ")}>
            <div>
              <div>Categories</div>
              <div>
                <input name={"category"} type={"checkbox"} value={"hoodies"} />
                <label>Hoodies</label>
              </div>
              <div>
                <input name={"category"} type={"checkbox"} value={"shirts"} />
                <label>Shirts</label>
              </div>
              <div>
                <input name={"category"} type={"checkbox"} value={"pants"} />
                <label>Pants</label>
              </div>
              <div>
                <input name={"category"} type={"checkbox"} value={"shorts"} />
                <label>Shorts</label>
              </div>
            </div>
            <div>
              <div>Sizes</div>
              <div>
                <input name={"size"} type={"checkbox"} value={"small"} />
                <label>Small</label>
              </div>
              <div>
                <input name={"size"} type={"checkbox"} value={"medium"} />
                <label>Medium</label>
              </div>
              <div>
                <input name={"size"} type={"checkbox"} value={"large"} />
                <label>Large</label>
              </div>
            </div>
            <div>
              <div>Price Ranges</div>
              <div>
                <input name={"price"} type={"radio"} value={"all"} checked />
                <label>All</label>
              </div>
              <div>
                <input name={"price"} type={"radio"} value={"poor"} />
                <label>$5 to $29</label>
              </div>
              <div>
                <input name={"price"} type={"radio"} value={"mid"} />
                <label>$30 to $99</label>
              </div>
              <div>
                <input name={"price"} type={"radio"} value={"rich"} />
                <label>$100 to beyond</label>
              </div>
            </div>
            <div>
              <input type={"submit"} value={"Filter"} />
              <input type={"reset"} value={"Clear"} />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={[styles.search, "glass-effect"].join(" ")}>
            <input
              name={"search"}
              type={"search"}
              placeholder={"Search"}
            ></input>
          </div>
          <div className={styles.items}>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
            <div className={"glass-effect"}></div>
          </div>
        </div>
      </div>
    </form>
  );
}