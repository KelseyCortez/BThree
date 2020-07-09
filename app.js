let createError = require('http-errors');
let express = require('express');
let socket = require('socket.io')
let path = require('path');
let cookieParser = require('cookie-parser');
let apiRouter = require('./routes/api');
let logger = require('morgan');
let smsRouter = require('./routes/sms');

let app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/v1/', apiRouter);
app.use('/api/v1/sms', smsRouter);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
})

// error handler
app.use(function(err, req, res, next) {
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

  socket.on('SEND_MESSAGE', function(data) {
    io.emit('RECEIVE_MESSAGE', data)
  })
})

app.io = io

module.exports = app;