let createError = require('http-errors');
let express = require('express');
let socket = require('socket.io');
let path = require('path');
let cookieParser = require('cookie-parser'); 
let bodyParser = require('body-parser')
let apiRouter = require('./routes/api');
let logger = require('morgan');
let smsRouter = require('./routes/sms');
let session = require('express-session');
let withAuth = require('./middleware')





let app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/v1/', apiRouter);
app.use('/api/v1/sms', smsRouter);
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000000
    }
  })
)

// function checkAuthentication(req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     res.send('you are not logged in')
//   }
// }



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
})

app.get('/api/secret', withAuth, function (req, res) {
  res.send('The password is potato');
});
app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});


io = socket();

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('send_private', function (data) {
    console.log(socket.id)
    console.log(data.id)
    console.log(data.message)
    io.to(socket.id).emit('receive_private', data)
  })
})




app.io = io

module.exports = app;