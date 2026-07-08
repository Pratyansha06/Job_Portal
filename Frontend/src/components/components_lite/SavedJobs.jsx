import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SavedJobs = () => {
  const navigate = useNavigate();
  const { savedJobs } = useSelector((store) => store.job);

  if (!savedJobs?.length) {
    return <p className="text-sm text-gray-600">No saved jobs yet.</p>;
  }

  return (
    <div className="space-y-3">
      {savedJobs.map((saved) => (
        <div
          key={saved._id}
          className="border border-gray-200 rounded-md p-4 flex items-center justify-between"
        >
          <div>
            <h2 className="font-semibold">{saved?.job?.title}</h2>
            <p className="text-sm text-gray-600">
              {saved?.job?.company?.name} • {saved?.job?.location}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => navigate(`/description/${saved?.job?._id}`)}
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;
