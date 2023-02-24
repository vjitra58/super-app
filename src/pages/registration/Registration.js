import React, {useState} from 'react'
import "./Registration.css";

const Registration = () => {

    const [name, setName] = useState({val:"", error: ""});
    const [username, setUsername] = useState({ val: "", error: "" });
    const [email, setEmail] = useState({ val: "", error: "" });
    const [mobile, setMobile] = useState({ val: "", error: "" });
    const [check, setCheck] = useState(false);

    const RegisterUser = (e) => {
        e.preventDefault();
        console.log("Registering user");
        if(!name.val || !username.val || !email.val || !mobile.val){
            alert("Please fill all the fields");
            if(!name.val){
                setName((prevstate) => ({...prevstate, error: "This field is required"}));
            }
            if(!email.val){
                setEmail((prevstate) => ({...prevstate, error: "This field is required"}));
            }
            if(!mobile.val){
                setMobile((prevstate) => ({...prevstate, error: "This field is required"}));
            }
            if(!username.val){
                setUsername((prevstate) => ({...prevstate, error: "This field is required"}));
            }
            return;
        }
        if(!check){
            alert("Please agree to share your data");
            return;
        }
        if(username.val.length < 8){
            alert("Username should be atleast 8 characters long");
            setUsername((prevstate) => ({
              ...prevstate,
              error: "Username should be atleast 8 characters long",
            }));
            return;
        }
        console.log(name, username, mobile, email);
        const emailFormat = RegExp(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );

        let mobileFormat = RegExp(/^\d{10}$/);
        let nameFormat = RegExp(/^[A-Za-z]+\s*[A-Za-z]+\s*[A-Za-z]+\s*$/);
        let usernameFormat = RegExp(/^[A-Za-z][A-Za-z0-9_]{7,29}$/);
        
         if (!email.val.match(emailFormat)) {
           alert("Please enter a valid email");
           setEmail((prevstate) => ({
             ...prevstate,
             error: "Please enter a valid email",
           }));
           return;
        }

        if(!mobile.val.match(mobileFormat)){
            alert("Please enter a valid mobile number");
            setMobile((prevstate) => ({
              ...prevstate,
              error: "Please enter a valid Mobile number",
            }));
            return;
        }
        if(!name.val.match(nameFormat)){
            alert("Please enter a valid name");
            setName((prevstate) => ({
              ...prevstate,
              error: "Please enter a valid name",
            }));
            return;
        }
        if(!username.val.match(usernameFormat)){
            alert("Please enter a valid username containing only alphabets, numbers and underscore");
            setUsername((prevstate) => ({
              ...prevstate,
              error:
                "Please enter a valid username containing only alphabets, numbers and underscore",
            }));
            return;
        }
        // hit the registration api and set all error fields to null;
        setName((prevstate) => ({
            ...prevstate,
            error: "",
        }));
        setMobile((prevstate) => ({
            ...prevstate,
            error: "",
        }));
        setUsername((prevstate) => ({
            ...prevstate,
            error: "",
        }));
        setEmail((prevstate) => ({
            ...prevstate,
            error: "",
        }));
        alert("User registered successfully");
    }

  return (
    <div className="register">
      <div className="register-left">
        <div>
          <h1>Already have an account?</h1>
          <button>login</button>
        </div>
        <h1>Discover new things on Superapp</h1>
      </div>
      <div className="register-right">
        <h1>Super app</h1>
        <p>create your new account</p>
        <div className="right-options">
          <p>Email</p>
          <div></div>
          <p>Google</p>
        </div>
        <form onSubmit={RegisterUser}>
          <div className="form-field">
            <input
              type="text"
              placeholder="Name"
              value={name.val}
              onChange={(e) =>
                setName((prevstate) => ({ ...prevstate, val: e.target.value }))
              }
            ></input>
            <span>{name.error}</span>
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder="UserName"
              value={username.val}
              onChange={(e) =>
                setUsername((prevstate) => ({
                  ...prevstate,
                  val: e.target.value,
                }))
              }
            ></input>
            <span>{username.error}</span>
          </div>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email"
              value={email.val}
              onChange={(e) =>
                setEmail((prevstate) => ({ ...prevstate, val: e.target.value }))
              }
            ></input>
            <span>{email.error}</span>
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder="Mobile"
              value={mobile.val}
              onChange={(e) =>
                setMobile((prevstate) => ({
                  ...prevstate,
                  val: e.target.value,
                }))
              }
            ></input>
            <span>{mobile.error}</span>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              onChange={(e) => setCheck((prevstate) => !prevstate)}
            ></input>
            <p style={{ fontSize: "12px" }}>
              I agree to Share my registration data with Superapp
            </p>
          </div>
          <button type="submit">SIGN UP</button>
          <p style={{ fontSize: "12px", textAlign: "left" }}>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration

