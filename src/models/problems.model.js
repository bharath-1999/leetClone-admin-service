const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProblemSchema = new schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Discription is required']
    },
    difficultylevel:{
        type: string,
        enum: ['easy','medium','hard'],
        required: [true, 'Difficultylevel is required'],
        default: 'easy'
    },
    testcases: [
        {
            input: {
                type: String,
                required: [true, 'Input is required']
            },
            output: {
                type: String,
                required: [true, 'Output is required']
            }
        }
    ],
    editorial: {
        type: String,
    }
})

const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;