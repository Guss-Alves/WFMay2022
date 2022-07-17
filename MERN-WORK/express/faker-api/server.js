const express = require("express");

const app = express();

const port = 8000;


const {faker} = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumberFormat();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.datatype.uuid();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = [
            this.street = faker.address.street(),
            this.city = faker.address.city(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.country()
        ]
    }
}

app.post('/api/users/new', (req, res)=>{

    let newUser = new User();

    // User.push(req.body)
    
    // var User = {};
    // User.push(req.body)

    res.json({
        results: newUser
    })
})

app.post('/api/companies/new', (req, res)=>{

    let newCompany = new Company();

    res.json({
        results: newCompany
    })
})

app.post('/api/user/company', (req, res)=>{

    let newUser = new User();
    let newCompany = new Company();

    res.json({
        results: newUser,
        newCompany
    })
})




// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );