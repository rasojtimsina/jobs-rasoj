const axios = require("axios");

async function getJobs(tech) {
  const URL = `https://jobs.github.com/positions.json?description=${tech}`;

  const res = await axios.get(URL);

  return res.data;

  //   axios.get(URL).then((res) => console.log(res.data));
}
module.exports = {
  getJobs,
};
