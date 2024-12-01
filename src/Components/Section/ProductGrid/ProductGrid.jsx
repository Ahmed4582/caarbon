import sections from "../../../data/sections";
const ProductGrid = () => {
  return (
    <div className=" px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border border-blue-200 rounded-lg p-4"
          >
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="relative">
                    <img
                      src={product?.image}
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">i</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">
                      {product.description}
                    </p>
                    <p className="text-blue-500 font-medium">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
