import CardContent from "../cardContent/CardContent";
import { useState, useEffect } from "react";

import "./Content.css";
import HeaderContent from "../headerContent/HeaderContent";

const Content = () => {
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      {/* header */}
      <HeaderContent />

      {/* main section */}
      <section className="container__section">
        <div>
          {products.map((product) => {
            return <CardContent product={product} />;
          })}
        </div>
      </section>
    </main>
  );
};
export default Content;
