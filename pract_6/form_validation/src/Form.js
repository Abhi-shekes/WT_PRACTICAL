

import React, {useState} from 'react';
import "./Form.css";

const Form = ()=> {

    const [formData, setFormData] = useState({
        username :"",
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
            setSuccessMessage("")

        }else{
            // console.log("Form submitted successfully", formData);
            setSuccessMessage("Form submitted Successfully");
            setErrors({});
        }
    };

    const validateForm = ()=>{
        const errors = {};
        if (!formData.username) errors.username="Username is required";
        if (!formData.email){
            errors.email = "Email is required";

        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid.";
        }
        if (!formData.password){
            errors.password = "Password is required";
        }else if (
            formData.password.length < 6 || 
            !/[A-Z]/.test(formData.password)||
            !/[a-z]/.test(formData.password)||
            !/[0-9]/.test(formData.password) ||
            !/[!@#$%^&*]/.test(formData.password)
        ){
            errors.password="Password must be atleast of 6 charc long and include uppercase, lowercase, number, and special character. "
        }
        return errors
    };

    const handleReset = () =>{
        setFormData({
            username : "",
            email:"",
            password:"",
        });
        setErrors({});
        setSuccessMessage("");


    }



    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            {successMessage && <div className="success-message">{successMessage}</div>}

            <h1>Registration form</h1>

                <div>
                    <label>Username</label>
                    <input 
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    
                </div>

                <div>
                    <label>Email</label>
                    <input type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <button type='submit'>Submit</button>
                <button type='button' onClick={handleReset}>Reset</button>




            </form>


        </div>
    )
}


export default Form;