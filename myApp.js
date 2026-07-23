let express = require('express');
let app = express();

require('dotenv').config();

//Body parser middleware to parse POST request data, variable named bodyParser
let bodyParser = require('body-parser');

//Mount the body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// GET home page.
// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });

// GET file from views folder
// absolutePath = __dirname + '/views/index.html';
// app.get('/', (req, res) => {
//     res.sendFile(absolutePath);
// });

// GET file from public folder
// const publicPath = __dirname + '/public';
// app.use('/public', express.static(publicPath));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

//Create API endpoint with sending JSON data
// app.get('/json', (req, res) => {
//     res.json({message: 'Hello json'});
// });

//Display message in uppercase if MESSAGE_STYLE is set to uppercase in .env file
// app.get('/json', (req, res) => {
//     let msg = 'Hello json';
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//         msg = msg.toUpperCase();
//     }    
//     res.json({message: msg});
// });

// Root-level request logger middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

//In the route app.get('/now', ...) chain a middleware function and the final handler.
//The /now endpoint should have mounted middleware
// app.get('/now', (req, res, next) => {
//     // Middleware: attach current time to req object
//     req.time = new Date().toString();
//     next(); // Pass control to the next handler in the chain
// }, (req, res) => {
//     // Final handler: send response
//     res.json({ time: req.time });
// });


//Build an echo server, mounted at the route GET /:word/echo. Respond with a JSON object, taking the structure {echo: word}odecamp/echo.
// app.get('/:word/echo', (req, res) => {
//     const word = req.params.word;
//     res.json({ echo: word });
// });


//Pass the function returned by the previous method call to app.use(). As usual, the middleware must be mounted before all the routes that depend on it.
app.use('/name', (req, res, next) => {
    const firstName = req.query.first;
    const lastName = req.query.last;
    req.fullName = `${firstName} ${lastName}`;
    next();
});


//Build an API endpoint, mounted at GET /name. Respond with a JSON document, taking the structure { name: 'firstname lastname'}. The first and last name parameters should be encoded in a query string e.g. ?first=firstname&last=lastname.
// use the method app.route(path).get(handler).post(handler)
app.route('/name').get((req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({ name: `${firstName} ${lastName}` });
});



//Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object req.body.
//Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.
app.route('/name').post((req, res) => {
    const firstName = req.body.first;
    const lastName = req.body.last;
    res.json({ name: `${firstName} ${lastName}` });
});


























 module.exports = app;
