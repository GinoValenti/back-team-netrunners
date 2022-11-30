let Comments = [ 
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'date': '2022-08-12' ,
        'showId': '636d6e9fd617a8b7222a7f26' ,
        'userId': '6381190f47f751965ea55027',
    },
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'date': '2024-08-12' ,
        'showId': '6372a2ac087720ae18d1c862' ,
        'userId': '6381190f47f751965ea55027',
    },
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'date': '2023-08-12' ,
        'showId': '636d6e9fd617a8b7222a7f25' ,
        'userId': '6381190f47f751965ea55027',
    },
]
require('dotenv').config()
require('../../config/database')
const Comment = require('../Comment')

Comments.forEach(elemento=> {
    Comment.create({
        comment:elemento.comment,
        date: elemento.date,
        showId: elemento.showId,
        userId: elemento.userId
    })
})