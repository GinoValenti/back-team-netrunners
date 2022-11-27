const app= require('../app')
const request= require('supertest')

describe('DELETE /api/shows/6383f4c3d345ab17cd0bf1ad',(done)=>{
    it('verificar que se elimine un show',(done)=>{
        request(app)
        .delete('/api/shows/6383f4c3d345ab17cd0bf1ad')
        .expect(200)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            console.log
        })
        done();
    })

})