import { useState } from "react";
import UserList from "./userList";

// Login with email and password
// Verify credential from localStorage
export default function Login() {
  var users = [];
  var [currUser, setCurrUser] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showList, setShowList] = useState(false);

  const login = () => {
    //   Validation for email and password
    if (email.trim() === "") {
      alert("Please enter email");
    } else if (password.trim() === "") {
      alert("Please enter password");
    } else {
      //   Retrieve users data from localStorage
      users = JSON.parse(localStorage.getItem("users")) || [];

      //   Verify credential from the retrieved users
      users.forEach((user) => {
        if (user.email === email && user.password === password) {
          // On successful credential pass current user data and traverse to users list page
          setCurrUser(user);
          setShowList(true);
          return user;
        } else if (
          (user.email === email && user.password !== password) ||
          (user.email !== email && user.password === password)
        ) {
          alert("Incorrect Email or Password");
        }
      });
    }
  };

  return (
    <>
      {/* Toggle for Login and User list page */}
      {showList ? (
        <UserList user={currUser} listToggle={setShowList} />
      ) : (
        <div className="container">
          <div className="wrapper">
            <div className="header">
              <h2>Welcome back!</h2>
              <p>Please login to your account</p>
            </div>
            <div className="main-content">
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
              <div className="rememberMe">
                <input className="checkbox-1" type="checkbox" />
                <label htmlFor="checkbox-1" className="chkbox">
                  Remember Me
                </label>
              </div>
              <a href="/#">Forgot Password</a>
            </div>
            <button onClick={() => login()}>Login</button>
          </div>
          <div className="policy">
            <p>Terms of use. Privacy policy</p>
          </div>
        </div>
      )}
    </>
  );
}
