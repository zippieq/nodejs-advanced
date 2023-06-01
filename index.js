const express = require('express');


const app = express();

const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
}
app.get('/', (req, res) => {
    doWork(5000);
    res.send(' Hi There');
})

app.listen(3000);