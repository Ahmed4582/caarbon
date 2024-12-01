
const DropdownCart = () => {
    const cartItems = [
        { id: 1, name: 'Lorem ipsum dolor sit amet consectetur.', price: 'Price', quantity: 1 },
        { id: 2, name: 'Lorem ipsum dolor sit amet consectetur.', price: 'Price', quantity: 2 },
      ];
    
      const subtotal = 2038.0;
  return (
  <>
   <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-lg absolute z-50 right-20 mt-12 lg:block hidden">
      <h2 className="text-lg font-semibold border-b pb-2">Shopping Cart (02)</h2>
      <div className="mt-4 space-y-2">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <img src="/path/to/placeholder.png" alt="Product" className="w-full h-full" />
              </div>
              <div className="ml-4">
                <p className="text-sm">{item.name}</p>
                <p className="text-sm text-gray-500">{item.quantity} x ${item.price}</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-red-500">
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between">
          <span className="text-sm font-semibold">Sub-Total:</span>
          <span className="text-sm font-semibold text-[#2091F9]">{subtotal} EGP</span>
        </div>
        <button className="mt-4 w-full bg-[#2091F9] text-white py-2 rounded-lg font-semibold ">
          CHECKOUT NOW →
        </button>
        <button className="mt-2 w-full text-[#2091F9] border border-[#2091F9] py-2 rounded-lg font-semibold hover:bg-[#2091F9] hover:text-white transition-all duration-300">
          VIEW CART
        </button>
      </div>
    </div>
  </>
)}

export default DropdownCart