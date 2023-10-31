import {faker} from '@faker-js/faker';
import {User} from "../models/User.ts";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export const createFakeUser = (count: number): User[] =>
    Array
        .from(Array(count)
            .keys())
        .map((id: number) => ({
                id: new Date().getTime() + id,
                avatar: faker.image.avatar(),
                name: faker.person.fullName()
            })
        )
