const express = require("express");
const { Agent } = require("./model");

const app = express();
app.use(express.json());

// CREATE AGENT
app.post("/agents", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      photoUrl,
      aboutMe,
      practiceAreas,
      agentLicence,
      address,
    } = req.body;
    const agents = await Agent.create({
      firstName,
      lastName,
      photoUrl,
      aboutMe,
      practiceAreas,
      agentLicence,
      address,
    });
    return res.json(agents);
  } catch (err) {
    console.log(err);
  }
});

// GET ALL AGENTS
app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

// GET AGENT BY ID
app.get("/agents/:id", async (req, res, next) => {
  const { id } = req.params;
  const agent = await Agent.findOne({ where: { id } });
  return res.json(agent);
});

module.exports = app;
