const express = require('express')
const app = express()
const port = 3000

app.get('/', (res) => {
    res.send('OK!')
})

app.get('/:date', (req, res) => {
    let moment = require('moment');

    let year = (new Date()).getFullYear();
    let str = parseInt(year + req.params['date']);

    let date = moment(str, "YYYY-DD-MM").format('YYYY-MM-DD');

    res.send(date);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})