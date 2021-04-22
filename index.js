//require
const express = require("express");
const cors = require("cors");
//internal code
const { getJobs } = require("./Services");

const server = express();

// let PORT = 8080;

// if (process.env.PORT !== undefined) {
//   PORT = process.env.PORT;
// }
server.use(cors());
const PORT = process.env.PORT ? process.env.PORT : 8080;

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

const jobs = [
  { title: "Director of Ops", salary: "100000", company: "Amazon" },
  { title: "SDE ", salary: "130000", company: "Amazon" },
];
// server.listen(8080);

server.get("/jobs", (req, res) => {
  //console.log("Testing");
  // console.log(req.query);
  const { tech } = req.query;

  if (tech === undefined)
    return res.status(400).send({ error: "tech query parameter required" });

  // res.send(jobs);
  getJobs(tech).then((jobs) => res.send(jobs));
});

server.get("/", (req, res) => {
  console.log("home route");
});
// getJobs("Python").then((pythonJobs) => console.log(pythonJobs[0]));
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]));

// const pythonJobs = await getJobs("Python");
// const javaJobs = await getJobs("Java");

// console.log(pythonJobs[0]);
// console.log(javaJobs[0]);
