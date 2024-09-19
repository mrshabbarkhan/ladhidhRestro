import BackButton from "./BackButton"
import Img  from "../../public/pagenotfound.jfif"

function PageNotFound() {
    return (
        <div className="flex justify-center items-center">
            <img src={Img} alt="" />
            <div className="absolute left-10 top-6 bg-yellow-400 p-1 px-2 rounded-md">
            <BackButton>Go Back</BackButton>

            </div>
        </div>
    )
}

export default PageNotFound
