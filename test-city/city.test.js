const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

// Test de borrar una ciudad

describe('delete /api/cities/citiesDelete/:id', function (){
    it('Deberia borrar una ciudad', function (done) {
        request(app)
            .delete('/api/cities/citiesDelete/6383fe89bcabbb92811f7e59')
            .expect(response => {
                assert.equal(response.status, 200, 'La ciudad deberia haberse borrado')
            })
            .end(function (err, res){
                if (err) {
                    return done(err)
                }
                done()
            })
    })
})


/* describe('GET /api/cities/:id', function(){
    
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


}) */

/* describe('GET /api/cities/:id', function(){
    
    it('Deberia traerme un array', function (done){
        
        request(app)
            .get('/api/cities')
            .expect(response =>{
                assert.typeOf(response.body.allcities, 'array')
            })
            .end(function(err, res) {
                if(err){
                    return done(err)
                }
                done()  
            })
    })


}) */

/* describe("GET /api/cities/?title", () => {

  it("Deberia traerme la ciudad",

    function (done) {
        let intentionalError = 'Error 404';
        let intentionalNotError = 'Ba'
      request(app)
      .get(`/api/cities?/title=London`)
      .expect(200, done);

    })}); */

/* describe('POST /api/cities', function() { */
/* describe('POST /api/cities', function() {
    it('Se creo una frikin ciudad', function(done) {
      request(app)
        .post('/api/cities')
        .send({
            "title": "Bromita",
            "continent": "America",
            "image": "https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg",
            "population": 11098000,
            "userId": "636c179503533f0d08013855"
        }) 
        .expect(response => {
            assert.typeOf(response.city.body, string)
        })
        .end(function(err, res) {
            if(err){
                return done(err)
            }
            done()  
        })
        
    });
  }); */
