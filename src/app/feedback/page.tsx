import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content", "feedback"])}>
          <form>
            <div className={useStyles(["table"])}>
              <table>
                <tr>
                  <td>
                    <input className={useStyles(["input"])} type={"text"} placeholder={"John Doe"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={useStyles(["input"])} type={"email"} placeholder={"john.doe@gmail.com"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={useStyles(["input"])} type={"text"} placeholder={"Feedback Subject"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea className={useStyles(["input"])} />
                  </td>
                </tr>
                <tr>
                  <td className={useStyles(["buttons"])}>
                    <button className={useStyles(["button"])} type="reset">
                      Clear
                    </button>
                    <button className={useStyles(["button"])} type="submit">
                      Submit
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content"])}>
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