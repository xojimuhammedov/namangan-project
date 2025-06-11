import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL, IMAGE_URL } from "../../../services/api";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { useTranslation } from "react-i18next";
import "./Products.css";
import { Link } from "react-router-dom";

function Products({ linkId }) {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        setProduct(res.data.data);
        setFilter(res.data.data.filter((evt) => evt.category_id === linkId));
      })
      .catch((err) => console.log(err));
  }, [linkId]);

  return (
    <div className="products">
      <div className="container">
        <div className="products-list">
          {linkId
            ? filter.map((evt) => (
                <div className="products-item">
                  <Link to={`/products/${evt.id}`}>
                    <PlaceholderImage
                      styles={{
                        borderRadius: "5px",
                        width: "280px",
                        height: "220px",
                        marginTop: "-10px",
                      }}
                      src={`${IMAGE_URL}/${evt?.image_src}`}
                    />
                    <h3 className="news-subname">
                      {evt[`title_${i18next.language}`]}
                    </h3>
                  </Link>
                </div>
              ))
            : product.map((evt) => (
                <div className="products-item">
                  <Link to={`/products/${evt.id}`}>
                    <PlaceholderImage
                      styles={{
                        borderRadius: "5px",
                        width: "280px",
                        height: "220px",
                        marginTop: "-10px",
                      }}
                      src={`${IMAGE_URL}/${evt?.image_src}`}
                    />
                    <h3 className="news-subname">
                      {evt[`title_${i18next.language}`]}
                    </h3>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
