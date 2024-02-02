// відкриваючи папку services -> бачили що це servic який відноситься до user -->який працює з Api
const getAllUsers =async () =>{
 const users =  await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return users;
}


export {getAllUsers}
