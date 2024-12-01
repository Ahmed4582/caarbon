import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllWishlist } from "../../Store/WhisList/actwishlist/actGetAllWishlist";
import ReusableCard from "../../Components/DComponents/ReusableCard/ReusableCard";
const Wish = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlistSlice);
  useEffect(() => {
    dispatch(actGetAllWishlist());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-4">
          <ReusableCard products={wishlist} status />
        </div>
      </div>
    </div>
  );
};

export default Wish;
