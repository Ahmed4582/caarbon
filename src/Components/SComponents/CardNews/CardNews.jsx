import img from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import user from "../../../assets/Svg/userblue.svg";
import clander from "../../../assets/Svg/calnder.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardNews = ({ e }) => {
  const descriptionIcon = [
    { icon: user, text: e?.username },
    { icon: clander, text: "13 - 4 - 2024" },
    { icon: user, text: e?.views },
  ];

  return (
    <div className=" bg-[white] md:w-[424px] w-full mx-auto my-4 rounded-[4px] h-[580px] border p-[32px]">
      <div className="flex items-center w-full   bg-gray-200 rounded-lg">
        <img src={img} className="w-[360px] h-[248px] object-cover" alt="img" />
      </div>
      <div className=" w-[259px] my-4  flex justify-between">
        {descriptionIcon.map((item, index) => (
          <div
            key={index}
            className=" flex gap-1 text-[14px] font-normal text-[#475156] items-center"
          >
            <img src={item.icon} alt="icon" />
            {item.text}
          </div>
        ))}
      </div>
      <p className="w-[360px] h-[24px] font-[500] text-[18px] text-[#191C1F] text-start">
        {e?.title}
      </p>
      <div className=" text-[#77878F] my-4 leading-[24px] w-[360px] h-[120px] font-normal text-start">
        <p className=" leading-6"> {e?.description}</p>
      </div>
      <Link
        to={"/"}
        className=" py-4 border my-4 rounded-[4px] border-[#2091F9] px-[24px] text-[#2091F9] hover:bg-[#2091F9] hover:text-white transition duration-300 ease-in-out"
      >
        Read More →
      </Link>
    </div>
  );
};

export default CardNews;

CardNews.propTypes = {
  e: PropTypes.shape({
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
