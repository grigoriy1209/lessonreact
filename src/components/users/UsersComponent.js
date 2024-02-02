import {useEffect, useState} from "react";
import {UserComponent} from "../user/UserComponent";
import {getAllUsers} from "../../services/user.api.services";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {

  getAllUsers()
      .then(value => setUsers(value))

        return ()=>{
            console.log('close');
        }
    }, []);
    return (
        <div>
            {
                users.map(value =><UserComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export {UsersComponent};