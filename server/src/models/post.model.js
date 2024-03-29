import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", postSchema);
export default Post;