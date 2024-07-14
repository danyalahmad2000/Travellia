import React,{useRef} from "react";
import Partners from "../components/partners/Partners";
import category1 from "../assets/images/guided-tours.png";
import category2 from "../assets/images/flight-options.png";
import category3 from "../assets/images/religious-tours.png";
import category4 from "../assets/images/luxury.png";
import familyAdventure from "../assets/images/family1.jpg";
import familyAdventure2 from "../assets/images/family2.jpg";
import familyAdventure3 from "../assets/images/family3.jpg";
import familyAdventure4 from "../assets/images/family4.jpg";
import resort from "../assets/images/resort-booking.png";
import chooseDestination from "../assets/images/choose-destination.png";
import letsGo from "../assets/images/lets-go.png";
import checkAvailability from "../assets/images/check-availability.png";
import statueOfLiberty from "../assets/images/statue-of-liberty.png";
import switzerlandImg from "../assets/images/switzerland.png";
import giza from "../assets/images/giza.png";
import amazon from "../assets/images/amazon.png";
import { IoBriefcase } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  const trendyRef = useRef(null);

  const scrollToTrendy = () => {
    trendyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Partners />
      {/*----------------- CATEGORY------------- */}
      <div className="container mx-auto flex flex-wrap flex-col items-center my-[100px]">
        <h1 className="text-[20px] text-[#D9B748] font-semibold">CATEGORY</h1>
        <h1 className="font-bold text-[50px] mb-[100px] text-center md:text-start">
          We Offer Best Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between gap-32">
          <div className="flex flex-col items-center gap-5 w-[250px] text-center">
            <img
              className="w-[87px] h-[85px]"
              src={category1}
              alt="Guided Tours"
            />
            <h1 className="text-[20px] font-bold">Guided Tours</h1>
            <p className="text-[16px] text-gray-500">
              Discover new destinations with our knowledgeable guides, ensuring
              an enriching travel experience.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 w-[250px] text-center">
            <img
              className="w-[87px] h-[85px]"
              src={category2}
              alt="Best Flight Options"
            />
            <h1 className="text-[20px] font-bold">Best Flight Options</h1>
            <p className="text-[16px] text-gray-500">
              Choose from a variety of flight options tailored to your
              preferences and budget, ensuring a seamless journey.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 w-[250px] text-center">
            <img
              className="w-[87px] h-[85px]"
              src={category3}
              alt="Religious Tours"
            />
            <h1 className="text-[20px] font-bold">Religious Tours</h1>
            <p className="text-[16px] text-gray-500">
              Embark on spiritual journeys to sacred places, fostering deeper
              connections and cultural understanding.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 w-[250px] text-center">
            <img
              className="w-[150px] h-[85px]"
              src={category4}
              alt="Medical Insurance"
            />
            <h1 className="text-[20px] font-bold">Luxury Stays</h1>
            <p className="text-[16px] text-gray-500">
              Experience unparalleled luxury and comfort with our curated
              selection of premium accommodations.
            </p>
          </div>
        </div>
      </div>

      {/*---------------- Family Adventure ------------- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-[100px]">
        <div className="h-full flex flex-col lg:flex-row py-10 relative gap-10 lg:gap-0">
          <img
            src={familyAdventure}
            alt=""
            className="h-[300px] my-auto mx-10 shadow-xl rounded-xl"
          />
          <img
            src={familyAdventure4}
            alt=""
            className="h-[300px] mx-10 lg:mx-0 shadow-xl rounded-xl"
          />
          <img
            src={familyAdventure3}
            alt=""
            className="h-[300px] my-auto mx-10 shadow-xl rounded-xl"
          />
          <img
            src={familyAdventure2}
            alt=""
            className="h-[300px] lg:absolute lg:top-96 lg:left-[280px] mx-10 lg:mx-0 shadow-xl rounded-xl"
          />
        </div>
        <div className="flex flex-col md:justify-center md:pl-[100px] xl:py-[172px] xl:pl-[133px] xl:w-[700px] text-center md:text-start items-center md:items-start mx-2 ">
          <h3 className="text-[20px] text-[#D9B748] font-semibold">
            FAMILY ADVENTURES
          </h3>
          <h1 className="font-bold text-[50px] mb-[20px]">
            Exciting Family-Friendly Destinations
          </h1>
          <p className="text-[16px] text-gray-500">
            Embark on thrilling family adventures at our handpicked
            destinations. From theme parks and wildlife safaris to interactive
            museums and outdoor activities, create unforgettable memories with
            your loved ones in exciting and safe environments.
          </p>
          <button
            className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold"
            onClick={scrollToTrendy}
          >
            View Packages
          </button>
        </div>
      </div>

      {/*------------- RESORT BOOKINGS ----------- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-[50px]">
        <div className="flex flex-col md:justify-center md:pl-[50px] xl:py-[50px] xl:pl-[133px] xl:w-[700px] text-center md:text-start items-center md:items-start mx-2 ">
          <h3 className="text-[20px] text-[#D9B748] font-semibold">
            FAST & EASY
          </h3>
          <h1 className="font-bold text-[50px] mb-[20px]">
            Get Your Favourite Hotels/Resort Bookings
          </h1>
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-row gap-[20px]">
              <img
                className="w-[47px] h-[48px] my-auto"
                src={chooseDestination}
                alt=""
              />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Choose Destination</h1>
                <p className="">
                  Find your perfect travel spot from our diverse list of
                  destinations.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <img
                className="w-[47px] h-[48px] my-auto"
                src={checkAvailability}
                alt=""
              />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Check Availability</h1>
                <p className="">
                  Get real-time updates on flights, hotels, and activities.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <img className="w-[47px] h-[48px] my-auto" src={letsGo} alt="" />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Let's Go</h1>
                <p className="">
                  Start your adventure with everything planned and ready.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full mt-5">
          <img src={resort} alt="" />
        </div>
      </div>

      {/*------------- Statue of Liberty ----------- */}
      <div>
        <img className="w-full h-[400px]" src={statueOfLiberty} alt="" />
      </div>

      {/*------------- Trendy ----------- */}
      <div
        ref={trendyRef}
        className="container mx-auto flex flex-col items-center my-[100px]"
      >
        <h3 className="text-[20px] text-[#D9B748] font-semibold">TRENDY</h3>
        <h1 className="font-bold text-[50px] mb-[51px] text-center">
          Our Trending Tour Packages
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
          <div className="flex flex-col w-[280px] xl:w-[400px]">
            <img src={switzerlandImg} alt="" />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                25 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px] justify-between">
              <h1 className="font-bold text-[30px] mt-[10px] ">Switzerland</h1>
              <div className="flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">Europe</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">1,000$</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                1,200$
              </p>
            </div>
            <p className="mt-3">
              Experience the best of Switzerland with our curated tour packages,
              featuring stunning alpine landscapes, charming cities, and
              unforgettable cultural experiences.
            </p>
            <button className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold">
              Explore Now
            </button>
          </div>

          <div className="flex flex-col w-[280px] xl:w-[400px]">
            <img src={amazon} alt="" />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                60 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px]  justify-between">
              <h1 className="font-bold text-[30px] mt-[10px]">Amazon</h1>
              <div className="flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">Brazil</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">1,000$</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                1,200$
              </p>
            </div>
            <p className="mt-3">
              Experience the best of Switzerland with our curated tour packages,
              featuring stunning alpine landscapes, charming cities, and
              unforgettable cultural experiences.
            </p>
            <button className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold">
              Explore Now
            </button>
          </div>

          <div className="flex flex-col w-[280px] xl:w-[400px]">
            <img src={giza} alt="" />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                155 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px] justify-between">
              <h1 className="font-bold text-[30px] mt-[10px]">Giza</h1>
              <div className=" flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">Egypt</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">1,000$</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                1,200$
              </p>
            </div>
            <p className="mt-3">
              Explore the wonders of Giza with our tour packages, offering
              visits to the iconic pyramids, the Sphinx, and a deep dive into
              Egypt's rich history and culture.
            </p>
            <button className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold ">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
