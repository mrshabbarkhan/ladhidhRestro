import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../redux/adminAuth/adminActionSlice";
import SearchBar from "../../components/SearchBar";



const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+123456789",
    address: "123 Main St, City, Country",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+987654321",
    address: "456 Elm St, City, Country",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+564738291",
    address: "789 Oak St, City, Country",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+859302145",
    address: "321 Pine St, City, Country",
  },
];

export default function UsersPage() {
  
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.adminDashboard);
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

   const filteredProducts = users?.filter((user) =>
     user.number?.toLowerCase().includes(debouncedTerm.toLowerCase())
   );

  useEffect(() =>{
    dispatch(allUsers())
  },[])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap justify-center sm:justify-between mb-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Customer List</h1>
        <SearchBar placeholder={"serach by number...."} />
      </div>
      <div className="flex flex-wrap gap-6 ">
        {users &&
          filteredProducts?.map((customer, idx) => (
            <div
              key={idx}
              className="bg-white w-80 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {customer.name}
              </h2>
              <p className="text-gray-600 ">
                <span className="font-medium">Email:</span> {customer.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {customer.number}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span> {customer.Addres}
              </p>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-600 transition-all">
                View Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
