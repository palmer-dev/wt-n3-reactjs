import {InputUser} from "./types.ts";

export const fetchUsers = async (): Promise<{ users: InputUser[] }> => {
    const result = await fetch('https://dummyjson.com/users');
    return await result.json();
}
