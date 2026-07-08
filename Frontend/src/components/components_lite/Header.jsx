import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
  //   <div>
  //     <div className="text-center">
  //       <div className="flex flex-col gap-5 my-10">
  //         <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium">
  //           <span className="text-[#614232]">
  //             {" "}
  //             <PiBuildingOfficeBold />
  //           </span>{" "}
  //           No.1 Job Hunt Website
  //         </span>

  //         <h2 className="text-5xl font-bold">
  //           Search Apply & <br />
  //           Get Your <span className="text-[#6A38C2]">Dream Job</span>
  //         </h2>
  //         <p>
  //           Start your hunt for the best, life-changing career opportunities
  //           from here in your <br />
  //           selected areas conveniently and get hired quickly.
  //         </p>
  //         <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full  items-center gap-4 mx-auto ">
  //           <input
  //             type="text"
  //             onChange={(e) => setQuery(e.target.value)}
  //             placeholder="Find Your Dream Job"
  //             className="outline-none border-none w-full"
  //           />
  //           <Button onClick={searchjobHandler} className=" rounded-r-full">
  //             <Search className="h-5 w-5" />
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  

    <div>
      <div className="text-center bg-gradient-to-r from-[#6A38C2] to-[#00A8E8] py-10">
        <div className="flex flex-col gap-5 my-10 text-white">
          <h2 className="text-5xl font-bold">
            Discover Your Next Career Opportunity
          </h2>
          <p className="text-lg">
            Explore exciting job openings that match your skills and ambitions.
          </p>
          <p className="mt-4 text-sm">
            Find your ideal role and connect with top employers today. Start your journey towards a fulfilling career.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto mt-6 bg-white">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none border-none w-full p-2 text-black"
            />
            <Button onClick={searchjobHandler} className="rounded-r-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div>        </div>
      {/* <div className="flex justify-center mt-6">
        <span className="px-4 py-2 text-gray-700 font-medium">Categories</span>
      </div> */}
    </div>
  );
  
};

export default Header;
