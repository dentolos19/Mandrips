"use client";

import styles from "./page.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem, clearCart, getCartItems } from "@/lib/cart";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCartItems());
  }, []);

  const purchaseHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Purchase has been successful!");
    clearCart();
    router.push("/checkout/complete");
  };

  const backHandler = () => {
    router.push("/cart");
  };

  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <form className={style(["container"])} onSubmit={purchaseHandler}>
        <div className={style(["left"])}>
          <div className={style(["checkout"])}>
            <section>
              <div className={style(["title"])}>Recipient Information</div>
              <div className={style(["content"])}>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div style={{ flexGrow: 1 }}>
                    <label>First Name</label>
                    <input className={style(["input"])} type={"text"} placeholder={"John"} required />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <label>Last Name</label>
                    <input className={style(["input"])} type={"text"} placeholder={"Doe"} required />
                  </div>
                </div>
                <div>
                  <label>Email Address</label>
                  <input className={style(["input"])} type={"email"} placeholder={"john.doe@gmail.com"} required />
                </div>
              </div>
            </section>
            <section>
              <div className={style(["title"])}>Delivery Information</div>
              <div className={style(["content"])}>
                <div>
                  <label>Address</label>
                  <input className={style(["input"])} type={"text"} placeholder={"1965 Singapore St 9"} required />
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div style={{ flexGrow: 1 }}>
                    <label>City (for International Shipping)</label>
                    <input className={style(["input"])} type={"text"} placeholder={"Singapore"} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <label>Unit Number (if applicable)</label>
                    <input className={style(["input"])} type={"text"} placeholder={"#12-34"} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <label>Postal Code</label>
                    <input className={style(["input"])} type={"text"} placeholder={"123456"} required />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className={style(["title"])}>Payment Information</div>
              <div className={style(["content"])}>
                <div>
                  <label>Card Number</label>
                  <input className={style(["input"])} type={"text"} placeholder={"1234 5678 9012 3456"} required />
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div style={{ flexGrow: 1 }}>
                    <label>Expiry Date</label>
                    <input className={style(["input"])} type={"text"} placeholder={"MM/YY"} required />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <label>CVV</label>
                    <input className={style(["input"])} type={"text"} placeholder={"123"} required />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={style(["right"])}>
          <div className={style(["order"])}>
            <div>
              <div className={style(["title"])}>Order Summary</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "bold" }}>Subtotal</span>
                <span>
                  {`S$${(items.reduce((acc, item) => acc + item.clothing.price * item.quantity, 0) * 0.92).toFixed(2)}`}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "bold" }}>Estimated Tax</span>
                <span>
                  {`S$${(items.reduce((acc, item) => acc + item.clothing.price * item.quantity, 0) * 0.08).toFixed(2)}`}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "bold" }}>Total</span>
                <span>
                  {`S$${items.reduce((acc, item) => acc + item.clothing.price * item.quantity, 0).toFixed(2)}`}
                </span>
              </div>
            </div>
            <div className={style(["buttons"])}>
              <button className={style(["button", "primary"])} type={"submit"}>
                Purchase
              </button>
              <button className={style(["button"])} type={"button"} onClick={backHandler}>
                Back
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}