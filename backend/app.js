// import
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const FileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors');     // Django 서버와 통신하기 위함
const { passport } = require('./utils/auth');
// dotenv
dotenv.config({
  path:path.join(__dirname, '.env')
});



// 앱 실행
const testRouter = require('./routes/test');
// const userRouter = require('./routes/user');
const recipeRouter = require('./routes/recipe');
const searchRouter = require('./routes/search');
const app = express()
app.set('port', process.env.PORT || 3000);



// 미들웨어
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
	origin: true,
	credentials: true,
}));                                // Django 서버와 통신하기 위함


// 라우터
app.use('/test', testRouter);
// app.use('/user', userRouter);
app.use('/recipe', recipeRouter);
app.use('/search', searchRouter);

app.get('/', (req, res) => {
  res.send('hello node')
})


// 에러 미들웨어
//404
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url} 라우터가 없습니다.`);
  res.status(404).redirect('/');
})

//err middleware
app.use((err, req, res, next) => {
  console.log('app.js error! redirect main page.');
  console.log(err);
  res.redirect('/');
})



app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});