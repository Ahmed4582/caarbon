import twitter from "../assets/Svg/Twitter.svg";
import FaceBook from "../assets/Svg/FaceBook.svg";
import YouTube from "../assets/Svg/YouTube.svg";
import Instagram from "../assets/Svg/Instagram.svg";
import useLangBtn from "./useLangBtn";

const useTopHeader = () => {
  const { langHandler } = useLangBtn();

  const Icons = [
    { icon: twitter, to: "/", alt: "twitter" },
    { icon: FaceBook, to: "/", alt: "FaceBook" },
    { icon: YouTube, to: "/", alt: "YouTube" },
    { icon: Instagram, to: "/", alt: "Instagram" },
  ];

  const currencies = [
    { code: "TRY", label: "Turkey Lira" },
    { code: "USD", label: "US Dollar" },
  ];
  const handleLanguageChange = (option) => {
    langHandler(option.code === "Eng" ? "Eng" : "Ar");
  };

  return {
    Icons,
    currencies,
    handleLanguageChange,
  };
};

export default useTopHeader;
