import React from "react";
import "./News.css";
import NewsImage from "../../../assets/images/news.jpg";
import NewsImage1 from "../../../assets/images/news1.jpg";
import NewsImage2 from "../../../assets/images/news2.jpg";
import NewsImage3 from "../../../assets/images/news3.jpg";
import NewsImage4 from "../../../assets/images/neews4.jpg";
import NewsImage5 from "../../../assets/images/news5.jpg";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { API_URL, IMAGE_URL } from "../../../services/api";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "Марғилон шахрида ВМ нинг 84 сонли қарорини ижроси",
    text: "Ўзбекистон Республикаси Вазирлар Махкамасининг 2022 йил 22-феврал кунидаги “Ўзбекистон Республикасида одам иммунитет танқислиги вируси инфекцияси...",
    img: NewsImage,
  },
  {
    id: 2,
    title: "ТАҚДИРЛАШ МАРОСИМИ",
    text: "Тиббиётдаги ислоҳотлар натижадорлигини таъминлаш учун янада сифатли ва самарали тиббий хизмат кўрсатиб, халқ саломатлини мустаҳкамлашда янада фаол бўлишларига тилакдошмиз. Мукофот муборак булсин.",
    img: NewsImage1,
  },
  {
    id: 3,
    title: "ТАҚДИРЛАШ МАРОСИМИ",
    text: "Тиббиёт ва фармацевтика ходимларининг малака тоифаси бериш бўйича йиғмажилд орқали ҳужжат топшириш амалиёти бекор қилинди.",
    img: NewsImage2,
  },
  {
    id: 4,
    title: "Тиббиёт ходимларига малака тоифаси бериш тизими тўлиқ ўзгарди",
    text: "Малака тоифаси берилганлигини тасдиқловчи қоғоз шаклидаги сертификат бериш амалиётига ҳам барҳам берилиб, электрон шаклдаги сертификат бериш тартиби жорий этилди.",
    img: NewsImage3,
  },
  {
    id: 5,
    title: "Тиббиёт ходимларига малака тоифаси бериш тизими тўлиқ ўзгарди",
    text: "2023 йил 7 ноябр куни University of Business and scince MCnJning 6 ноябр 2023 йил  07-06/930-сон курсатма хати асосида 'Соғлом турмуш тарзини тарғиб қилиш мавзусида семинар утказилди. ",
    img: NewsImage4,
  },
  {
    id: 6,
    title: "2023 йил 7 ноябр куни University of Business and scince",
    text: "Вилоят хокимлиги хотин-кизлар кумитаси, Вилоят бош отинойиси хамда вилоят ОИТСга қарши  кураш маркази мутахассислари иштирок этди. Иштирокчиларга 5 хил турдаги буклетлар тарқатилди.",
    img: NewsImage5,
  },
];

function News() {
  const [t, i18next] = useTranslation();

  return (
    <div className="news">
      <div className="container">
        <h2 className="news-name">Yangiliklar</h2>
        <div className="news-page">
          {news.map((news) => (
            <div className="news-list">
              {/* <Link to={`/news/${news.id}`}> */}
                <PlaceholderImage
                  styles={{
                    borderRadius: "5px",
                    width: "350px",
                    height: "250px",
                    marginTop: "-10px",
                  }}
                  src={news.img}
                />
                <h3 className="news-subname">{news.title}</h3>
                <p className="news-text">{news.text}</p>
                <Link className="news-link" to={`/news/${news.id}`}>Batafsil o'qish</Link>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
