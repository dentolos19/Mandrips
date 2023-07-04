import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main>
      <div className={useStyles(["navigation-gutter"])}></div>
      <div className={useStyles(["container"])}>
        <div className={useStyles(["left"])}>
          <div className={useStyles(["items"])}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={useStyles(["item"])}>
                <div className={useStyles(["details"])}>
                  <img className={useStyles(["image"])} />
                  <div className={useStyles(["text"])}>
                    <div className={useStyles(["title"])}>Product Name</div>
                    <div>Product ID: 0</div>
                    <div>Color: NaN / Size: NaN</div>
                    <div>Quantity: 0</div>
                  </div>
                </div>
                <div className={useStyles(["price"])}>PRICE</div>
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