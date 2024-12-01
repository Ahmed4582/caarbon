import CardNews from "../../SComponents/CardNews/CardNews";

const LatestNews = () => {
  const cardData = [
    {
      img: "path/to/image1.jpg", // Replace with actual image path
      username: "hissine",
      date: "12-3-2024",
      views: 434,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor eu convallis eget habitant. Non sit pulvinar tempor tempor. Viverra neque eget amet ipsum sed fames eget nisl ut. Sociis montes aliquam proin.",
      buttonText: "Read More →",
    },
    {
      img: "path/to/image2.jpg", // Replace with actual image path
      username: "mohamed",
      date: "15-4-2024",
      views: 512,
      title: "Consectetur adipiscing elit.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      buttonText: "Read More →",
    },
    {
      img: "path/to/image3.jpg", // Replace with actual image path
      username: "salma",
      date: "20-5-2024",
      views: 789,
      title: "Sed do eiusmod tempor incididunt.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      buttonText: "Read More →",
    },
  ];
  return (
    <div className="bg-[#F2F4F5] py-8 my-4">
      <div className=" mt-[15px]">
        <h1 className=" font-bold text-[32px]  text-center">Latest News</h1>
      </div>
      <div className="grid xl:grid-cols-3   xl:px-[15px] px-[10px] text-center   md:grid-cols-2 grid-cols-1 ">
        {cardData.map((e, index) => (
          <>
            <CardNews key={index} e={e} />
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
