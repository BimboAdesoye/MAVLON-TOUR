import mailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import SubmitBtn from "../components/Buttons/SubmitBtn";

const Contact = () => {
  return (
    <section className="h-auto w-full bg-darkgreen contact-section">
      <div className="container py-[74px] lg:pt[73px] lg:pb-[103px]">
        <h6 className="font-bold text-whiteAccent rotate-[1.28deg] max-w-[243px] mb-[16px] lg:mb-[24px]">
          FOR ALL BOOKINGS & INQUIRIES
        </h6>
        <div className="flex flex-col lg:flex-row gap-[77.56px] lg:gap-[106px]">
          <div>
            <h2 className="font-medium text-lightgreen text-3.5xl lg:text-5.5xl leading-[31.68px] lg:leading-[47.52px] mb-[32px] lg:mb-[56.56px] lg:max-w-[434px]">
              Use the Contact information below
            </h2>
            <div className="flex flex-col gap-[32px] w-full lg:w-[520px] lg:border-r-2 border-[#FFFFFF1A]">
              <span className="flex gap-[24px] items-start lg:max-w-[389px]">
                <img
                  className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]"
                  src={mailIcon}
                  alt="mail-icon"
                />

                <span className="pb-[24px] border-b-2 border-[#FFFFFF1A]">
                  <h5 className="text-white font-bold lg:text-2xl text-xl">
                    Email
                  </h5>
                  <p className="text-whiteAccent font-medium text-lg">
                    Our friendly team is here to help.
                  </p>
                  <p className="text-mediumgreen font-bold lg:text-2xl text-xl">
                    mavlonconsult@gmail.com
                  </p>
                </span>
              </span>
              <span className="flex gap-[24px] items-start lg:max-w-[389px]">
                <img
                  className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]"
                  src={phoneIcon}
                  alt="mail-icon"
                />

                <span className="pb-[24px] border-b-2 border-[#FFFFFF1A]">
                  <h5 className="text-white font-bold lg:text-2xl text-xl">
                    Phone
                  </h5>
                  <p className="text-whiteAccent font-medium text-lg">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p className="text-mediumgreen font-bold lg:text-2xl text-xl">
                    08103051178, 08139686452
                  </p>
                </span>
              </span>
              <span className="flex gap-[24px] items-start lg:max-w-[389px]">
                <img
                  className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]"
                  src={locationIcon}
                  alt="mail-icon"
                />

                <span className="pb-[24px] border-b-2 border-[#FFFFFF1A]">
                  <h5 className="text-white font-bold lg:text-2xl text-xl">
                    Office
                  </h5>
                  <p className="text-whiteAccent font-medium text-lg">
                    Come say hello at our office HQ.
                  </p>
                  <p className="text-mediumgreen font-bold lg:text-2xl text-xl">
                    258 Muritala Muhammed Way, Alagomeji, Yaba. Lagos
                  </p>
                </span>
              </span>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-medium text-lightgreen text-3.5xl lg:text-5.5xl leading-[31.68px] lg:leading-[47.52px] mb-[32px] lg:mb-[56.56px] lg:max-w-[434px]">
              Or Fill & Submit a form to book now
            </h2>

            <form action="" className=" lg:max-w-[610.5px]">
              <div className="flex flex-col gap-[24px] lg:max-w-[495px]">
                <span className="flex flex-col text-lg lg:text-1xl font-normal">
                  <input
                    className="bg-inherit border-0 border-b-2 border-[#FFFFFF1A]"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </span>
                <span className="flex flex-col  text-lg lg:text-1xl font-normal">
                  <input
                    className="bg-inherit border-0 border-b-2 border-[#FFFFFF1A]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                </span>
                <span className="flex flex-col text-[#FFFFFFDE] mb-[48px] focus:outline-none text-lg lg:text-1xl font-normal">
                  <textarea
                    className="bg-inherit border-0 border-b-2 border-[#FFFFFF1A]"
                    name="message"
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </span>
              </div>
              <SubmitBtn />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
