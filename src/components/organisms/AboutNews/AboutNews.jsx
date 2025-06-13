import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../../../services/api";
import axios from "axios";
import { useEffect } from "react";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { useTranslation } from "react-i18next";
import NewsImage from "../../../assets/images/news.jpg";
import NewsImage1 from "../../../assets/images/news1.jpg";
import NewsImage2 from "../../../assets/images/news2.jpg";
import NewsImage3 from "../../../assets/images/news3.jpg";
import NewsImage4 from "../../../assets/images/neews4.jpg";
import NewsImage5 from "../../../assets/images/news5.jpg";
import NewsImage7 from "../../../assets/images/news7.jpg";
import NewsImage8 from "../../../assets/images/news8.jpg";
import "./AboutNews.css";

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
  {
    id: 7,
    title: "Namangan OITS Markazi",
    text: "Viloyat OITSga qarshi kurshish markazi tomonidan aholi orasida OIV infeksiyasi bo‘yicha Diniy boshqarmalar orqali tushuntirish targ‘ibot ishlarini kuchaytirish maqsadida Namangan shaxar 'Muxammad Panox' joʼme masjidida targʼibot tadbirlari oʼtkazildi",
    img: NewsImage7,
  },
  {
    id: 8,
    title: "Namangan OITS Markazi",
    text: "Bugun viloyat OITSga qarshi kurashish markazi mutaxassislari tomonidan shimoliy Farg‘ona kanali bo‘yida 'Sog‘lom hayot uchun 5000 qadam' yurish, yengil gimnastika tadbirlari o‘tkazildi.",
    img: NewsImage8,
  },
];

function AboutNews() {
  // const [aboutNews, setAboutNews] = useState([]);
  // const [archive, setArchive] = useState([]);
  const [t, i18next] = useTranslation();
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/news/${id}`)
  //     .then((res) => setAboutNews(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/archives`)
  //     .then((res) => setArchive(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const aboutNews = news?.find((item) => item?.id === Number(id));

  return (
    <div className="about-news">
      <div className="container">
        <div className="news-right">
          <PlaceholderImage
            styles={{
              borderRadius: "5px",
              width: "750px",
              height: "450px",
            }}
            src={aboutNews?.img}
          />
          <h3 className="news-surname">{aboutNews?.title}</h3>
          <p className="news-texts">{aboutNews?.text}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;
