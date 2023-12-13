import React from "react";
function Login(){
    return (
        <div className="App">
          <div className="login-container">
            <h2>Let's do this!</h2>
            
            <form>
              <input type="text" placeholder="Username" required /><br />
              <input type="password" placeholder="Password" required /><br />
             
              <button type="submit">READY TO GO</button>
            
              <p className="para"><span>Not a member? </span><span><br/><a href="http://172.19.36.42:3000" className="link2" >SIGN UP</a></span></p>
            </form>
          </div>
        </div>
      );
}

export default Login;