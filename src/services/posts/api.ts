import {InputPost} from "./types.ts";

export const fetchPosts = async (): Promise<{ posts: InputPost[] }> => {
    const result = await fetch('https://dummyjson.com/posts');
    return await result.json();
}
