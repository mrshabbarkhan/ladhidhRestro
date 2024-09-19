import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory, removeCategory } from "../../../redux/adminAuth/adminActionSlice";
import { useEffect, useState } from "react";
import AddCategoryPopup from "../../components/AddCategoryPopup";
import EditCategory from "./EditCategory";

function CategoryCardForAdmin({ id, img, title }) {
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useDispatch()
  const { refetchFlag } = useSelector((state) => state.adminDashboard);

  useEffect(() => {
    if (refetchFlag) {
      dispatch(fetchAllCategory())
    }
  }, [refetchFlag]);

  const toggleShowPopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <section className="max-w-[12rem] min-w-[12rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg relative">
      {showPopup && <div  className="mt-10 sm:mt-0 flex w-fit items-center gap-3 absolute right-5 sm:right-14 top-6">
        <EditCategory id={id} title={title} showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>}
      <div className="object-fit">
        <img src={img} alt={img} className="" />
      </div>
      <div className="px-2 mt-1 flex justify-between">
        <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium ">
          {title}
        </h1>

        <div className="flex justify-between items-center mt-2 absolute top-6 right-2">
          <span className="flex space-x-2">
            <div onClick={toggleShowPopup} className="border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
            </div>
            <div
              onClick={() => {dispatch(removeCategory(id))}}
              className="border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
            >
              <i className="fa fa-trash-alt cursor-pointer"></i>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardForAdmin;
