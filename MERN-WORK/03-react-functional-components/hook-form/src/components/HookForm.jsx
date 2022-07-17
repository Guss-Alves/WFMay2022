import React, {useState} from "react"


const HookForm = () =>{

    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [password, showPassword] = useState("")
    let [secondpassword, showPassword2] = useState("")


    
    return (
        <div className="container w-50 p-3">
            <h1 className="text-center">Hook Form </h1>
            <form>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>First Name:</label>
                    <input onChange={(e)=> setFName(e.target.value)} className="form-control" type="text" placeholder="First name here..."/>
                    {
                        fname.length<2 && fname.length>0 ? <p className="text-danger bg-warning mt-2 mb-2">First name must have at least 2 characters</p> : null
                    }
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Last Name:</label>
                    <input onChange={(e)=> setLName(e.target.value)} className="form-control" type="text" placeholder="Last name here..."/>
                    {
                        lname.length<2 && lname.length>0 ? <p className="text-danger bg-warning mt-2 mb-2">Last name must have at least 2 characters</p> : null
                    }
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Email:</label>
                    <input onChange={(e)=> setEmail(e.target.value)} className="form-control" type="email" placeholder="Email here..."/>
                    {
                        email.length<2 && email.length>0 ? <p className="text-danger bg-warning mt-2 mb-2">Email must have at least 2 characters</p> : null
                    }
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Password:</label>
                    <input id="secret" onChange={(e)=> showPassword(e.target.value)} className="form-control" type="password" placeholder="password..."/>
                    {
                        password.length<8 && password.length>0 ? <p className="text-danger bg-warning mt-2 mb-2">Password must have at least 8 characters</p> : null
                    }
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Confirm password:</label>
                    <input onChange={(e)=> showPassword2(e.target.value)} className="form-control" type="password" placeholder="confirm your password..."/>
                    {
                        password!=secondpassword && secondpassword.length>0 ? <p className="text-danger bg-warning mt-2 mb-2"> Password must match</p> : null
                    }
                </div>
            </form>
            <hr/>
            <h2 className="text-center">Your Form Data</h2>
            <p>First Name: <u>{fname}</u></p>
            <p>Last Name: <u>{lname}</u></p>
            <p>Email: <u>{email}</u></p>
            <p>password:  <u>{password}</u></p>
            <p> confirm password: <u>{secondpassword}</u></p>
        </div>
    )
}

export default HookForm;