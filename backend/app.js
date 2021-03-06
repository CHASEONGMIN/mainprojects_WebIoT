// import
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

// dotenv
dotenv.config({
  path:path.join(__dirname, '.env')
});


// router require
const userRouter = require('./routes/user');
const recipeRouter = require('./routes/recipe');
const authRouter = require('./routes/auth');
const app = express();
const iotRouter = require('./routes/iot');
app.set('port', process.env.PORT || 3000);


// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// django와 통신하기 위함
app.use(cors({
	origin: true,
	credentials: true,
}));


// router
app.use('/user', userRouter);
app.use('/recipe', recipeRouter);
app.use('/auth', authRouter);
// backend app.js 에서 추가하는 라우터 코드
app.use('/iot', iotRouter);

app.get('/', (req, res) => {
  console.log('hello node')
  res.send('hello node')
})


//404 middleware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url} 라우터가 없습니다.`);
  res.status(404).send('404 error');
})

//err middleware
app.use((err, req, res, next) => {
  console.log('app.js error!');
  console.log(err);
  res.status(500).send('server error');
})



app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});