const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

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