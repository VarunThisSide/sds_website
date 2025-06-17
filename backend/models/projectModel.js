import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    githubLink: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^https?:\/\/(www\.)?github\.com\/[^\/\s]+\/[^\/\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid GitHub link!`,
        },
    },
    liveLink: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid live link!`,
        },
    },
    tags: {
        type: [String],
        required: true,
    },
    contributors: {
        type: [String],
        required: true,
    }
}, { timestamps: true });


projectSchema.pre('save', function (next) {
    this.tags = this.tags.map(tag => tag.trim());
    this.contributors = this.contributors.map(contributor => contributor.trim());
    next();
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
