import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../../../services/api";
import axios from "axios";
import { useEffect } from "react";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { useTranslation } from "react-i18next";
import "./AboutNews.css";

function AboutNews() {
  const [aboutNews, setAboutNews] = useState([]);
  const [archive, setArchive] = useState([]);
  const [t, i18next] = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/news/${id}`)
      .then((res) => setAboutNews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

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
            src={`${IMAGE_URL}/${aboutNews?.image_src}`}
          />
          <h3 className="news-surname">
            {aboutNews[`title_${i18next.language}`]}
          </h3>
          <p className="news-texts">{aboutNews[`text_${i18next.language}`]}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;
