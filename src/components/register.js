import { useState } from "react";

// Register new user data
// Validate input
// Store data in localStorage
export default function Register(props) {
  var users = [];
  var id = 0;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var isValid = false;

  // Regex for input validation
  const nameRegex = /(?! \s)^[a-zA-Z]+[ a-zA-Z]*$/;
  const mobileRegex = /^[0-9]{10}$/g;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // Validation function for all inputs triggered after Register button click before storing data
  const validate = () => {
    if (
      name.trim() === "" ||
      mobile.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("All fields are required!!");
    } else if (!nameRegex.test(name)) {
      alert("Name must include only alphabets and space");
      setName("");
    } else if (!mobileRegex.test(mobile)) {
      alert("Mobile must have 10 digit number");
      setMobile("");
    } else if (!emailRegex.test(email)) {
      alert("Incorrect email!");
      setEmail("");
    } else if (!passwordRegex.test(password)) {
      alert(
        "Password must include atleast one alphabet, one number, one special character (@$!%*#?&) and must contain atleast 8 digits"
      );
      setPassword("");
    } else {
      isValid = true;
    }
  };

  const register = () => {
    validate();

    // On successful validation store user data to localStorage
    if (isValid) {
      users = JSON.parse(localStorage.getItem("users")) || [];
      localStorage.clear();

      id = users.length + 1;

      users.push({
        id: id,
        name: name,
        mobile: mobile,
        email: email,
        password: password,
      });

      localStorage.setItem("users", JSON.stringify(users));

      // Traverse to login page after storing data
      props.loginToggle(true);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h2>Welcome!</h2>
          <p>Please register your account</p>
        </div>
        <div className="main-content">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="sub-content">
          Already have an account?{" "}
          <a href="/#" onClick={() => props.loginToggle(true)}>
            Login
          </a>
        </div>
        <button onClick={() => register()}>Register</button>
      </div>
      <div className="policy">
        <p>Terms of use. Privacy policy</p>
      </div>
    </div>
  );
}
