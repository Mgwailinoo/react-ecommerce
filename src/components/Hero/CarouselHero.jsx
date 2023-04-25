import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/skincare1.webp";
import img2 from "../../assets/skincare2.webp";
import img3 from "../../assets/skincare3.webp";
import img4 from "../../assets/skincare4.webp";
import img5 from "../../assets/skincare5.webp";
import Hero from "./Hero";
function CarouselHero() {
  const data = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];
  return (
    <Carousel>
      {data.map((data, i) => (
        <Hero key={i} data={data} />
      ))}
    </Carousel>
  );
}

export default CarouselHero;
