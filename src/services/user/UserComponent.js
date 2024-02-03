
                                  // dump component
const UserComponent = ({item,choseUser}) => {
    return (
        <div>
            <h1>{item.id} {item.name}</h1>
            <button onClick={()=>{
                choseUser(item);
            }}>details</button>
        </div>
    );
};

export {UserComponent};