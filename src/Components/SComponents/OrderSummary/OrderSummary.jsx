
const OrderSummary = () => {
  return (
    <div className=" border p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Product List */}
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5.5 1.6 7 4.1-1.3 1.3-3.2 2.1-5 2.1s-3.7-.8-5-2.1c1.5-2.5 4.3-4.1 7-4.1m0-1.7c-2.8 0-5.5-1.6-7-4.1 1.3-1.3 3.2-2.1 5-2.1s3.7.8 5 2.1c-1.5 2.5-4.2 4.1-7 4.1M3 12c2.7 0 5.5 1.6 7 4.1-1.3 1.3-3.2 2.1-5 2.1S2.3 17.3 1 16c1.5-2.5 4.2-4.1 7-4.1m10.9-1.7c1.3 0 2.5-.4 3.4-1.1-2-3.6-5.7-6-9.9-6s-7.9 2.4-9.9 6c.9.7 2 .9 3.4.9s2.5-.4 3.4-1.1c2-3.6 5.7-6 9.9-6s7.9 2.4 9.9 6c-.9.7-2 .9-3.4.9M17 7h2v2h-2m2-4h2v2h-2m-2-2h2v2h-2v-2M8 7h2v2H8V7m2-4h2v2h-2V3z" />
            </svg>
          </div>
          <div className="flex-grow font-normal text-[14px]" >
            <p className=" font-normal text-[14px]">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm text-gray-600">1 x <span className="text-blue-600">$70</span></p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5.5 1.6 7 4.1-1.3 1.3-3.2 2.1-5 2.1s-3.7-.8-5-2.1c1.5-2.5 4.3-4.1 7-4.1m0-1.7c-2.8 0-5.5-1.6-7-4.1 1.3-1.3 3.2-2.1 5-2.1s3.7.8 5 2.1c-1.5 2.5-4.2 4.1-7 4.1M3 12c2.7 0 5.5 1.6 7 4.1-1.3 1.3-3.2 2.1-5 2.1S2.3 17.3 1 16c1.5-2.5 4.2-4.1 7-4.1m10.9-1.7c1.3 0 2.5-.4 3.4-1.1-2-3.6-5.7-6-9.9-6s-7.9 2.4-9.9 6c.9.7 2 .9 3.4.9s2.5-.4 3.4-1.1c2-3.6 5.7-6 9.9-6s7.9 2.4 9.9 6c-.9.7-2 .9-3.4.9M17 7h2v2h-2m2-4h2v2h-2m-2-2h2v2h-2v-2M8 7h2v2H8V7m2-4h2v2h-2V3z" />
            </svg>
          </div>
          <div className="flex-grow">
            <p  className=" font-normal text-[14px]">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm text-gray-600">3 x <span className="text-blue-600">$250</span></p>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-4 border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-[#5F6C72] text-[14px] font-normal">Sub-total</span>
          <span className=" text-[#191C1F] text-[14px] font-semibold">$320</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#5F6C72] text-[14px] font-normal">Shipping</span>
          <span className=" text-[#191C1F] text-[14px] font-semibold">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#5F6C72] text-[14px] font-normal">Discount</span>
          <span className=" text-[#191C1F] text-[14px] font-semibold">$24</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#5F6C72] text-[14px] font-normal">Tax</span>
          <span className=" text-[#191C1F] text-[14px] font-semibold">$61.99</span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between items-center text-lg ">
          <span className=" text-[16px] font-normal">Total</span>
          <span>$357.99 EGP</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="w-full mt-6 bg-[#2091F9] text-white py-2 rounded-lg font-semibold ">
        PLACE ORDER →
      </button>
    </div>
  );
};

export default OrderSummary;
