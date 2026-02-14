import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    companyName: {
        type: String,
    },
    phone: {
        type: String,
    },
    budget: {
        type: String,
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// In Next.js development, the model might be cached with an old schema.
// This force-refreshes the model if the 'budget' field is missing.
if (mongoose.models.Submission && !mongoose.models.Submission.schema.paths.budget) {
    delete mongoose.models.Submission;
}

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);
