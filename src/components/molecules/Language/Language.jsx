import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";
import { RussianImage, UzbekImage, EnglishImage } from "../../../assets/icons";

const languages = [
  {
    title: "uz",
    img: <img src={UzbekImage} className="language-img" />,
  },
  {
    title: "ru",
    img: <img src={RussianImage} className="language-img" />,
  },
  {
    title: "en",
    img: (
      <img
        style={{ width: "40px", marginBottom: "5px", marginTop: "5px" }}
        src={EnglishImage}
        className="language-img"
      />
    ),
  },
];

const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };
  return (
    <div className="languages">
      <div className="languages-list">
        {languages?.map((lang) => (
          <div
            className="language-item"
            onClick={() => onChangeLanguage(lang.title)}>
            {lang.img}
            <p>{lang.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
