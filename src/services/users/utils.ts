import {User} from "../../models/User.ts";
import {InputUser} from "./types.ts";

export const transformUser = ({id, firstName, lastName, image}: InputUser): User => ({
    id,
    name: `${firstName} ${lastName}`,
    avatar: image
});
