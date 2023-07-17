import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "feedback"])}>
          <div className={style(["left", "faq"])}>
            <div className={style(["title"])}>FAQs</div>
            <div className={style(["question"])}>1. What are your opening hours?</div>
            <div className={style(["answer"])}>
              We are open from 9 am to 9 pm, Monday to Saturday, and from 10 am to 6 pm on Sundays.
            </div>
            <div className={style(["question"])}>2. What is your return policy?</div>
            <div className={style(["answer"])}>
              You can return any unworn, unwashed, and undamaged items within 30 days of purchase with a valid receipt.
              We will issue a full refund or exchange as per your preference.
            </div>
            <div className={style(["question"])}>3. Do you offer free shipping?</div>
            <div className={style(["answer"])}>
              Yes, we offer free standard shipping on orders over $50 within the US. For international orders, shipping
              fees may vary depending on the destination and weight of the package.
            </div>
            <div className={style(["question"])}>4. How can I contact customer service?</div>
            <div className={style(["answer"])}>
              You can call us at <code>1-800-MAN-DRIPS</code>, contact us via the form on the right, or email us at{" "}
              <a href={"mailto:support@mandrips.com"}>support@mandrips.com</a>. We are available from 8 am to 10 pm,
              Monday to Friday, and from 9 am to 7 pm on weekends.
            </div>
          </div>
          <div className={style(["right"])}>
            <form className={style(["form"])}>
              <table cellSpacing={8}>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"text"} placeholder={"John Doe"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"email"} placeholder={"john.doe@gmail.com"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"text"} placeholder={"Feedback Subject"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea className={style(["input"])} />
                  </td>
                </tr>
                <tr>
                  <td className={style(["buttons"])}>
                    <button className={style(["button", "primary"])} type={"submit"}>
                      Send
                    </button>
                    <button className={style(["button"])} type={"reset"}>
                      Clear
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}