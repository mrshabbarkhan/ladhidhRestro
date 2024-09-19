import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function Category({ children, heading, btn }) {
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.adminDashboard);
  
  if (isLoading) {
  return <Loader/>
  }
  
  return (
    <section className="relative">
      {heading && (
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-lg">{heading}</h1>
          {btn && <button onClick={()=>navigate("/category")} className=" hover:underline px-1 rounded-md">View All</button>}
        </div>
      )}
      <div className="categories_img p_text grid grid-cols-3 gap-y-8 sm:px-4 mt-4 ">
        {children}
      </div>
    </section>
  );
}

export default Category;
