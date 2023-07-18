"use client";

import styles from "./page.module.scss";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import { useEffect, useState, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { getClothings, getColoredClothing } from "@/lib/clothing-data";
import { addToCart, CartItem } from "@/lib/user-data";
import { useStyles } from "@/lib/utilities";

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();

  const [color, setColor] = useState<string>();
  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!color) return;
    document.querySelector(`#${color}`)?.scrollIntoView();
  }, [color]);

  useEffect(() => {
    const colorName = searchParams.get("color");
    if (colorName) {
      setColor(colorName);
    }
  }, []);

  const id = parseInt(params.id);
  if (isNaN(id)) return <NotFound />;
  const { data: clothings } = getClothings();
  if (!clothings) return <Loading />;
  const clothing = clothings.find((clothing) => clothing.id === id);
  if (!clothing) return <NotFound />;

  const colorChangedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const sizeChangedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  const quantityChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const addHandler = () => {
    addToCart({
      clothing: getColoredClothing(clothing, clothing.colors.find((item) => item.name === color) ?? clothing.colors[0]),
      size: size,
      quantity: quantity,
    } as CartItem);
    alert("Your item has been added to cart!");
  };

  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "product"])}>
          <div className={style(["left"])}>
            <div className={style(["display"])}>
              {clothing.colors.map((color) => (
                <div key={color.name} id={color.name} className={style(["slide"])}>
                  <img src={`/clothes/${color.file}`} />
                </div>
              ))}
            </div>
          </div>
          <div className={style(["right"])}>
            <div className={style(["details"])}>
              <div className={style(["title"])}>{clothing.name}</div>
              <div>{`S$${clothing.price.toFixed(2)}`}</div>
              <div className={style(["description"])}>{clothing.description}</div>
              <div className={style(["setting"])}>
                <select className={style(["select"])} value={color} onChange={colorChangedHandler}>
                  {clothing.colors.map((color) => (
                    <option key={color.name}>{color.name}</option>
                  ))}
                </select>
              </div>
              <div className={style(["setting"])}>
                <select className={style(["select"])} value={size} onChange={sizeChangedHandler}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className={style(["setting"])}>
                <input
                  className={style(["input"])}
                  style={{ textAlign: "center" }}
                  type={"number"}
                  min={1}
                  value={quantity}
                  onChange={quantityChangedHandler}
                />
              </div>
              <button className={style(["button", "primary"])} type={"submit"} onClick={addHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "reviews"])}>Reviews here.</div>
      </section>
    </main>
  );
}