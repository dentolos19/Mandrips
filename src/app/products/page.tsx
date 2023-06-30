"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import Loading from "@/app/loading";
import { makeUseStyles } from "@/lib/utilities";
import { getClothings } from "@/lib/data";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  const { data, isLoading } = getClothings();
  if (isLoading) return <Loading />;
  return (
    <main>
      <div className={useStyles(["navigation-gutter"])}></div>
      <form className={useStyles(["container"])}>
        <div className={useStyles(["left"])}>
          <form className={useStyles(["filters"])}>
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
            <div className={useStyles(["buttons"])}>
              <button className={useStyles(["button"])} type={"submit"}>
                Filter
              </button>
              <button className={useStyles(["button"])} type={"reset"}>
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className={useStyles(["right"])}>
          <div className={useStyles(["search"])}>
            <input name={"search"} type={"search"} placeholder={"Search"} />
          </div>
          <div className={useStyles(["items"])}>
            {data.map((item) =>
              item.colors.map((color) => (
                <Link
                  key={item.id}
                  className={useStyles(["item"])}
                  href={"/details/" + item.id + "?color=" + color.name}
                >
                  <img src={"clothes/" + color.file} />
                </Link>
              ))
            )}
          </div>
        </div>
      </form>
    </main>
  );
}