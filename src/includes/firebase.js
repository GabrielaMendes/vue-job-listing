import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { useFirebaseStorage } from "vuefire";

const firebaseConfig = {
  apiKey: "AIzaSyAx7ITZ7T2YUsE-oR3gkZIZUo_2I_mbXu8",
  authDomain: "job-listings-5d0c0.firebaseapp.com",
  projectId: "job-listings-5d0c0",
  storageBucket: "job-listings-5d0c0.appspot.com",
  messagingSenderId: "434576991140",
  appId: "1:434576991140:web:f547cd5b86039e109e9731",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const jobsRef = collection(db, "jobs");

const storage = useFirebaseStorage();

export { firebaseApp, db, jobsRef, storage };

// SEED

// await addDoc(jobsRef, {
//   company: "Photosnap",
//   logo: "photosnap.svg",
//   new: true,
//   featured: true,
//   position: "Senior Frontend Developer",
//   role: "Frontend",
//   level: "Senior",
//   postedAt: "1d ago",
//   contract: "Full Time",
//   location: "USA Only",
//   languages: ["HTML", "CSS", "JavaScript"],
//   tools: [],
// });
// await addDoc(jobsRef, {
//   company: "Manage",
//   logo: "manage.svg",
//   new: true,
//   featured: true,
//   position: "Fullstack Developer",
//   role: "Fullstack",
//   level: "Midweight",
//   postedAt: "1d ago",
//   contract: "Part Time",
//   location: "Remote",
//   languages: ["Python"],
//   tools: ["React"],
// });
// await addDoc(jobsRef, {
//   company: "Account",
//   logo: "account.svg",
//   new: true,
//   featured: false,
//   position: "Junior Frontend Developer",
//   role: "Frontend",
//   level: "Junior",
//   postedAt: "2d ago",
//   contract: "Part Time",
//   location: "USA Only",
//   languages: ["JavaScript"],
//   tools: ["React", "Sass"],
// });
// await addDoc(jobsRef, {
//   company: "MyHome",
//   logo: "myhome.svg",
//   new: false,
//   featured: false,
//   position: "Junior Frontend Developer",
//   role: "Frontend",
//   level: "Junior",
//   postedAt: "5d ago",
//   contract: "Contract",
//   location: "USA Only",
//   languages: ["CSS", "JavaScript"],
//   tools: [],
// });
// await addDoc(jobsRef, {
//   company: "FaceIt",
//   logo: "faceit.svg",
//   new: false,
//   featured: false,
//   position: "Junior Backend Developer",
//   role: "Backend",
//   level: "Junior",
//   postedAt: "2w ago",
//   contract: "Full Time",
//   location: "UK Only",
//   languages: ["Ruby"],
//   tools: ["RoR"],
// });
// await addDoc(jobsRef, {
//   company: "Shortly",
//   logo: "shortly.svg",
//   new: false,
//   featured: false,
//   position: "Junior Developer",
//   role: "Frontend",
//   level: "Junior",
//   postedAt: "2w ago",
//   contract: "Full Time",
//   location: "Worldwide",
//   languages: ["HTML", "JavaScript"],
//   tools: ["Sass"],
// });
// await addDoc(jobsRef, {
//   company: "Insure",
//   logo: "insure.svg",
//   new: false,
//   featured: false,
//   position: "Junior Frontend Developer",
//   role: "Frontend",
//   level: "Junior",
//   postedAt: "2w ago",
//   contract: "Full Time",
//   location: "USA Only",
//   languages: ["JavaScript"],
//   tools: ["Vue", "Sass"],
// });
// await addDoc(jobsRef, {
//   company: "Eyecam Co.",
//   logo: "eyecam-co.svg",
//   new: false,
//   featured: false,
//   position: "Full Stack Engineer",
//   role: "Fullstack",
//   level: "Midweight",
//   postedAt: "3w ago",
//   contract: "Full Time",
//   location: "Worldwide",
//   languages: ["JavaScript", "Python"],
//   tools: ["Django"],
// });
// await addDoc(jobsRef, {
//   company: "The Air Filter Company",
//   logo: "the-air-filter-company.svg",
//   new: false,
//   featured: false,
//   position: "Front-end Dev",
//   role: "Frontend",
//   level: "Junior",
//   postedAt: "1mo ago",
//   contract: "Part Time",
//   location: "Worldwide",
//   languages: ["JavaScript"],
//   tools: ["React", "Sass"],
// });
