import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>All Available post: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post 
                        post={post}
                        key={post.id}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;