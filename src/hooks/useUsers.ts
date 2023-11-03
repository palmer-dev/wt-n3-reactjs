import {useEffect, useState} from "react";
import {User} from "../models/User.ts";
import {fetchUsers} from "../services/users/api.ts";
import {transformUser} from "../services/users/utils.ts";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const result = await fetchUsers();
            const transformed = result.users.map(transformUser);
            setUsers(transformed);
            setLoading(false);
        })()
    }, []);

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((user: User) => user.id !== id))
    }

    return {users, loading, setUsers, deleteUser}
}
