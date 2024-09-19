import { useState } from "react";
import { addCategories } from "../../redux/adminAuth/adminActionSlice";
import { useDispatch } from "react-redux";

function AddCategoryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState("");

  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleImages = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.size < 5000000 &&
      ["image/jpeg", "image/png"].includes(file.type)
    ) {
      setImage(file);
    } else {
      alert("Please upload a valid image file smaller than 5MB.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", image);
    data.append("cat_id", crypto.randomUUID());
    data.append("name", categoryTitle);

    try {
      await dispatch(addCategories(data));
    } catch (error) {
      console.error("Failed to add category:", error);
    }

    setIsOpen(!isOpen);
    setCategoryTitle("") 
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="px-4 py-1.5  bg-blue-500 font-medium text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add
      </button>

      {isOpen && (
        <div>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 " />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white relative rounded-lg p-6 w-full max-w-xl shadow-lg max-h-80 overflow-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Add New Category
              </h2>
              <div onClick={togglePopup} className="absolute top-2 right-5">
                <i className="fa-solid fa-xmark"></i>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Category Name
                  </label>
                  <input
                    id="title"
                    value={categoryTitle}
                    onChange={(e) => setCategoryTitle(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="img"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    accept="image/*"
                    onChange={handleImages}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCategoryPopup;
