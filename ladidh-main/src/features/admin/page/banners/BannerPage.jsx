import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBanner,
  fetchBanners,
  removeBanner,
} from "../../../redux/adminAuth/adminActionSlice";
import Loader from "../../../../components/Loader";

function BannerPage() {
  const dispatch = useDispatch();

  const { banners, refetchFlag, isLoading } = useSelector((state) => state.adminDashboard);

  useEffect(() => {
    dispatch(fetchBanners());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeBanner(id))
  }


  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const data = new FormData();
      data.append("photo", selectedFile);

      dispatch(addNewBanner(data));
    }
  };


  if (isLoading) {
    return <Loader/>
  }

  if (refetchFlag) {
    dispatch(fetchBanners());
  }


  return (
    <>
      <span className="text-2xl font-medium">Banners</span>
      <input
        type="file"
        accept="image/*"
        placeholder="Add"
        className="hidden"
        id="fileInput"
        onChange={handleChange}
      ></input>
      <label
        htmlFor="fileInput"
        className="bg-blue-500 px-2 py-1 mx-2 rounded-full hover:bg-blue-700 text-white cursor-pointer"
      >
        Add
      </label>

      <div className="flex flex-wrap gap-10 mt-2 ">
        {banners
          .map((banner, idx) => (
            <div key={idx} className="relative ">
              <img className="rounded-md h-40 w-80 " src={banner.Img} alt="" />
              <span className="absolute bottom-2 right-2 flex space-x-2 float-end mt-2">
                <div onClick={()=>handleDelete(banner._id)}  className="bg-white border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer">
                  <i className="fa fa-trash-alt "></i>
                </div>
              </span>
            </div>
          ))
          .reverse()}
      </div>
    </>
  );
}

export default BannerPage;
