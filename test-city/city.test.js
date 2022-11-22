const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /api/cities/:id', function(){
    
    it('Deberia traerme un array de objetos', function (done){
        
        request(app)
            .get('/api/cities')
            .expect(response =>{
                assert.typeOf(response.body.allcities, 'array')
                response.body.allcities.forEach(e => {
                    assert.typeOf(e, 'object')
                })
            })
            .end(function(err, res) {
                if(err){
                    return done(err)
                }
                done()  
            })
    })


})

/* describe('GET /api/cities/:id', function(){
    
    it('Deberia traerme una ciudad', function (done){
        
        request(app)
            .get('/api/cities/636d6b01319c760fc3cf34f9')
            .expect(response =>{
                assert.typeOf(response.body.city, 'array')
            })
            .end(function(err, res) {
                if(err){
                    return done(err)
                }
                done()  
            })
    })


}) */

/* describe('POST /api/cities', function() {
    it('Se creo una frikin ciudad', function(done) {
      request(app)
        .post('/api/cities')
        .send({
            "title": true,
            "continent": "America",
            "image": "https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg",
            "population": 11098000,
            "userId": "636c179503533f0d08013855"
        }) 
        .expect(response => {
            assert.typeOf(response.city.title, 'string')
        })
        .end(function(err, res) {
            if(err){
                return done(err)
            }
            done()  
        })
    });
  }); */
