let users = [
    {

        'name': 'Gaston',
        'lastName': 'Zappulla',
        'age': 23,
        'email': 'gastonzappullary@gmail.com',
        'password': 'Lucybestwaifu123',
        'code': '1999',
        'verified': true,
        'logged': true
    },
    {
  
        'name': 'Gino',
        'lastName': 'Valenti',
        'age': 19,
        'email': 'ginorvalenti@gmail.com',
        'password': 'Cyberpunk2077',
        'code': '2003',
        'verified': true,
        'logged': true
    },
    {
    
        'name': 'Regina',
        'lastName': 'Diaz',
        'age': 23,
        'email': 'reginadiaz@gmail.com',
        'password': 'Lovemybf123',
        'code': '2000',
        'verified': true,
        'logged': true
    },
    {
   
        'name': 'David',
        'lastName': 'Martinez',
        'age': 18,
        'email': 'davidcyber@gmail.com',
        'password': 'killadamsmasher123',
        'code': '2077',
        'verified': true,
        'logged': true
    }

]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach(elemento=>{
    User.create({
        name: elemento.name,
        lastName:elemento.lastName,
        age: elemento.age,
        email:elemento.email,
        password: elemento.password,
        code: elemento.code,
        verified: elemento.verified,
        logged: elemento.logged,
    })
})
