import React from "react";
import Navbar from "./Navbar";
import AppliedJob from "./AppliedJob";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJobs";

const AppliedPage = () => {
  useGetAppliedJobs();

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl my-8">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>
        <AppliedJob />
      </div>
    </div>
  );
};

export default AppliedPage;
