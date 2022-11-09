let itinerary = [
    {
        'cityId': '636c34f71a5976b71eee11dd',
        'name': 'Buenos Aires',
        'photo': [
            
                'https://turismo.buenosaires.gob.ar/sites/turismo/files/jarin_japones_puente_2_1200.jpg'
            ,
            
                'https://turismo.buenosaires.gob.ar/sites/turismo/files/estadio_river_plate_1200_belgrano.jpg'
            ,
            
                'https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2400/xyi2f9rihrzrooufkyu7.jpg'
            
        ],
        'description': 'The definitive activitie',
        'price': 500,
        'duration': 1,
        'userId':  '636c179503533f0d08013855',
    },
    {
        'cityId': '636c34f71a5976b71eee11de',
        'name': 'Ciudad de Mexico',
        'photo': [
           
                 './img/img-activities/cdmx-museo.jpg'
                ,
            
                './img/img-activities/cdmx-palacio.webp'
                ,
            
                './img/img-activities/cdmx-teotihuacan.jpg'
            
        ],
        'description': 'The definitive activitie',
        'price': 800,
        'duration': 1,
        'userId':  '636c179503533f0d08013856',
    },
    {
        'cityId': '636c276b651a6e132a2d0cab',
        'name': 'Lima',
        'photo': [
            
                 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bd/f1/65/chocomuseo-miraflores.jpg?w=1200&h=-1&s=1'
            ,
            
                'https://elcomercio.pe/resizer/bmUrWzSPTM9KBq5kUr15VLRvVw4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KIUK43NXUNH7HKJSVWD4BCO27A.jpg'
            ,
            
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lima_-_Plaza_Mayor_-_Fontaine.jpg/1200px-Lima_-_Plaza_Mayor_-_Fontaine.jpg'
            
        ],
        'description': 'The definitive activitie',
        'price': 200,
        'duration': 1,
        'userId':  'adm1636c179503533f0d08013854',
    },
    {
        'cityId': '636c276b651a6e132a2d0cac',
        'name': 'London',
        'photo': [
            
                'https://londonmymind.com/wp-content/uploads/2022/01/London-Buses-Hero.jpg'
            ,
            
                 'https://www.londoneye.com/media/famji01b/1920x1280_generic_le_header.jpg'
            ,
            
                 'https://loving-london.com/es/wp-content/uploads/2017/01/buckingham-palace-170120142034002-1920x960.jpg'
            
        ],
        'description': 'The definitive activitie',
        'price': 100,
        'duration': 1,
        'userId':  '636c179503533f0d08013853',
    },
    {
        'cityId': '636c276b651a6e132a2d0cad',
        'name': 'Moskau',
        'photo': [
            
                 'https://78488-215931-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/12/Museo-de-la-Cosmonautica-en-Moscu-1.jpg'
            ,
            
                 'https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2017/11/russland-moskau-blick-auf-den-kreml-in-moskau-den-sitz-des-russischen-pracc88sidenten-und-das-markenzeichen-der-stadt-russland-shchipkova-elena-fotolia.jpg'
            ,
            
               'https://upload.wikimedia.org/wikipedia/commons/e/ed/RedSquare_%28pixinn.net%29.jpg'
            
        ],
        'description': 'The definitive activitie',
        'price': 150,
        'duration': 1,
        'userId':  '636c179503533f0d08013856',
    },
    {
        'cityId': '636c276b651a6e132a2d0cae',
        'name': 'Orlando',
        'photo': [
            
                 'https://www.viajarmiami.com/img/parques-walt-disney-orlando.jpg'
            ,
            
                'https://www.experiencekissimmee.com/sites/default/files/listing_549_23.jpg'
            ,
            
                 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/69/f3/0c/universal-orlando-resort.jpg?w=1200&h=1200&s=1'
            
        ],
        'description': 'The definitive activitie',
        'price': 599,
        'duration': 1,
        'userId':  '636c179503533f0d08013854',
    }

]

require('dotenv').config()
require('../../config/database')
const Itinerary = require('../Itinerary')

itinerary.forEach(elemento=> {
    Itinerary.create({
        name: elemento.name,
        photo: elemento.image,
        description: elemento.description,
        price: elemento.price,
        duration: elemento.duration,
    })
})