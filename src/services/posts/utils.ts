import {Post} from "../../models/Post.ts";
import {InputPost} from "./types.ts";
import {faker} from "@faker-js/faker";

export const transformPost = ({id, title, body}: InputPost): Post => ({
    id: id.toString(),
    title: title,
    description: body,
    image: faker.image.image(),
    publication_date: faker.date.past()
});
