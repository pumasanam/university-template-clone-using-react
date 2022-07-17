import axios from 'axios';
import React, {useState} from 'react';
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");

    const onFormSubmit = async (e)=>{
        e.preventDefault();

        const formData = {
            name, username, email,
        };

        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/users',formData);
            if(res.status>200){
                toast.success("Login Successfully");
            }
        }
        catch(err){
            console.log(err);
        };

    };
  return (
    <>
    <ToastContainer autoClose={1000}/>
      <div className="contact">
        <form action="" onSubmit={onFormSubmit}>
            <h1>Be Our Member</h1>

            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value);
            }} placeholder='Name' />

            <input type="text" value={username} onChange={(e)=>{
                setusername(e.target.value);
            }} placeholder='Username' />

            <input type="text" value={email} onChange={(e)=>{
                setemail(e.target.value);
            }} placeholder='Email' />

            <input type="password" placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
