import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import "./Partner.css";
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../../services/api";

function Partner() {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/sources`)
      .then((res) => setPartner(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="partner">
      <div className="container">
        <h2 className="partner-name">Foydali manbalar</h2>
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            {partner.map((evt) => (
              <PlaceholderImage
                styles={{ width: "210px", height: "80px" }}
                src={`${IMAGE_URL}/${evt?.image_src}`}
              />
            ))}
          </SplideSlide>
          <SplideSlide>
            {partner.map((evt) => (
              <PlaceholderImage
                styles={{ width: "210px", height: "80px" }}
                src={`${IMAGE_URL}/${evt?.image_src}`}
              />
            ))}
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Partner;
