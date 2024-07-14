import React from "react";
import img1 from "../../assets/images/Dubai.jpg";
import img2 from "../../assets/images/Conakry.jpg";
import img3 from "../../assets/images/Banjul.jpg";
import img4 from "../../assets/images/Accra.jpg";
import img5 from "../../assets/images/Harare.jpg";
import img6 from "../../assets/images/Lagos.jpg";
import img7 from "../../assets/images/Manila.jpg";
import img8 from "../../assets/images/Mumbai.jpg";
import img9 from "../../assets/images/brisbane.jpg";
import img10 from "../../assets/images/singapore.jpg";
import img11 from "../../assets/images/perth.jpg";
import img12 from "../../assets/images/auckland.jpg";
import img13 from "../../assets/images/maldives.jpg";
import img14 from "../../assets/images/new york.jpg";
import img15 from "../../assets/images/makkah.jpg";
import img16 from "../../assets/images/madina.jpg";
import { Carousel } from "flowbite-react";

function ImgCarousel() {
  return (
    <div className="container mx-auto h-[500px] xl:h-[700px] my-20 flex flex-col justify-center items-center">
      <h3 className="text-[20px] text-[#D9B748] font-semibold">POPULAR</h3>
      <h1 className="font-bold text-[50px] mb-[51px] text-center">
        Our Popular Destinations
      </h1>
      <Carousel slideInterval={2000} pauseOnHover>
        <img
          src={img1}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img2}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img3}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img4}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img5}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img6}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img7}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img8}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img9}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img10}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img15}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img12}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img13}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        />
        <img
          src={img14}
          alt="..."
          className="w-full h-[600px] object-center object-contain"
        /><img
        src={img11}
        alt="..."
        className="w-full h-[600px] object-center object-contain"
      /><img
      src={img16}
      alt="..."
      className="w-full h-[600px] object-center object-contain"
    />
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
