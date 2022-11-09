let shows = [ 
    {
        'hotelId': '636c39899a040b39571e3058' ,
        'name': 'Linkin Park',
        "description":"Live concert of one of the best rock bands in the world.",
        'photo': 'https://kubomusical.com/wp-content/uploads/2020/05/8b1e81bb-2e0f-4831-ae90-4dac1e318050.jpg',
        'price': '100' ,
        'date': '2022-08-12' ,
        'userId': '636c179503533f0d08013854',
    },
    {
  
        'hotelId': '636c39899a040b39571e305b' ,
        'name': 'Pirates of the Caribean show',
        "description":"A pirates of the caribbean show for kids.",
        'photo': 'https://i.ytimg.com/vi/v0PhfbpNu-4/maxresdefault.jpg',
        'price': '100' ,
        'date': '2023-12-07' ,
        'userId': '636c179503533f0d08013854'
    },
    {
  
        'hotelId': '636c39899a040b39571e3061' ,
        'name': 'Comicon',
        "description":"The best event for comic fans",
        'photo': 'https://media.wired.com/photos/62d7615394f7f03fb5e0c44e/master/pass/Comic-Con-Is-Back-Culture-1163223301.jpg',
        'price': '100' ,
        'date': '2023-12-05' ,
        'userId': '636c179503533f0d08013854',
    },

{

    "hotelId":"636c39899a040b39571e305c",
    "name":"Fashion show",
    "description":"Fashion Show to look amazing clothes",
    "photo":"https://d1e00ek4ebabms.cloudfront.net/production/c7f3c580-eb21-4329-8b38-b00b8caff6a7.jpg",
    "price":"1000",
    "date":"2023-01-12",
    "userId": "636c179503533f0d08013856"
},
{

    "hotelId":"636c39899a040b39571e305a",
    "name":"Metallica!",
    "description":"Live concert of one of the best rock band in the world.",
    "photo":"https://akamai.sscdn.co/uploadfile/letras/fotos/c/b/e/3/cbe32534b5d42220e47b16a1a9c9c0dd.jpg",
    "price":"600",
    "date":"2023-05-09",
    "userId": "636c179503533f0d08013853"
},
{

    "hotelId":"636c39899a040b39571e3056",
    "name":"Coldplay",
    "description":"Live concert of one of the best band in the world.",
    "photo":"https://www.clarin.com/img/2021/12/06/coldplay-mantiene-en-pie-su___ATkysKcNG_2000x1500__1.jpg",
    "price":"800",
    "date":"2022-12-20",
    "userId": "636c179503533f0d08013855"
},

]
require('dotenv').config()
require('../../config/database')
const Show = require('../Show')

shows.forEach(elemento=> {
    Show.create({
        hotelId:elemento.hotelId,
        name: elemento.name,
        description: elemento.description,
        photo: elemento.photo,
        price: elemento.price,
        date: elemento.date,
        userId: elemento.userId
    })
})