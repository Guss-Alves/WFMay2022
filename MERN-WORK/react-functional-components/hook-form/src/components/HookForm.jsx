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
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Last Name:</label>
                    <input onChange={(e)=> setLName(e.target.value)} className="form-control" type="text" placeholder="Last name here..."/>
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Email:</label>
                    <input onChange={(e)=> setEmail(e.target.value)} className="form-control" type="email" placeholder="Email here..."/>
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Password:</label>
                    <input onChange={(e)=> showPassword(e.target.value)} className="form-control" type="password" placeholder="password..."/>
                </div>
                <div className="mb-2 bg-secondary text-white p-2 rounded">
                    <label>Confirm password:</label>
                    <input onChange={(e)=> showPassword2(e.target.value)} className="form-control" type="password" placeholder="confirm your password..."/>
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