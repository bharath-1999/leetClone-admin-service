const { getProblems } = require("../controllers/problems.controller");
const { markDownSanitizer } = require("../utils");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // sanitize the markdown
            problemData.description = markDownSanitizer(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.error("Error creating problem:", error);
            throw error;
        }
    }
    async getProblems() {
        try {
            const problems = await this.problemRepository.getProblems();
            return problems;
        } catch (error) {
            console.error("Error getting problems:", error);
            throw error;
        }
    }
}



module.exports = ProblemService;
