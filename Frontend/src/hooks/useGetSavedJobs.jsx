import { setSavedJobIds, setSavedJobs } from "@/redux/jobSlice";
import { SAVED_JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetSavedJobs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      if (!user?._id) {
        dispatch(setSavedJobs([]));
        dispatch(setSavedJobIds([]));
        return;
      }

      try {
        const [savedRes, idsRes] = await Promise.all([
          axios.get(`${SAVED_JOB_API_ENDPOINT}/get`, { withCredentials: true }),
          axios.get(`${SAVED_JOB_API_ENDPOINT}/ids`, { withCredentials: true }),
        ]);

        if (savedRes.data?.success) {
          dispatch(setSavedJobs(savedRes.data.savedJobs || []));
        }
        if (idsRes.data?.success) {
          dispatch(setSavedJobIds(idsRes.data.savedJobIds || []));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavedJobs();
  }, [dispatch, user?._id]);
};

export default useGetSavedJobs;
