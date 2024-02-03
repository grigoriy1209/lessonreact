import {useEffect, useState} from "react";
import {getAllUsers} from "../user.api.service";
import {UserComponent} from "../user/UserComponent";

                   // smart component

const UsersComponent = ({choseUser}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers().then(value =>setUsers(value.data) )
    }, []);
    return (
        <div>
            {
                users.map(value => <UserComponent choseUser={choseUser} item={value} key={value.id}/>)
            }
        </div>
    );
};

export {UsersComponent};