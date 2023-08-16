"use client";

import styles from "./page.module.scss";
import { FormEvent } from "react";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Your feedback has been submitted.");
  };

  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "feedback"])}>
          <div className={style(["left", "faq"])}>
            <div className={style(["title"])}>FAQs</div>
            <div className={style(["question"])}>Where are you located?</div>
            <div className={style(["answer"])}>
              We are available at any mall near you!
            </div>
            <div className={style(["question"])}>What are your opening hours?</div>
            <div className={style(["answer"])}>
              We are open from 9 am to 9 pm, Monday to Saturday, and from 10 am to 6 pm on Sundays.
            </div>
            <div className={style(["question"])}>What is your return policy?</div>
            <div className={style(["answer"])}>
              You can return any unworn, unwashed, and undamaged items within 30 days of purchase with a valid receipt.
              We will issue a full refund or exchange as per your preference.
            </div>
            <div className={style(["question"])}>How can I contact customer service?</div>
            <div className={style(["answer"])}>
              You can call us at <code>1-800-MAN-DRIPS</code>, contact us via the form on the right, or email us at{" "}
              <a href={"mailto:support@mandrips.com"}>support@mandrips.com</a>. We are available from 8 am to 10 pm,
              Monday to Friday, and from 9 am to 7 pm on weekends.
            </div>
          </div>
          <div className={style(["right"])}>
            <form className={style(["form"])} onSubmit={submitHandler}>
              <table cellSpacing={8}>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"text"} placeholder={"John Doe"} required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"email"} placeholder={"john.doe@gmail.com"} required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className={style(["input"])} type={"text"} placeholder={"Feedback Subject"} required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea className={style(["input"])} required />
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