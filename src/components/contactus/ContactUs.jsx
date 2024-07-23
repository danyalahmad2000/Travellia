import React from "react";
import contact from "../../assets/images/contact.jpg";

function ContactUs() {
  return (
    <>
      <div className="container mx-auto my-[100px]">
        <div className="mx-5 text-center flex flex-col">
          <h1 className="text-[20px] text-[#D9B748]">CONTACT</h1>
          <h1 className="font-bold text-[50px] mb-[60px]">
            Plan Your Trip with Us
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-0">
            <div className="flex flex-col gap-10 mx-5 my-2 order-2 lg:order-1">
              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-[#E5E7EB]"
                    placeholder="Bonnie"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-[#E5E7EB]"
                    placeholder="Green"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start">
                    Your Email
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-[#E5E7EB]"
                    placeholder="name@travellia.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-[#E5E7EB]"
                    placeholder="+44 123 456 789"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-start">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    className="w-full md:w-[650px] h-[200px] rounded-xl bg-[#F9FAFB] border-[#E5E7EB] resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-10 justify-center lg:justify-normal">
                <button className="w-[180px] h-[56px] text-center text-[#D9B748] rounded-xl mt-[31px] bg-white font-semibold border border-[#D9B748] hover:bg-[#D9B748] hover:text-white">
                  Request a Callback
                </button>
                <button className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold hover:bg-[#b4993d]">
                  Send Message
                </button>
              </div>
            </div>
            <img
              src={contact}
              alt=""
              className="w-full h-auto lg:size-[400px] xl:size-[600px] object-cover object-center order-1 lg:order-2 shadow-xl shadow-[#d9b748a9] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
