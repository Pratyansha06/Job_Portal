import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getSavedJobIds,
  getSavedJobs,
  toggleSavedJob,
} from "../controllers/savedJob.controller.js";

const router = express.Router();

router.route("/toggle/:jobId").post(authenticateToken, toggleSavedJob);
router.route("/get").get(authenticateToken, getSavedJobs);
router.route("/ids").get(authenticateToken, getSavedJobIds);

export default router;
