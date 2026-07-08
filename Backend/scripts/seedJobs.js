import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";

dotenv.config();

const locations = [
  "Delhi",
  "Mumbai",
  "Kolhapur",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Remote",
];

const technologies = [
  "MERN",
  "React",
  "Data Scientist",
  "Fullstack",
  "Node",
  "Python",
  "Java",
  "Frontend",
  "Backend",
  "Mobile",
  "Desktop",
];

const experienceBuckets = [
  { label: "0-3 years", years: 1 },
  { label: "3-5 years", years: 4 },
  { label: "5-7 years", years: 6 },
  { label: "7+ years", years: 8 },
];

const salaryBuckets = [
  { label: "0-50k", value: "45000" },
  { label: "50k-100k", value: "80000" },
  { label: "100k-200k", value: "150000" },
  { label: "200k+", value: "250000" },
];

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

const companySeeds = [
  {
    name: "Google",
    description: "Global technology company focused on web and AI products.",
    website: "https://about.google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    description: "Cloud, enterprise software and AI platform provider.",
    website: "https://www.microsoft.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    description: "E-commerce and cloud leader building large-scale systems.",
    website: "https://www.amazon.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    description: "Social and communication platforms with AI and VR products.",
    website: "https://about.meta.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "Adobe",
    description: "Creative and digital experience software company.",
    website: "https://www.adobe.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
  },
  {
    name: "IBM",
    description: "Enterprise technology and consulting across cloud and AI.",
    website: "https://www.ibm.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Infosys",
    description: "IT services and digital transformation engineering partner.",
    website: "https://www.infosys.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Tata Consultancy Services",
    description: "Global consulting and software services organization.",
    website: "https://www.tcs.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    name: "Wipro",
    description: "Technology services company across engineering and cloud.",
    website: "https://www.wipro.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "Accenture",
    description: "Consulting and technology implementation at enterprise scale.",
    website: "https://www.accenture.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
];

function buildJob(index, companyId, recruiterId) {
  const location = locations[index % locations.length];
  const tech = technologies[index % technologies.length];
  const experience = experienceBuckets[index % experienceBuckets.length];
  const salary = salaryBuckets[index % salaryBuckets.length];
  const jobType = jobTypes[index % jobTypes.length];

  const roleMap = {
    MERN: "MERN Stack Developer",
    React: "React Developer",
    "Data Scientist": "Data Scientist",
    Fullstack: "Full Stack Engineer",
    Node: "Node.js Backend Developer",
    Python: "Python Developer",
    Java: "Java Developer",
    Frontend: "Frontend Engineer",
    Backend: "Backend Engineer",
    Mobile: "Mobile App Developer",
    Desktop: "Desktop Application Developer",
  };

  const title = `${roleMap[tech]} - ${location}`;

  return {
    title,
    description: `We are hiring a ${roleMap[tech]} for our ${location} team. This role focuses on delivering high quality features, collaborating with cross-functional teams, and improving product performance.`,
    requirements: [
      `${tech} development experience`,
      `Strong problem-solving and debugging skills`,
      `Good communication and teamwork`,
      `Understanding of clean architecture and testing`,
    ],
    salary: salary.value,
    experienceLevel: experience.years,
    location,
    jobType,
    position: (index % 4) + 1,
    company: companyId,
    created_by: recruiterId,
  };
}

async function seedJobs() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in Backend/.env");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB for seeding.");

  const seedUsers = [
    {
      fullname: "Pratyansha Baghel",
      email: "pratyanshabaghel@gmail.com",
      phoneNumber: "6371021500",
      password: "admin123",
      role: "Recruiter",
      bio: "Primary recruiter/admin account for seeded jobs.",
    },
    {
      fullname: "Khushi Baghel",
      email: "khushibaghel@gmail.com",
      phoneNumber: "9000000002",
      password: "123456",
      role: "Student",
      bio: "Seeded student user account.",
    },
    {
      fullname: "Suhani NGP",
      email: "suhaningp@gmail.com",
      phoneNumber: "9000000003",
      password: "678910",
      role: "Student",
      bio: "Seeded student user account.",
    },
    {
      fullname: "Rohan NGP",
      email: "rohanngp@gmail.com",
      phoneNumber: "9000000004",
      password: "112233",
      role: "Student",
      bio: "Seeded student user account.",
    },
  ];

  await User.deleteOne({ email: "seed.recruiter@jobportal.dev" });

  const createdUsers = [];
  for (const seedUser of seedUsers) {
    const hashedPassword = await bcrypt.hash(seedUser.password, 10);
    const user = await User.findOneAndUpdate(
      { email: seedUser.email },
      {
        fullname: seedUser.fullname,
        email: seedUser.email,
        phoneNumber: seedUser.phoneNumber,
        password: hashedPassword,
        role: seedUser.role,
        profile: { bio: seedUser.bio },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    createdUsers.push(user);
  }

  const recruiter = createdUsers.find(
    (user) => user.email === "pratyanshabaghel@gmail.com"
  );

  // Reset portal data before fresh seeding.
  await Application.deleteMany({});
  await Job.deleteMany({});
  await Company.deleteMany({});

  const companyDocs = [];
  for (let i = 0; i < companySeeds.length; i += 1) {
    const seed = companySeeds[i];
    let company = await Company.findOne({ name: seed.name });
    if (!company) {
      company = await Company.create({
        ...seed,
        location: locations[i % locations.length],
        userId: recruiter._id,
      });
    }
    companyDocs.push(company);
  }

  const jobsToInsert = Array.from({ length: 100 }, (_, index) =>
    buildJob(index, companyDocs[index % companyDocs.length]._id, recruiter._id)
  );

  await Job.insertMany(jobsToInsert);

  console.log(`Seeded ${jobsToInsert.length} jobs successfully with company logos.`);
  console.log("Recruiter login email: pratyanshabaghel@gmail.com");
  console.log("Recruiter login password: admin123");
  console.log("Additional users: khushibaghel@gmail.com, suhaningp@gmail.com, rohanngp@gmail.com");
}

seedJobs()
  .catch((error) => {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
