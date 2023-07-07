"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import Loading from "@/app/loading";
import { getClothings } from "@/lib/clothing-data";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const { data: clothings } = getClothings();
  if (!clothings) return <Loading />;

  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <form className={style(["container"])}>
        <div className={style(["left"])}>
          <form className={style(["filters"])}>
            <section>
              <div>Categories</div>
              <div>
                <input name={"category"} type={"checkbox"} value={"shirts"} />
                <label>Shirts</label>
              </div>
              <div>
                <input name={"category"} type={"checkbox"} value={"hoodies"} />
                <label>Hoodies</label>
              </div>
              <div>
                <input name={"category"} type={"checkbox"} value={"hats"} />
                <label>Hats</label>
              </div>
            </section>
            <section>
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
                <label>$100 and beyond</label>
              </div>
            </section>
            <div className={style(["buttons"])}>
              <div className={style(["buttons"])}>
                <button className={style(["button"])} type={"submit"}>
                  Filter
                </button>
                <button className={style(["button"])} type={"reset"}>
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={style(["right"])}>
          <div className={style(["search"])}>
            <input className={style(["input"])} name={"search"} type={"search"} placeholder={"Search"} />
          </div>
          <div className={style(["items"])}>
            {clothings.map((item) =>
              item.colors.map((color) => (
                <Link key={item.id} className={style(["item"])} href={`/products/${item.id}?color=${color.name}`}>
                  <img src={"clothes/" + color.file} />
                  <div className={style(["price"])}>{`S$${item.price.toFixed(2)}`}</div>
                </Link>
              ))
            )}
          </div>
        </div>
      </form>
    </main>
  );
}