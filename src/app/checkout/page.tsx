"use client";

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem, clearCart, getCartItems } from "@/lib/cart";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCartItems());
  }, []);

  const purchaseHandler = () => {
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
                      <input className={style(["input"])} type="email" placeholder="Supercool@gmail.com" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={{ display: "block" }}>Firstname</label>
                      <input className={style(["input"])} type="text" placeholder="Bofa" />
                    </td>
                    <td>
                      <label style={{ display: "block" }}>Lastname</label>
                      <input className={style(["input"])} type="text" placeholder="Dinesh" />
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
                      <input className={style(["input"])} type="text" />
                      <div style={{ color: "gray" }}>Block number, House number, Building number, Street name</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ display: "flex", gap: "1rem" }}>
                      <span>
                        <label style={{ display: "block" }}>Town/City</label>
                        <input className={style(["input"])} type="text" />
                      </span>
                      <span>
                        <label style={{ display: "block" }}>Postal code</label>
                        <input className={style(["input"])} type="text" />
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
                        <option value="Singapore(+65)">Singapore(+65)</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className={style(["input"])} type="tel" placeholder="83637961" />
                    </td>
                  </tr>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}></div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}></div>
              </div>
              <div className={style(["surface"])} style={{ padding: "1em", width: "100%" }}>
                <div style={{ fontSize: "1.5em", fontWeight: "600" }}>Payment</div>
                <table>
                  <tr>
                    <td>
                      <div>How would you like to pay?</div>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td>
                      <div style={{ display: "flex", marginTop: "1rem" }}>
                        <input type="radio" style={{ scale: "2" }} />
                        <label style={{ marginLeft: "1rem", display: "flex", alignItems: "center" }}>
                          <i className="lni lni-visa" style={{ fontSize: "1.5em" }}></i>
                          <i className="lni lni-mastercard" style={{ fontSize: "1.5em" }}></i>

                          <span style={{ marginLeft: "1.5rem" }}>
                            <div style={{ fontWeight: "bold" }}>Credit Card</div>
                          </span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <label style={{ display: "block" }}>Firstname</label>
                        <input className={style(["input"])} type="text" placeholder="Bofa" />
                      </div>
                      <div>
                        <label style={{ display: "block" }}>Lastname</label>
                        <input className={style(["input"])} type="text" placeholder="Dinesh" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <label style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Card number</span>
                          <span>
                            <i className="lni lni-visa" style={{ fontSize: "1.5rem" }}></i>
                            <i className="lni lni-mastercard" style={{ fontSize: "1.5em" }}></i>
                          </span>
                        </label>
                      </div>
                      <input
                        className={style(["input"])}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        autoComplete="cc-number"
                        maxLength={19}
                        placeholder="xxxx xxxx xxxx xxxx"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ display: "flex", flexDirection: "row" }}>
                      <span className="expiration">
                        <label style={{ display: "block" }}>Expiry date</label>
                        <input
                          className={style(["input"])}
                          type="text"
                          name="month"
                          placeholder="MM/YY"
                          maxLength={5}
                          size={5}
                        />
                      </span>
                      <div style={{ marginLeft: "2rem" }}>
                        <label style={{ display: "block" }}>Cvv</label>
                        <input className={style(["input"])} type="tel" maxLength={3} placeholder="3 digits" />
                      </div>
                    </td>
                  </tr>
                </table>
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