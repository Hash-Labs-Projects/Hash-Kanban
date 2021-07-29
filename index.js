// @dev environmental configuration
const dotenv = require('dotenv')
dotenv.config();

// @dev Port selection
// @dev On production host machine will automatically set available port through environment
const PORT = process.env.PORT || 4000;

// @dev http server configuration
const http = require('http')
const app = require('./app')

// @dev handling 404 api request
app.use((req, res) => res.status(404).json({message: "404 API not found!"}))

http.createServer(app).listen(PORT, err => {
    if(err) return console.log(err);
    console.log(`Server Running => ${PORT}...`)
});