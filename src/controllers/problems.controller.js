const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const   { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemcontroller(req, res) {
  res.send("pong");
}

async function addProblem(req, res,next) {
  try {
    const problem = req.body;
    const newProble = await problemService.createProblem(problem);
    res.status(StatusCodes.CREATED).json({
      message: "Problem created successfully",
      success: true,
      error:[],
      data: newProble
    });
  } catch (err) {
    next(err);
  }
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getProblems();
    res.status(StatusCodes.OK).json({
      message: "Problems fetched successfully",
      success: true,
      error: [],
      data: problems
    });
  } catch (err) {
    next(err);
  }
}

function getProblem(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}
module.exports = {
  addProblem,
  getProblems,
  getProblem,
  deleteProblem,
  updateProblem,
  pingProblemcontroller,
};
