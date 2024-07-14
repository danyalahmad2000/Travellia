import React from "react";
import img1 from "../../assets/images/Dubai.jpg";
import img2 from "../../assets/images/Conakry.jpg";
import img3 from "../../assets/images/Banjul.jpg";
import img4 from "../../assets/images/Accra.jpg";
import img5 from "../../assets/images/Harare.jpg";
import img6 from "../../assets/images/Lagos.jpg";
import { Carousel } from "flowbite-react";

function ImgCarousel() {
  return (
    <div className="container mx-auto h-[500px] xl:h-[700px] my-20 flex flex-col justify-center items-center">
      <h3 className="text-[20px] text-[#D9B748] font-semibold">POPULAR</h3>
      <h1 className="font-bold text-[50px] mb-[51px] text-center">
        Our Popular Destinations
      </h1>
      <Carousel slideInterval={5000} pauseOnHover>
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
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
