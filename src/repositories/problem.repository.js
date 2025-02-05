const { Problem } = require('../models');

class ProblemRepository {

    async getProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.error('Error getting problems:', error);
            throw error;
        }
    }

    async getProblemById(id) {
        try {
            return await Problem.findById(id);
        } catch (error) {
            console.error(`Error getting problem with id ${id}:`, error);
            throw error;
        }
    }

    async createProblem(problemData) {
        try {
            return await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases || [],
            });
        } catch (error) {
            console.error('Error creating problem:', error);
            throw error;
        }
    }

    async updateProblem(id, problem) {
        try {
            return await Problem.findByIdAndUpdate(id, problem, { new: true });
        } catch (error) {
            console.error(`Error updating problem with id ${id}:`, error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            return await Problem.findByIdAndDelete(id);
        } catch (error) {
            console.error(`Error deleting problem with id ${id}:`, error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;