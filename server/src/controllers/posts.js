import Post from "../models/post.js";

export const getPosts = async(req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createPost = async(req,res) =>{
    try{
        const post = req.body;
        const newPost = await Post.save();

        res.status(201).json(newPost);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}