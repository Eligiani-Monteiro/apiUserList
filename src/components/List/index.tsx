import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { CardUser } from "../CardUser";
import { BarLoader, BeatLoader } from 'react-spinners'


export function List() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoadng] = useState(false)

    const listUsers = async () => {
        setIsLoadng(true)
        const list = await getUsers();
        setIsLoadng(false)
        setUsers(list.results);
    }

    useEffect(() => {
        listUsers();
    }, [])



    return (
        <div>
            {isLoading ? <BeatLoader /> : ""}
            {
                users.map(user => <CardUser key={user.email} user={user} textButton="Ver Perfil" />)
            }
        </div>
    )
}