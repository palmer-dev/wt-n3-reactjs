import {useMemo, useState} from "react";
import Loading from "../components/Loading/Loading.tsx";
import {createFakePosts} from "../services/createFakePosts.ts";
import Button from "../components/Button/Button.tsx";
import {RowContainer} from "../components/Container/RowContainer.ts";
import {TextField} from "../components/TextField/TextField.tsx";
import {ColumnContainer} from "../components/Container/ColumnContainer.ts";
import PostItem from "../components/PostItem/PostItem.tsx";
import {escapeRegExp} from "../services/escapeRegExp.ts";
import {usePosts} from "../hooks/usePosts.ts";

function PostListing() {
    const {posts, loading, deletePost, setPosts} = usePosts();
    const [filter, setFilter] = useState("");

    const createPost = () => {
        setPosts((prev) => [...prev, ...createFakePosts(1)])
    }

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
