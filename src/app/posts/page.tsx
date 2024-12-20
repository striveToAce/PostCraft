import Head from 'next/head';
import PostCard from '../components/posts/PostCard';

const PostsIndex = async () => {

    const fetchPosts = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            return data
        } catch (error) {

        }
    };

    const posts = await fetchPosts()

    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>My Blog</title>
                <meta name="description" content="A blog built with Next.js" />
            </Head>
            <h1 className="text-4xl font-bold text-center my-8">Posts</h1>
            <div className="flex flex-wrap justify-center">
                {posts.map((post:IPost) => (
                    <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        </div>
    );
};

export default PostsIndex;