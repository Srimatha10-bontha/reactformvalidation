import React from 'react'
import './Loginsignup.css'
import { useState } from 'react'

const LoginSignup = () => {
   const[action,setAction]=useState('Sign Up');
   const[form,setForm]=useState({username:'',email:'',password:'' });

    console.log(form);



     
    const[errors,setErrors]=useState({});
    const[loginform,setLoginForm]=useState({email:'',password:''});
    const[loginerrors,setLoginErrors]=useState({})
    //Here errors:are variables =>it stores the error varaibales 
    //setErrors are used for updated errors 
    //{}=>This object is used initially empty means initially there are no errors available



    const validate=()=>{
      //a constant value, meaning the value assigned to it cannot be reassigned
      //const is a function validate is a function name .
   
      const errors={};
      //errors are used to store the error messages in to the errors function
      
      //////LOGIC START//////
      if(!form.username.trim()) errors.username="Username is required!";
      if(!form.email.trim()) {
        errors.email="Email is required!";
      }
      else if(!/\S+@\S+\.\S+/.test(form.email)){
        errors.email="Enter correct Email!";
      }
      if(!form.password.trim()) {
        errors.password="password is required!";
      }
      else if(form.password.trim().length<6){
        errors.password="Password must be atleast 6 charecters";
      }
      else if(form.password.trim().length>6){
        errors.password="Password not be enter greater than 6 charecters";
      }
      return errors;

    }
  

    const Loginvalidate=()=>{

      const loginerrors={};

      if(!loginform.email.trim()) 
        loginerrors.email="Email is required!";
    else if(!/\S+@\S+\.\S+/.test(loginform.email))
    loginerrors.email="Enter correct Email!";
    if(!loginform.password.trim()) {
      loginerrors.password="password is required!";
    }
    else if(loginform.password.trim().length<6){
      loginerrors.password="Password must be atleast 6 charecters";
    }
    else if(loginform.password.trim().length>6){
      loginerrors.password="Password shouldn't be greater than  6 charecters";
    }
    
    return loginerrors;
    }
  

    const handlesignupSubmit =(e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
          // Form is valid, submit the data
          console.log("Form data submitted", form);

          setForm({ username: '', email: '', password: '' });
          setErrors({});
        
      
      } else {
          setErrors(validationErrors);
       }
       
      }
    

      const handleLoginSubmit = (e) => {
        e.preventDefault();
        const validateErrors = Loginvalidate();
        if (Object.keys(validateErrors).length === 0) {
          console.log("Login form data submitted", loginform);


          setLoginForm({ email: '', password: '' });
          setLoginErrors({});
          
        } else {
          setLoginErrors(validateErrors);
        }
      };
    
    
   

  console.log(errors)

 
      


  return (

      <div className='container'>
         {/* ----header section------*/}
        
        <div className='header'>
            
            <h1>{action}</h1>
            <div className='underline'></div>
        </div>
        {/*-------header section end------- */}


        {/*-------form section start------- */}
        <div className='form'>
          <form onSubmit={action==="Sign Up" ? handlesignupSubmit:handleLoginSubmit}>
            {action==="Login"?<div></div>:<div>
            <input type="text" placeholder="User Name"  name="username" value={form.username} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
            <br/>
            {errors.username && <span className="error">{errors.username}</span>}

            </div>}

            <div>
            <input type="email" placeholder='example@gmail.com' name="email" value={action==="Sign up"?form.email:loginform.email} onChange={(e)=>action==="Sign Up"? (setForm({...form,[e.target.name]:e.target.value})):setLoginForm({...loginform,[e.target.name]:e.target.value})}/>
            <br/>
            {action==="Sign Up"?errors.email && <span className="error">{errors.email}</span>: loginerrors.email && <span className="error">{loginerrors.email}</span>}
            
            </div>

            <div>
            <input type="password" placeholder='Enter password ' name="password" value={action==="Sign Up"?form.password:loginform.password} onChange={(e)=>action==="Sign Up"? (setForm({...form,[e.target.name]:e.target.value})):setLoginForm({...loginform,[e.target.name]:e.target.value})}
/>
            <br/>

            {action==="Sign Up"? errors.password && <span className="error">{errors.password}</span>:loginerrors.password && <span className='error'>{loginerrors.password}</span>}

        </div>
            <div className='submit-container'>
            <div>
            <button type="submit" className={action==="Login"?"sbtn gray":"sbtn"} 
            onClick={()=>setAction("Sign Up")}>Sign Up</button>
            </div>
            <div>
            <button type="submit" className={action==="Sign Up"?"sbtn gray":"lbtn"} 
            onClick={()=>setAction("Login")}>Login</button>
            </div>
            </div>
          </form>

         
        </div>
        </div>
        

    
    
)

}
    

export default LoginSignup;
