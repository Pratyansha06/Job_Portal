import { SavedJob } from "../models/savedJob.model.js";

export const toggleSavedJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.jobId;

    if (!jobId) {
      return res.status(400).json({ message: "Job id is required", success: false });
    }

    const existing = await SavedJob.findOne({ user: userId, job: jobId });
    if (existing) {
      await SavedJob.deleteOne({ _id: existing._id });
      return res.status(200).json({
        message: "Job removed from saved list",
        success: true,
        isSaved: false,
      });
    }

    await SavedJob.create({ user: userId, job: jobId });
    return res.status(201).json({
      message: "Job saved successfully",
      success: true,
      isSaved: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const getSavedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const savedJobs = await SavedJob.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: { path: "company" },
      });

    return res.status(200).json({ savedJobs, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const getSavedJobIds = async (req, res) => {
  try {
    const userId = req.id;
    const savedJobs = await SavedJob.find({ user: userId }).select("job");
    const savedJobIds = savedJobs.map((item) => String(item.job));

    return res.status(200).json({ savedJobIds, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
