import arrow from "../../assets/Svg/Arrow.svg";
import dashbord from "../../assets/Svg/Dashbord.svg"

const PaymentSuccessful = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className=" rounded-lg p-10  text-center">
      {/* Success Icon */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 border-2 border-[#2DB224]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Success Message */}
      <h2 className="text-xl font-bold mb-2">Your order is successfully placed</h2>
      <p className="text-gray-600 mb-8 md:w-[424px] w-[320px]">
        Thank you for your purchase! Your order has been processed successfully.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4  w-full">
        <button className="px-6 py-2 md:text-[14px] text-[8px]  w-[px] h-[48px] border flex items-center gap-3 border-[#2091F9] text-[#2091F9]  font-bold rounded hover:bg-[#2091F9] hover:text-white transition-all duration-300">
            <img src={dashbord} alt="dashbord"/>
          Go to Dashboard
        </button>
        <button className="px-6 py-2  md:text-[14px] text-[8px] bg-[#2091F9] flex items-center gap-3 text-white rounded font-bold ">
          View Order
          <img src={arrow} alt="arrow"/>
        </button>
      </div>
    </div>
  </div>
  )
}

export default PaymentSuccessful