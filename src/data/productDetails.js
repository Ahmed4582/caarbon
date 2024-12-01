import img from "../assets/imges/db377c4c79623392434e52dff35e335b.png";
import testimg from "../assets/Svg/testImage.svg";

import Regular from "../assets/Svg/Regular.svg";
import Veicals from "../assets/Svg/Veicals.svg";
import HandShake from "../assets/Svg/HandShake.svg";
import HeadPhone from "../assets/Svg/HeadPhone.svg";
import CreditCart from "../assets/Svg/CreditCart.svg";

const product = {
  title: "Wireless Noise Cancelling Headphones",
  rating: 4.7,
  ratingCount: 21671,
  description:
    "Lorem ipsum dolor sit amet consectetur. Viverra arcu sit urna eget enim praesent et molestie facilisis. Aliquet magna feugiat imperdiet at vestibulum.",
  availability: "In Stock",
  brand: "Device Name",
  category: "Electronics Devices",
  price: 99.99,
  oldPrice: 124.99,
  discount: 21,
  features: [
    {
      icon: Regular,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt elementum amet justo sed sed praesent erat facilisis.",
    },
    {
      icon: Veicals,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt elementum amet justo sed sed praesent erat facilisis.",
    },
    {
      icon: HandShake,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt elementum amet justo sed sed praesent erat facilisis.",
    },
    {
      icon: HeadPhone,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt elementum amet justo sed sed praesent erat facilisis.",
    },
    {
      icon: CreditCart,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt elementum amet justo sed sed praesent erat facilisis.",
    },
  ],
  images: [
    { src: img, title: "Title 1", label: "Label 1" },
    { src: testimg, title: "Title 2", label: "Label 2" },
    { src: img, title: "Title 3", label: "Label 3" },
    { src: testimg, title: "Title 4", label: "Label 4" },
    { src: img, title: "Title 5", label: "Label 5" },
    { src: testimg, title: "Title 6", label: "Label 6" },
    { src: img, title: "Title 7", label: "Label 7" },
    { src: testimg, title: "Title 8", label: "Label 8" },
    { src: img, title: "Title 9", label: "Label 9" },
  ],
};

export default product;
