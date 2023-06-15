import { useState } from "react"
import Form from "./Components/form"
import Users from "./Components/Users"


function App() {

  const [users,setUsers] = useState([])

  const addUser = (newUser) =>{
    setUsers([...users, newUser])
  }

  const deleteUser = (id) =>{
    setUsers(users.filter((user)=>{
      if(user.id !== id){
        return user
      }
    }))
  }

  const editUser = (id, update) =>{
    setUsers(users.map((user)=>{
      if(user.id === id){
        return update
      }
      return user;
    }))
  }

  return (
    <>
      <Form addUser={addUser}/>
      <Users users={users} deleteUser={deleteUser} editUser={editUser}/>
    </>
  )
}

export default App
