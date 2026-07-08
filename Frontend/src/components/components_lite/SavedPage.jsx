import React from "react";
import Navbar from "./Navbar";
import SavedJobs from "./SavedJobs";
import { useSelector } from "react-redux";
import useGetSavedJobs from "@/hooks/useGetSavedJobs";

const SavedPage = () => {
  useGetSavedJobs();
  const { savedJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl my-8">
        <h1 className="text-lg my-5 font-bold">Saved Jobs ({savedJobs?.length || 0})</h1>
        <SavedJobs />
      </div>
    </div>
  );
};

export default SavedPage;
