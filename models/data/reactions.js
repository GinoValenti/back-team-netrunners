let reactions = [
    {
        "itineraryId": "636d719cedc6078af445d515",
        "name": "like",
        "icon": "👍",
        "iconBack":  "👍🏻",
        "userId":  ["6382c93a9488ec6cd187230a", "636c179503533f0d08013855"],
    },
    {
        "itineraryId": "636d719cedc6078af445d515",
        "name": "not-like",
        "icon": "👎",
        "iconBack":  "👎🏻",
        "userId":  ["6382c93a9488ec6cd187230a", "636c179503533f0d08013855"],
    },
    {
        "itineraryId": "636d719cedc6078af445d515",
        "name": "love",
        "icon": "💖",
        "iconBack":  "💟",
        "userId":  ["6382c93a9488ec6cd187230a", "636c179503533f0d08013855"],
    },
    {
        "itineraryId": "636d719cedc6078af445d515",
        "name": "surprise",
        "icon": "😯",
        "iconBack":  "😶",
        "userId":  ["6382c93a9488ec6cd187230a", "636c179503533f0d08013855"]
    }

]

require('dotenv').config()
require('../../config/database')
const Reaction = require('../Reaction')

reactions.forEach(elemento=> {
    Reaction.create({
        itineraryId: elemento.itineraryId,
        name: elemento.name,
        icon: elemento.icon,
        iconBack: elemento.iconBack,
        userId: elemento.userId,
    })
})