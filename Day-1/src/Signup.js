import React from "react";
function Signup(){

    return (
        <div className="App">
          <div className="login-container">
            <h3>Signup</h3>
            <form>
              <input type="text" placeholder="Username" required /><br />
              <input type="text" placeholder="Firstname" required /><br />
              <input type="text" placeholder="Lastname" required /><br />
              <input type="text" placeholder="Mobilenumber" required /><br />

              <input type="password" placeholder="Enter your Password" required /><br />
              <input type="password" placeholder="Re-Enter your Password" required /><br />
              <button type="submit">Sign in</button>
            </form>
          </div>
        </div>
      );
}

export default Signup;