import {useEffect, useMemo, useState} from "react";
import Loading from "../components/Loading/Loading.tsx";
import {Post} from "../models/Post.ts";
import {createFakePosts} from "../services/createFakePosts.ts";
import Button from "../components/Button/Button.tsx";
import {RowContainer} from "../components/Container/RowContainer.ts";
import {TextField} from "../components/TextField/TextField.tsx";
import {ColumnContainer} from "../components/Container/ColumnContainer.ts";
import PostItem from "../components/PostItem/PostItem.tsx";
import {escapeRegExp} from "../services/escapeRegExp.ts";

function PostListing() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setPosts(createFakePosts(5));
            setLoading(false)
        }, 1000)
    }, []);


    const createPost = () => {
        setPosts((prev) => [...prev, ...createFakePosts(1)])
    }

    const deletePost = (id: string) => {
        setPosts((prev) => prev.filter((post: Post) => post.id !== id))
    }

    const [filter, setFilter] = useState("");

    const filtered = useMemo(() => {
                if (filter === "") return posts
                else
                    return posts.filter(({
                                             title,
                                             description
                                         }) => (title.match(new RegExp(escapeRegExp(filter), "ig")) || description.match(new RegExp(escapeRegExp(filter), "ig"))))
            }, [posts, filter]
        )
    ;

    if (loading) return (<Loading/>)
    return (
        <>
            <Button variation={"primary"} onClick={createPost}>Ajouter un post</Button>
            <RowContainer spaceAfter={2} spaceBefore={1}>
                <label htmlFor="">Filtrer</label>
                <TextField type={"text"} value={filter} onChange={e => setFilter(e.target.value)}></TextField>
            </RowContainer>
            <ColumnContainer spaceAfter={2} gap={2}>
                {
                    filtered.map(({id, title, image, description, publication_date}) =>
                        <PostItem key={id} title={title} image={image} description={description}
                                  publication_date={publication_date}
                                  onClick={() => deletePost(id)}/>
                    )
                }
            </ColumnContainer>
        </>
    )
}

export default PostListing;
