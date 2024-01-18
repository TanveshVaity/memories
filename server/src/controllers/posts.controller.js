import mongoose, { Mongoose } from "mongoose";
import Post from "../models/post.model.js";

export const getPosts = async(req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error});
    }
};

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new Post({ title, message, selectedFile, creator, tags })
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("No post with that id");
        } 
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
        if (!updatedPost){
            return res.status(404).json({ message: "Post not found" });
        } 
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}


export const deletePost = async(req,res) =>{
    const {id} = req.params;

    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send("No post with that id");
        }
        const deletedPost= await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}