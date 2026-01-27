import React from 'react';

export const getPostById = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
}

const SinglePost = async ({ params }) => {
    const { id } = await params;
    const post = await getPostById(id);

    return (
        <div>
            <h1>Single Post</h1>
            <p>Post ID: {id}</p>
            <p className='text-xl font-bold'>Post Title: {post.title}</p>
            <p className='text-lg '>Post Body: {post.body}</p>
        </div>
    );
};

export default SinglePost;