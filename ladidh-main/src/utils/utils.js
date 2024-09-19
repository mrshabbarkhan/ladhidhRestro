//////////////  Sales_details      ////////////////////
import ProductOne from "../assets/images/product/1.jpg";
import ProductTwo from "../assets/images/product/2.jpg";
import ProductThree from "../assets/images/product/3.jpg";
/////////////   Tranding Products   //////////////////
import ProductFour from "../assets/images/product/4.jpg";
import ProductFive from "../assets/images/product/5.jpg";
import ProductSix from "../assets/images/product/6.jpg";
/////////////      Categories       ///////////////////
import categoryOne from "../assets/images/categore/1.png";
import categoryTwo from "../assets/images/categore/2.png";
import categoryThree from "../assets/images/categore/3.png";
import categoryFour from "../assets/images/categore/4.png";
import categoryFive from "../assets/images/categore/5.png";
import categorySix from "../assets/images/categore/6.png";
/////////////////// banners     //////////////////////
import bannerOne from "../assets/images/banner/banner1.jpg";
import bannerTwo from "../assets/images/banner/banner2.jpg";
import bannerThree from "../assets/images/banner/banner3.jpg";

export const Sale_Details = [
  {
    id: 1,
    img: ProductOne,
    pack: "Combo Pack",
    tittle: "Fish + Fish Skinless + Cleaned Prawns",
    code: "636G8P",
    price: 830,
    oldPrice: 1000,
    discount: "40%",
  },
  {
    id: 2,
    img: ProductTwo,
    pack: "Combo Pack",
    tittle: "Meat + Chicken Skinless + Fish",
    code: "636G8P",
    price: 500,
    oldPrice: 1000,
    discount: "50%",
  },
  {
    id: 3,
    img: ProductThree,
    pack: "Combo Pack",
    tittle: "Goat + Chicken Skinless + Cleaned Prawns",
    code: "636G8P",
    price: 930,
    oldPrice: 1100,
    discount: "60%",
  },
];
//////////////////////////////////////////////////////////////

export const Tranding_Products = [
  {
    id: 4,
    img: ProductFour,
    pack: "1Pack",
    tittle: "Goat Meat",
    price: 930,
    oldPrice: 1100,
    discount: "60%",
    code: "636G8P",
  },
  {
    id: 5,
    code: "636G8P",
    img: ProductFive,
    pack: "1Pack",
    tittle: "Cleaned Prawns",
    price: 430,
    oldPrice: 800,
    discount: "60%",
  },
  {
    id: 6,
    img: ProductSix,
    pack: "1Pack",
    code: "636G8P",
    tittle: "Cleaned Skinless",
    price: 600,
    oldPrice: 1000,
    discount: "60%",
  },
];

export const Categories_Items = [
  {
    img: categoryOne,
    tittle: "Fish & Seafood",
  },
  {
    img: categoryTwo,
    tittle: " Mutton - Goat",
  },
  {
    img: categoryThree,
    tittle: "Ready to Cook",
  },
  {
    img: categoryFive,
    tittle: "Steaks & Fillets",
  },
  {
    img: categorySix,
    tittle: "Poultry",
  },
  {
    img: categoryFour,
    tittle: "Combo Packs",
  },
];

export const NavItems = [
  {
    path: "/",
    class: "house",
    tittle: "Home",
  },
  {
    path: "/category",
    class: "box",
    tittle: "Category",
  },
  {
    path: "/favorites",
    class: "heart",
    tittle: "Favorites",
  },
  {
    path: "/cart",
    class: "bag-shopping",
    tittle: "Cart",
  },
  {
    path: "/profile",
    class: "user",
    tittle: "Account",
  },
];

export const OfferBanners = [bannerOne, bannerTwo, bannerThree];

export async function useLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const response = await fetch(
      // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66d5874d2c283371371612jlg24937f`
    );
    const data = await response.json();

    return data.display_name;
  } catch (error) {
    console.error("Error fetching location:", error);
    return "Could not retrieve location";
  }
}



export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
}


export async function searchByLocation(searchQry) {
  try {
    const response = await fetch(
      `https://geocode.maps.co/search?q=${searchQry}&api_key=66d5874d2c283371371612jlg24937f`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching location:", error);
  }
}

export const debouncedSearchByLocation = debounce(searchByLocation, 300);
