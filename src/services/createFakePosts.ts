import {faker} from '@faker-js/faker';
import {Post} from "../models/Post.ts";
import {generateUUID} from "./generateUUID.ts";

export const createFakePosts = (count: number): Post[] =>
    Array
        .from(Array(count)
            .keys())
        .map(() => ({
                id: generateUUID(),
                title: faker.lorem.sentence(5),
                image: faker.image.image(),
                publication_date: faker.date.recent(),
                description: faker.lorem.lines(10)
            })
        )
