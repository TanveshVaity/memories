import React , {Fragment}from "react";
import { useSelector } from 'react-redux';
import useStyles from './styles';


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return(
        <Fragment>
            <h1>Posts</h1>
        </Fragment>
    )
}

export default Posts;