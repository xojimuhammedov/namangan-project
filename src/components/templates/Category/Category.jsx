import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../services/api";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Category.css";
import Products from "../Products/Products";

function Category() {
  const [category, setCategory] = useState([]);
  const [t, i18next] = useTranslation();
  const [linkId, setLinkId] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/categories`)
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="category">
      <div className="container">
        {category.map((evt) => (
          <button
            key={evt.id}
            onClick={() => setLinkId(evt?.id)}
            className="category-link">
            {evt[`name_${i18next.language}`]}
          </button>
        ))}
        <Products linkId={linkId} />
      </div>
    </div>
  );
}

export default Category;
