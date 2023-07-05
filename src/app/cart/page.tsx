"use client";

import styles from "./page.module.scss";
import { CartItem, getCartItems } from "@/lib/user-data";
import { makeUseStyles } from "@/lib/utilities";
import { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCartItems());
  }, []);

  const useStyles = makeUseStyles(styles);
  return (
    <main>
      <div className={useStyles(["navigation-gutter"])}></div>
      <div className={useStyles(["container"])}>
        <div className={useStyles(["left"])}>
          <div className={useStyles(["items"])}>
            {items.map((item) => (
              <div key={item.clothing.id} className={useStyles(["item"])}>
                <div className={useStyles(["details"])}>
                  <img className={useStyles(["image"])} src={`/clothes/${item.clothing.colorFile}`} />
                  <div className={useStyles(["text"])}>
                    <div className={useStyles(["title"])}>{item.clothing.name}</div>
                    <div>Product ID: {item.clothing.id}</div>
                    <div>
                      Color: {item.clothing.colorName} / Size: {item.size}
                    </div>
                    <div>Quantity: {item.quantity}</div>
                  </div>
                </div>
                <div className={useStyles(["price"])}>{`S$${(item.clothing.price * item.quantity).toFixed(2)}`}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={useStyles(["right"])}>
          <div className={useStyles(["order"])}>
            <div>Order Summary</div>
          </div>
        </div>
      </div>
    </main>
  );
}