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
            <span className={style(["title"])}>FAQs</span>
            <br />
            <span className={style(["question"])}>1) What is the return policy for online clothing purchases?</span>
            <br />
            <span className={style(["answer"])}>
              Check the website's return policy for details on eligibility, conditions, and any associated fees.
            </span>
            <br />
            <span className={style(["question"])}>2) What is the return policy for online clothing purchases?</span>
            <br />
            <span className={style(["answer"])}>
              Check the website's return policy for details on eligibility, conditions, and any associated fees.
            </span>
            <br />
            <span className={style(["question"])}>3) What is the return policy for online clothing purchases?</span>
            <br />
            <span className={style(["answer"])}>
              Check the website's return policy for details on eligibility, conditions, and any associated fees.
            </span>
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