
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}

const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className=" grid grid-cols-4 gap-4">
            {
                posts.map(post => (
                    <div key={post.id} className='border p-4 m-4 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-bold mb-2'>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;