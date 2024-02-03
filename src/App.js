import {useEffect} from "react";
import {getAllUsers, getUserById} from "./services/user.api.service";


const App = () => {
    useEffect(() => {
        getAllUsers().then(value => console.log(value.data))
        getUserById(3).then(value => console.log(value.data))
    }, []);
    return (
        <div>

        </div>
    );
};

export {App};