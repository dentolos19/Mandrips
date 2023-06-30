"use client";

import styles from "./page.module.scss";
import Loading from "@/app/loading";
import { getClothing } from "@/lib/data";
import { makeUseStyles } from "@/lib/utilities";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();

  const id = parseInt(params.id);
  const { data, isLoading } = getClothing(id);
  if (isLoading) return <Loading />;
  const color = data.colors.find((color) => color.name === searchParams.get("color")) || data.colors[0];
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content-product"])}>
          <div className={useStyles(["left"])}>
            <div className={useStyles(["display"])}>
              <img src={`/clothes/${color.file}`} />
            </div>
          </div>
          <div className={useStyles(["right"])}>
            <div className={useStyles(["details"])}>
              <div className={useStyles(["title"])}>{data.name}</div>
              <div>{data.price}</div>
              <div className={useStyles(["description"])}>{data.description}</div>
              <div className={useStyles(["setting"])}>
                <select>
                  {data.colors.map((color) => (
                    <option key={color.name}>{color.name}</option>
                  ))}
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
                <input type={"number"} min={1} value={1} />
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