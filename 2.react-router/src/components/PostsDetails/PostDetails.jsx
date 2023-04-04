import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
 
    const navigate = useNavigate();
    const post = useLoaderData();
    const backBtn=()=>{
        navigate(-1);
    }

    return (
        <div>
            <h3>{post.id}</h3>
            <h2>Post Title:{post.title}</h2>
            <p>Content:{post.body}</p>
            <button onClick={backBtn}>Back to Posts</button>
        </div>
    );
};

export default PostDetails;