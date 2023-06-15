import { useState } from "react";


const EditForm = ({user,editUser}) => {

    const [show, setShow] = useState(false)

    const [userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        gen: user.gen
      });
      
      const {name,email,gen} = userData;
      
      const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserData((prev)=> ({...prev, [name]:value}))
      }
      
        const handleSubmit = (e) => {
          e.preventDefault();
          let updatedUser = {name,email,gen, id: user.id}
            editUser(user.id, updatedUser)
          setShow(false)
        };

    return(
        <div>
      <button onClick={()=> setShow(!show)}>edit</button>
      {show && <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={handleChange}
            value={name}
            name='name'
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={handleChange}
            value={email}
            name='email'
          />
        </div>
        <div>
          <label htmlFor="gen">Generation:</label>
          <input
            type="text"
              onChange={handleChange}
              value={gen}
              name='gen'
          />
        </div>
        <button type="submit">Save</button>
      </form>}
    </div>
    )
}

export default EditForm