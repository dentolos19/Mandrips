"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem, clearCart, getCartItems } from "@/lib/cart";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);

  // this runs after render of the page has been completed
  useEffect(() => {
    setItems(getCartItems());
  }, []);

  const purchaseHandler = () => {
    alert("Purchase has been successful");
    clearCart();
    router.push("/checkout/complete");
  };

  const backHandler = () => {
    router.push("/cart");
  };

  const deliverybutton = () => {
    alert("Information has been saved");
  };

  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <div className={style(["container"])}>
        <div className={style(["left"])}>
          <div style={{ display: "flex", justifyContent: "space-between", height: "150px", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
              <div className={style(["surface"])} style={{ padding: "1em", width: "100%" }}>
                <div style={{ fontSize: "1.5em", fontWeight: "600" }}>Payment Information</div>
                <table>
                  <tr>
                    <td>
                      <label style={{ display: "block" }}>Email</label>
                      <input type="email" placeholder="Supercool@gmail.com" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={{ display: "block" }}>Firstname</label>
                      <input type="text" placeholder="Bofa" />
                    </td>
                    <td>
                      <label style={{ display: "block" }}>Lastname</label>
                      <input type="text" placeholder="Dinesh" />
                    </td>
                  </tr>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}></div>
              </div>
              <div className={style(["surface"])} style={{ padding: "1em", width: "100%" }}>
                <div style={{ fontSize: "1.5em", fontWeight: "600" }}>Billing address</div>
                <table>
                  <tr>
                    <td>
                      <label style={{ display: "block" }}>Address</label>
                      <input type="text" />
                      <div style={{ color: "gray" }}>Block number, House number, Building number, Street name</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ display: "flex", gap: "1rem" }}>
                      <span>
                        <label style={{ display: "block" }}>Town/City</label>
                        <input type="text" />
                      </span>
                      <span>
                        <label style={{ display: "block" }}>Postal code</label>
                        <input type="text" />
                      </span>
                    </td>
                  </tr>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}></div>
              </div>
              <div className={style(["surface"])} style={{ padding: "1em", width: "100%" }}>
                <div style={{ fontSize: "1.5em", fontWeight: "600" }}>Delivery</div>
                <table>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      Same as my billing address
                      <div style={{ fontWeight: "bold" }}>Where would you like your ordered to be delivered?</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ display: "flex", marginTop: "2rem" }}>
                        <input type="radio" style={{ scale: "2" }} />
                        <label style={{ marginLeft: "1rem", display: "flex", alignItems: "center" }}>
                          <i className="lni lni-home" style={{ fontSize: "1.3em" }}></i>
                          <span style={{ marginLeft: "1.5rem" }}>
                            <div style={{ fontWeight: "bold" }}>Home Standard Delivery</div>
                            <div>S$ 6.90 . 3-5days</div>
                          </span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td>
                      <div>Phone number (for delivery updates)</div>
                      <select className={style(["select"])} name="Phone Number">
                        <option value="Singapore(+65)">Singapore (+65)</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className={style(["input"])} type="tel" placeholder="83637961" />
                    </td>
                  </tr>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}>
                  <button
                    className={style(["button"])}
                    style={{ width: "fit-content", background: "black", color: "white" }}
                    onClick={deliverybutton}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
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
              <button className={style(["button", "primary"])} onClick={purchaseHandler}>
                Purchase
              </button>
              <button className={style(["button"])} onClick={backHandler}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}