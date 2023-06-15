import EditForm from "./EditForm"


const Users = ({users, deleteUser, editUser}) => {
  return (
    <div style={{marginTop: 50}}>
        {users.map((user)=>{
            return (
                <div key={user.id} style={{margin: "10px", background: "cyan", width:"400px" , padding: "10px"}}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Gen: {user.gen}</p>
                    <EditForm user={user} editUser={editUser} />
                    <button onClick={()=> deleteUser(user.id)}>delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Users