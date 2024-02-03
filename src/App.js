
import {UsersComponent} from "./services/users/UsersComponent";
import {useState} from "react";


const App = () => {
    const [user, setUser] = useState(null)
    const choseUser = (obj)=>{
      setUser(obj)
    }
    return (
        <div>
           <h2>{user?.email}</h2>
            {
                user && <h2>{user.email}</h2>
            }

            <hr/>
            <h2>user component start</h2>
              <UsersComponent choseUser ={choseUser}/>
            <h2>user component end</h2>
            <hr/>
        </div>
    );
};

export {App};