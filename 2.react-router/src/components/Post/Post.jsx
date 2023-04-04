import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Post = ({post}) => {
    const {title,body} = post;

    const navigate = useNavigate();
    const clickPost = () => {
        navigate(`/post/${post.id}`)
    }
    return (
        <div className='post'>
            <h3>Post Title: {title}</h3>
            <p><Link to={`/post/${post.id}`}> Show Details Post</Link></p>
           
            <ActiveLink to={`/post/${post.id}`}> <button>Show Posts</button></ActiveLink>
            <button onClick={clickPost}>Click Posts</button>

        </div>
    );
};

export default Post;