import { useState } from "react";
import logo from "../assets/logoEn.svg";
import logoArabic from '../assets/logoAr.svg';
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [trackingID, setTrackingID] = useState("");
  const [t, i18n] = useTranslation();

  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    if (trackingID) {
      navigate(`/tracker/${trackingID}`);
    }
  };

  return (
    <div className="flex border-b-2">
      <nav className="flex lg:justify-between items-center mt-2 p-4 w-[90%] m-auto  sm:justify-end sm:gap-5">
        <div className="">
          <Link to="/">
          {i18n.language == 'en' && (
            <img src={logo} alt="logo" className="w-[130px] h-[50px]" />
          )}
          {i18n.language == 'ar' && (
            <img src={logoArabic} alt="logo" className="w-[130px] h-[50px]" />
          )}
            </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden flex">
          <button
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className="text-3xl focus:outline-none hover:text-[--color-red]"
          >
            ☰
          </button>
        </div>

        {/* Center Nav items */}
        <div>
          <ul className="lg:flex gap-10 text-xl sm:hidden">
            <li className="nav-item">
              <Link to="/">{t("Home")}</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing">{t("Pricing")}</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us">{t("Contact Us")}</Link>
            </li>
          </ul>
        </div>
        {/* Right Nav items */}
        <div className="sm:hidden lg:flex">
          <ul className="flex text-xl gap-6 ">
            <li
              className="nav-item cursor-default"
              onMouseLeave={() => setIsOpened(false)}
              onMouseEnter={() => setIsOpened(true)}
            >
              <a>{t("Track Your Shipment")}</a>
              {/* Drop Down Menu */}
              <ul
                className={`absolute z-10 py-4  w-50 bg-white rounded-lg shadow-md  ${
                  isOpened ? "block" : "hidden"
                }`}
              >
                <li className="flex px-4 py-1">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder={t("Enter the Shipment ID")}
                        className="border p-2 w-full border-gray-400 rounded-l-lg py-1"
                        value={trackingID}
                        onChange={(e) => setTrackingID(e.target.value)}
                      />
                      <button
                        className="bg-[--color-red] text-white w-fit h-full px-3 py-1 rounded-r-xl "
                        onClick={clickHandler}
                      >
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            {/*  */}

            <li className="nav-item relative">
              <a href="/sign-in">{t("Sign In")}</a>
              <div className="w-[1.5px] h-10 rounded-full bg-[#aaa] left-[-12px] top-[-5px] opacity-30 absolute"></div>
            </li>
            {i18n.language == 'en' && (
              <li className="text-[--color-red] font-bold cursor-pointer" onClick={() => {
                i18n.changeLanguage('ar');
              }}>عربي</li>
            )}
            {i18n.language == 'ar' && (
              <li className="text-[--color-red] font-bold cursor-pointer" onClick={() => {
                i18n.changeLanguage('en');
              }}>ENG</li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
