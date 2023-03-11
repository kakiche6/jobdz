const createJob = (req, res) => {
  return res.send("createJob");
};

const deleteJob = (req, res) => {
  return res.send("deleteJob");
};

const getAllJobs = (req, res) => {
  return res.send("getAllJobs");
};

const updateJob = (req, res) => {
  return res.send("updateJob");
};

const showStats = (req, res) => {
  return res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
