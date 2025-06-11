import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../services/api";
import axios from "axios";
import { useEffect } from "react";
import PlaceholderImage from "../components/atoms/PlaceholderImage";
import { useTranslation } from "react-i18next";

function CategoryAbout() {
    const [slider, setSlider] = useState([]);
  const [archive, setArchive] = useState([]);
  const [t, i18next] = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/sliders/${id}`)
      .then((res) => setSlider(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API_URL}/archives`)
      .then((res) => setArchive(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="about-news">
      <div className="container">
        <div className="news-left">
          <div className="about-news-top">
            {archive?.map((evt) => (
              <Link to={`/archive/${evt.id}`} className="news-archive">
                {evt.time}
              </Link>
            ))}
          </div>
        </div>
        <div className="news-right">
          <PlaceholderImage
            styles={{
              borderRadius: "5px",
              width: "750px",
              height: "450px",
            }}
            src={`${IMAGE_URL}/${slider?.image_src}`}
          />
          <h3 className="news-surname">{slider[`title_${i18next.language}`]}</h3>
          <p className="news-texts">{slider[`text_${i18next.language}`]}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryAbout;
