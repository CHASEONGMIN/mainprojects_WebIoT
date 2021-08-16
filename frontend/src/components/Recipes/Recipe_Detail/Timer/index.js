//주의 : 이 컴포넌트는 App.js기준으로 작성되어있음.

import React, { Component } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  makeStyles,
  Box
} from '@material-ui/core';

class RecipeTimer extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);

    if(c_seconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

      // minutes change
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      // when only hours entered
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }

      // hours change
      if(c_seconds % 3600 === 0 && hours) {
        this.setState({hours: hours-1});
      }

    } else {
      clearInterval(this.timer);
    }
  }


  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }


  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      
        <Box bgcolor="error.light" p={2}>
          <Container>
          <Typography variant="h2" align="center">Timer</Typography>
          <hr></hr>
          <Typography variant="h5" align="center">시간 설정하기</Typography>
          <Grid container >
            <Grid item xs={4} p={1}>
              <input ref={this.hoursInput} type="number" placeholder={'HH'}  name="hours"  onChange={this.inputHandler}/>
            </Grid>  
            <Grid item xs={4}>
              <input  ref={this.minutesInput} type="number"  placeholder={'MM'}   name="minutes"  onChange={this.inputHandler} />
            </Grid>
            <Grid item xs={4}>
              <input   ref={this.secondsInput} type="number"  placeholder={'SS'}  name="seconds"  onChange={this.inputHandler} />
            </Grid>
          </Grid>
          <hr></hr>
          <Typography variant="h5" align="center">남은 시간</Typography>
          <Grid container>
            <Grid item xs={4} align="center">
              {hours}
            </Grid>  
            <Grid item xs={4} align="center">
              {minutes}
            </Grid>
            <Grid item xs={4} align="center">
              {seconds}
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container>
            <Grid item xs={4} align="center">
              <Button onClick={this.startTimer} className="start" variant="contained" color="error.main">START</Button>
            </Grid>  
            <Grid item xs={4} align="center">
              <Button onClick={this.stopTimer}  className="stop" variant="contained">STOP</Button>
            </Grid>
            <Grid item xs={4} align="center">
              <Button onClick={this.resetTimer}  className="reset" variant="contained">RESET</Button>
            </Grid>
          </Grid>
          </Container>
        </Box>
      
      
        

      

    );
  }
}

export default RecipeTimer;