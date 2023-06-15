import  { useState } from 'react';
import { v4 as uuid } from 'uuid';

function Form({addUser}) {
const [userData, setUserData] = useState({
  name:"",
  email: "",
  gen: ""
});

const {name,email,gen} = userData;

const handleChange = (e)=>{
  const {name, value} = e.target;
  setUserData((prev)=> ({...prev, [name]:value}))
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {name,email,gen, id: uuid()}
    addUser(newUser)
    setUserData({
      name:"",
      email: "",
      gen: ""
    })
  };

  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
