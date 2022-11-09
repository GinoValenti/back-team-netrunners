let cities = [
    {
 
        'title': 'Buenos Aires',
        'continent': 'America',
        'image': 'https://www.buenosaires.gob.ar/sites/gcaba/files/al_avenida_9_dejulio.jpg',
        'population':  125000000,
        'userId':  '636c179503533f0d08013855',
    },
    {
 
        'title': 'Ciudad de Mexico',
        'continent': 'America',
        'image': 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/mexico_ciudaddemexico_paseoreforma_angelindependencia_shutterstockrf_1066463744_aberu.go_shutterstock.jpg?itok=MjJFsqoK',
        'population':  1500000,
        'userId':  '636c179503533f0d08013855',
    },
    {
   
        'title': 'Lima',
        'continent': 'America',
        'image': 'https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013855',
    },
    {
 
        'title': 'London',
        'continent': 'Europe',
        'image': 'https://utopiaurbana.city/wp-content/uploads/2022/09/Rutas-por-Londres.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013855',
    },
    {

        'title': 'Moskau',
        'continent': 'Europe',
        'image': 'https://www.urlaubstracker.at/wp-content/uploads/2019/09/russland-moskau-roter-platz-abends.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013856',
    },
    {
  
        'title': 'Orlando',
        'continent': 'America',
        'image': 'https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013856',
    },
    {

        'title': 'Paris',
        'continent': 'Europe',
        'image': 'https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013856',
    },
    {

        'title': 'Rio de Janeiro',
        'continent': 'America',
        'image': 'https://content.r9cdn.net/rimg/dimg/54/ed/eb0f657a-lm-159298-16d6b936db3.jpg?crop=true&width=1020&height=498',
        'population':  1500000,
        'userId':  '636c179503533f0d08013856',
    },
    {
   
        'title': 'Rosario',
        'continent': 'America',
        'image': 'https://i.ytimg.com/vi/Z5aOLVHZCHE/maxresdefault.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013854',
    },
    {
    
        'title': 'Sidney',
        'continent': 'Australia',
        'image': 'https://viajes.nationalgeographic.com.es/medio/2017/02/13/shutterstock-209684521_fd608903.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013854',
    },
    {
     
        'title': 'Tokyo',
        'continent': 'Asia',
        'image': 'https://a.cdn-hotels.com/gdcs/production26/d1450/64fe038c-0da0-413f-9fcd-dbb337ce3012.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013854',
    },
    {
     
        'title': 'Toronto',
        'continent': 'America',
        'image': 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/toronto/167_3_2254_tif_medium_7465353d-756d-4e13-b610-d938dde974a5.jpg',
        'population':  1500000,
        'userId':  '636c179503533f0d08013853',
    }
]

require('dotenv').config()
require('../../config/database')
const City = require('../City')

cities.forEach(elemento=> {
    City.create({
        title: elemento.title,
        continent: elemento.continent,
        image: elemento.image,
        population: elemento.population,
        userId: elemento.userId,
    })
})