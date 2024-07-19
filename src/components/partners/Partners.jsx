import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emirates from "../../assets/images/Emirates_(airline)-Logo.wine.png";
import turkishAirlines from "../../assets/images/Turkish_Airlines-Logo.wine.png";
import brusselsAirlines from "../../assets/images/Brussels_Airlines-Logo.wine.png";
import lufthansa from "../../assets/images/Lufthansa-Logo.wine.png";
import qatarAirways from "../../assets/images/Qatar_Airways-Logo.wine.png";
import ethiopian from "../../assets/images/Ethiopian_Airlines-Logo.wine.png";
import kenyaAirways from "../../assets/images/Kenya_Airways-Logo.wine.png";
import royalAirMaroc from "../../assets/images/Royal_Air_Maroc-Logo.wine.png";

const logos = [
  { src: emirates, alt: "Emirates" },
  { src: turkishAirlines, alt: "Turkish Airlines" },
  { src: brusselsAirlines, alt: "Brussels Airlines" },
  { src: lufthansa, alt: "Lufthansa" },
  { src: qatarAirways, alt: "Qatar Airways" },
  { src: ethiopian, alt: "Ethiopian" },
  { src: kenyaAirways, alt: "Kenya Airways" },
  { src: royalAirMaroc, alt: "Royal Air Maroc" }
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='w-full bg-zinc-100 py-10'>
      <div className='mx-auto'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className='flex justify-center items-center'>
              <img className='h-[150px] object-contain' src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
