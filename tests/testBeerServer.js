import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should';

// UNIT test begin
describe('Beer Server test', function () {

  

    this.timeout(120000);
    // test #1: return a collection of json documents
    it('should return collection of JSON documents', function (done) {
        supertest(app)
            .get('/server/beers')
            .expect('Content-type', /json/)
            .expect(200) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(200);
                done();
            });
    });

    // test #2 add a beer
    it('should add a beer', function (done) {
        supertest(app)
            .post('/server/beers')
            .send({
                category: "Ale",
                name: 'Triple IPA',
                abv: 'ABV: 16',
                color: 'Color: deep amber',
                description: 'be ready for this one',
                examples: 'James Special Ale'
            })
            .expect('Content-type', /json/)
            .expect(201)
            .then ((res) => {
                res.status.should.equal(201);
                res.body.should.have.property('_id');
                res.body.name.should.equal('Triple IPA');
                done();
            });
    });


});