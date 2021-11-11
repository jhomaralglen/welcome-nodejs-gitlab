process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);


describe('/GET home', () => {
    it('it should response Welcome to Your App', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.equal('Welcome to Your App');
            done();
        });
    });
});

describe('/GET health', () => {
    it('it should response Healthy', (done) => {
    chai.request(server)
        .get('/health')
        .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.equal('Healthy');
            done();
        });
    });
});