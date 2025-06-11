import React, { useState, useEffect } from "react";
import "./About.css";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { CompanyImage } from "../../../assets/images";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../../services/api";
import { useTranslation } from "react-i18next";
import NamanganImage from './namangan.jpg'

function About() {
  const [about, setAbout] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get(`${API_URL}/about`)
      .then((res) => setAbout(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="about">
      <div className="container">
        <PlaceholderImage styles={{ width: "500px" }} src={NamanganImage} />
        <div className="about-list">
          <h3 className="about-name">Markaz haqida</h3>
          <p className="about-text">
            ОИТС тўғрисидаги дастлабки хабарлар АҚШда рўйхатга олинган. 1981
            йилда Лос-Анжелес ва Нью-Йорклик гомосексуалистларда пневмоцист
            пневмониянинг 5 ҳолати ва Капоши саркомасининг 26 ҳолати аниқланган.
            Уларнинг кўпчилигида ОИВ туфайли юзага келган Т–ҳужайралари
            иммунитет танқислиги аниқланган. Биринчи марта ОИВ инфекциясининг
            якуний босқичи таърифланди ва кейинчалик унга “Орттирилган Иммунитет
            Танқислиги Синдроми” (ОИТС) деган ном берилди.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
