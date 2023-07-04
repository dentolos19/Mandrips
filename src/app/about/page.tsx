import styles from "./page.module.scss";
import { makeUseStyles } from "@/lib/utilities";

export default function Page() {
  const useStyles = makeUseStyles(styles);
  return (
    <main className={useStyles(["sections"])}>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content", "about"])}>
          <img className={useStyles(["image"])} src={"assets/linus.jpeg"} />
          <div className={useStyles(["text"])}>
            <h1>About Us</h1>
            <h5>
              The <span>Best</span> Clothing Brand In The world!
            </h5>
            <p>
              Founded by tailor <span>Mandrix the Great</span> in the 1500s, Mandrips quickly became renowned for its
              commitment to superior quality and attention to fit. Its exceptional craftsmanship and innovative designs
              attracted the attention of the nobility, establishing Mandrips as a prestigious clothing brand. As time
              passed, Mandrips adapted and evolved with changing fashion trends and customer preferences while staying
              true to its core values of exceptional craftsmanship.
            </p>
            <p>
              The brand's ability to balance tradition with innovation allowed it to remain relevant and respected in
              the fashion industry. In the modern era, Mandrips continues to embody elegance and creativity. Its
              clothing designs are known for their attention to detail, exquisite fabrics, and timeless appeal. The
              brand's commitment to superior craftsmanship ensures that every garment reflects the highest standards of
              quality.
            </p>
            <p>
              Mandrips' legacy as a symbol of elegance and creativity in the fashion industry is a testament to its
              long-standing tradition of excellence. The brand's ability to adapt and evolve while maintaining its core
              values has contributed to its enduring success and popularity among fashion enthusiasts. Today, Mandrips
              stands as a respected and sought-after clothing brand, representing the epitome of elegance and creativity
              in the fashion world.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content", "vision"])}>
          <h3>Our Mission, Vision &amp; Goals</h3>
          <p>"Anyone can have drip" ~ Mandrix</p>
        </div>
      </section>
      <section>
        <div className={useStyles(["navigation-gutter"])}></div>
        <div className={useStyles(["content", "history"])}>
          <h3>Our History</h3>
          <video controls muted src={"assets/advertisement.mp4"}></video>
        </div>
      </section>
    </main>
  );
}