import {useEffect, useState} from "react";
import {Post} from "../models/Post.ts";
import {fetchPosts} from "../services/posts/api.ts";
import {transformPost} from "../services/posts/utils.ts";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const result = await fetchPosts();
            const transformed = result.posts.map(transformPost);
            setPosts(transformed);
            setLoading(false);
        })()
    }, []);

    const deletePost = (id: string) => {
        setPosts((prev) => prev.filter((post: Post) => post.id !== id.toString()))
    }

    return {posts, loading, setPosts, deletePost}
}
