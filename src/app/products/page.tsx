"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import Loading from "@/app/loading";
import { ChangeEvent, useEffect, useState } from "react";
import { ColoredClothing, getClothings, getColoredClothings } from "@/lib/database";
import { shuffleArray, useStyles } from "@/lib/utilities";

const categories = [
  {
    name: "T-Shirts",
    value: "shirt",
  },
  {
    name: "Polo Shirts",
    value: "polo",
  },
  {
    name: "Hoodies",
    value: "hoodie",
  },
  {
    name: "Sweaters",
    value: "sweater",
  },
  {
    name: "Hats",
    value: "hat",
  },
];

const priceRanges = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "$5 to $29",
    value: "poor",
  },
  {
    name: "$30 to $99",
    value: "mid",
  },
  {
    name: "$100 and beyond",
    value: "rich",
  },
];

export default function Page() {
  const [filterOpened, setFilterOpened] = useState(false);
  const [filteredClothings, setFilteredClothings] = useState<ColoredClothing[]>([]);
  const [search, setSearch] = useState("");
  const [categoryChecked, setCategoryChecked] = useState<boolean[]>(new Array(categories.length).fill(true));
  const [priceRange, setPriceRange] = useState<string>("all");

  const { data: clothings } = getClothings();

  useEffect(() => {
    if (clothings) setFilteredClothings(shuffleArray(getColoredClothings(clothings)));
  }, [clothings]);

  if (!filteredClothings) return <Loading />;

  useEffect(() => {
    if (!clothings) return;
    const filtered = shuffleArray(
      getColoredClothings(clothings).filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) &&
          categoryChecked[categories.findIndex((category) => category.value === item.type)] &&
          (priceRange === "all" ||
            (priceRange === "poor" && item.price >= 5 && item.price <= 29) ||
            (priceRange === "mid" && item.price >= 30 && item.price <= 99) ||
            (priceRange === "rich" && item.price >= 100))
        );
      })
    );
    setFilteredClothings(filtered);
  }, [search, categoryChecked, priceRange]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const categoryCheckHandler = (position: number) => {
    setCategoryChecked(categoryChecked.map((item, index) => (index === position ? !item : item)));
  };

  const style = useStyles(styles);
  return (
    <main>
      <div className={style(["navigation-gutter"])}></div>
      <form className={style(["container"])}>
        {filterOpened && (
          <div className={style(["left"])}>
            <div className={style(["filters"])}>
              <section>
                <div>Categories</div>
                {categories.map((category, index) => (
                  <div key={index}>
                    <input
                      name={"category"}
                      type={"checkbox"}
                      value={category.value}
                      checked={categoryChecked[index]}
                      onChange={() => categoryCheckHandler(index)}
                    />
                    <label>{category.name}</label>
                  </div>
                ))}
              </section>
              <section>
                <div>Price Ranges</div>
                {priceRanges.map((item, index) => (
                  <div key={index}>
                    <input
                      name={"price"}
                      type={"radio"}
                      value={item.value}
                      checked={item.value === priceRange}
                      onChange={() => setPriceRange(item.value)}
                    />
                    <label>{item.name}</label>
                  </div>
                ))}
              </section>
              <button
                className={style(["button"])}
                style={{ marginTop: "1rem" }}
                onClick={() => setFilterOpened(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className={style(["right"])}>
          <div className={style(["search"])}>
            {!filterOpened && (
              <button className={style(["filter-button"])} onClick={() => setFilterOpened(true)}>
                <i className={"lni lni-radio-button"}></i>
              </button>
            )}
            <input
              className={style(["input"])}
              name={"search"}
              type={"search"}
              placeholder={"Search"}
              onChange={searchHandler}
            />
          </div>
          {filteredClothings.length > 0 ? (
            <div className={style(["items"])}>
              {filteredClothings.map((item) => (
                <Link
                  key={`${item.id}-${item.colorName}`}
                  className={style(["item"])}
                  title={item.name}
                  href={`/products/${item.id}?color=${item.colorName}`}
                >
                  <img src={`/database/clothes/${item.id}/${item.colorFile}`} />
                  <div className={style(["price"])}>{`S$${item.price.toFixed(2)}`}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ width: "100%", textAlign: "center" }}>
              <h3>No items found.</h3>
              <p>We will cater to your needs soon enough!</p>
            </div>
          )}
        </div>
      </form>
    </main>
  );
}