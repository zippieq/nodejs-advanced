const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');
if(cluster.isMaster){
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();

} else {
    console.log(cluster.isMaster);
    const app = express();
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send(' Hi There');
        });
    })
    app.get('/fast', (req, res) => {
        res.send(' fast');
    })
    app.listen(3000);
};
