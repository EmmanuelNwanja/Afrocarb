const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

//Health check route
app.get('/', (req, res) => {
    res.send('this is a healthcheck route')
})

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))