import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "feedback"])}>
          <div
            className={style(["left", "surface"])}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Something here :)
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
                  <button className={style(["button", "primary"])} type="submit">
                      Submit
                    </button>
                    <button className={style(["button"])} type="reset">
                      Clear
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "surface"])}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h3>FAQs</h3>
          </div>
        </div>
      </section>
    </main>
  );
}