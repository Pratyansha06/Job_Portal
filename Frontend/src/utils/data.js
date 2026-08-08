const BASE = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const USER_API_ENDPOINT = `${BASE}/api/user`;
export const JOB_API_ENDPOINT = `${BASE}/api/job`;
export const APPLICATION_API_ENDPOINT = `${BASE}/api/application`;
export const COMPANY_API_ENDPOINT = `${BASE}/api/company`;
export const SAVED_JOB_API_ENDPOINT = `${BASE}/api/saved-job`;