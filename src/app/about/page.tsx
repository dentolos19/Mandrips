import styles from "./page.module.scss";
import { useStyles } from "@/lib/utilities";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main className={style(["sections"])}>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "about"])}>
          <img className={style(["image"])} src={"assets/linus.jpeg"} />
          <div className={style(["text"])}>
            <h1>About Us</h1>
            <h5>
              The <span>Best Clothing Brand</span> In The World!
            </h5>
            <p>
              Founded by tailor <span>Mandrix the Great</span> in the 1500s, Mandrips quickly became renowned for its
              commitment to superior quality and attention to fit. Its exceptional craftsmanship and innovative designs
              attracted the attention of the nobility, establishing Mandrips as a prestigious clothing brand. As time
              passed, Mandrips adapted and evolved with changing fashion trends and customer preferences while staying
              true to its core values of exceptional craftsmanship.
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
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "who"])}>
          <h3>Who Are We</h3>
          <p>
            We are the decendants of Mandrips the great and have just started an online store to compete in the online
            marketplace. Our products has been the top of the line in quality since the 1500s and will continue to
            provide our customers with the same quality.
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "40px" }}>
            <div style={{ width: "200px" }}>
              <img className={style(["surface"])} src={"assets/mandrix.jpg"} style={{ width: "100%", height: "60%" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold" }}>Mandrips the Great</div>
                <div>The Founder</div>
                <div>1496 - 1581</div>
              </div>
            </div>
            <div style={{ width: "200px" }}>
              <img className={style(["surface"])} src={"assets/killian.jpg"} style={{ width: "100%", height: "60%" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold" }}>Cillian the Rizzler</div>
                <div>3rd Generation CEO</div>
                <div>1632 - 1712</div>
              </div>
            </div>
            <div style={{ width: "200px" }}>
              <img className={style(["surface"])} src={"assets/dennise.jpg"} style={{ width: "100%", height: "60%" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold" }}>Denis the Extraordinaire</div>
                <div>7th Generation CEO</div>
                <div>1838 - 1912</div>
              </div>
            </div>
            <div style={{ width: "200px" }}>
              <img className={style(["surface"])} src={"assets/brayden.jpg"} style={{ width: "100%", height: "60%" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold" }}>Brandon the Tremendous</div>
                <div>Current CEO</div>
                <div>1956 - Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style(["titles"])}>
          <h5 className={style(["mandrix"])}>Mandrips the Great (1481~1561)</h5>
          <h5 className={style(["dennise"])}>Denis the Extraordinary (1496~1587)</h5>
          <h5 className={style(["brayden"])}>Brandon the Tremendous (1492~1551)</h5>
          <h5 className={style(["killian"])}>Cillian the Rizzler (1479~1558)</h5>
        </div>
        <div className={style(["founders"])}>
          <img className={style(["mandrixpic"])} src={"assets/mandrix.jpg"} />
          <img className={style(["killianpic"])} src={"assets/killian.jpg"} />
          <img className={style(["braydenpic"])} src={"assets/brayden.jpg"} />
          <img className={style(["dennisepic"])} src={"assets/dennise.jpg"} />
        </div> */}
      </section>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "history"])}>
          <h3>Our History</h3>
          <video controls muted src={"assets/advertisement.mp4"}></video>
        </div>
      </section>
      <section>
        <div className={style(["navigation-gutter"])}></div>
        <div className={style(["content", "vision"])}>
          <h3>Customers' Testimonials</h3>
          <p>"Now anyone can have drip! 👕💦" ~ Mandrix</p>
          <p>"My drip makes people wet. 🥵💦" ~ [REDACTED]</p>
          <p>"Drip can be bought. 🤸" ~ Brayden</p>
          <p>"I am dripped out of my mind!!! 💦🤯" ~ Killian</p>
        </div>
      </section>
    </main>
  );
}