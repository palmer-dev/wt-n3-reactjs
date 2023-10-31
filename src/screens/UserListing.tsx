import {useEffect, useMemo, useState} from 'react';
import Button from "../components/Button/Button.tsx";
import {TextField} from "../components/TextField/TextField.tsx";
import ListItem from "../components/ListItem/ListItem.tsx";
import {RowContainer} from "../components/Container/RowContainer.ts";
import {ColumnContainer} from "../components/Container/ColumnContainer.ts";
import {User} from "../models/User.ts";
import {createFakeUser} from "../services/createFakeUser.ts";
import Loading from "../components/Loading/Loading.tsx";
import {escapeRegExp} from "../services/escapeRegExp.ts";

function UserListing() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setUsers(createFakeUser(5));
            setLoading(false)
        }, 5000)
    }, []);


    const createUser = () => {
        setUsers((prev) => [...prev, ...createFakeUser(1)])
    }

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((user: User) => user.id !== id))
    }

    const [filter, setFilter] = useState("");

    const filtered = useMemo(() => {
                if (filter === "") return users
                else
                    return users.filter(({name}) => name.match(new RegExp(escapeRegExp(filter), "ig")))
            }, [users, filter]
        )
    ;

    if (loading) return (<Loading/>)
    return (
        <>
            <Button variation={"primary"} onClick={createUser}>Ajouter utiliseur</Button>
            <RowContainer>
                <label htmlFor="">Filtrer</label>
                <TextField type={"text"} value={filter} onChange={e => setFilter(e.target.value)}></TextField>
            </RowContainer>
            <ColumnContainer>
                {
                    filtered.map(({id, name, avatar}) =>
                        <ListItem key={id} name={name} avatar={avatar}
                                  onClick={() => deleteUser(id)}/>
                    )
                }
            </ColumnContainer>
        </>
    );
}

export default UserListing;
