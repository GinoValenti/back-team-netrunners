const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

//verificar status 404 cuando el filtro no encuentra un hotel

  describe('GET /api/hotels?name=asgkfasla', function () {
    
 
    it('Must respond with 404 status code', function (done) {
        request(app)
            .get('/api/hotels?name=asgkfasla')
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    })
})
 

//VERIFICAR QUE EL USUARIO ENVIA UN NUMBER EN EL CAMPO CAPACITY
 describe('POST /api/hotels/', function () {

    let hotel = {
        name: "prueba",
            photo: [
                "https://www.tripsavvy.com/thmb/k39AA6dtCIbao7bsVyy5HDz7AJo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=1200&h=-1&s=1",
                "https://static.vecteezy.com/system/resources/previews/001/435/803/large_2x/sydney-australia-2020-sydney-opera-house-at-night-free-photo.jpeg"
            ],
            capacity:1000,
            citiId: "636d6b01319c760fc3cf34f7",
            userId: "636c179503533f0d08013855"
    }
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/api/hotels/')
            .send(hotel)
            .expect(res => {
               
              assert.isNumber(res.body.new_hotel.capacity)
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
}) 

//VERIFICAR STATUS 201 AL CREAR HOTEL

describe('POST /api/hotels/', function () {

    let hotel = {
        name: "prueba",
            photo: [
                "https://www.tripsavvy.com/thmb/k39AA6dtCIbao7bsVyy5HDz7AJo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=1200&h=-1&s=1",
                "https://static.vecteezy.com/system/resources/previews/001/435/803/large_2x/sydney-australia-2020-sydney-opera-house-at-night-free-photo.jpeg"
            ],
            capacity:1000,
            citiId: "636d6b01319c760fc3cf34f7",
            userId: "636c179503533f0d08013855"
    }
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/api/hotels/')
            .send(hotel)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
})
 
