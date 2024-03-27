import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    height: '540px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerWrapper: {
    width: '90%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  frameWrapper: {
    width: '50%',
  },
  subHeaderWrapper: {
    width: '100%',
    marginLeft: '60px',
    marginRight: '60px',
  },
  para0: {
    margin: '0px 0px 30px 4px',
    color: 'cyan',
    fontFamily: "'Lucida Console', 'Courier New', monospace",
    fontSize: '16px',
    fontWeight: 400
  },
  para1: {
    marginBottom: '20px',
    fontSize: 'clamp(40px, 8vw, 80px)',
    color: '#ccd6f6',
    lineHeight: 1.1,
    fontWeight: 600,
  },
  para2: {
    marginTop: '5px',
    color: '#8892b0',
    lineHeight: 0.9,
    fontSize: 'clamp(40px, 8vw, 80px)',
    fontWeight: 600,
    transition: 'opacity 0.5s, transform 0.5s',
  },
  para3: {
    color: '#8892b0',
    fontFamily: "'Lucida Console', 'Courier New', monospace",
    marginTop: '20px',
    lineHeight: 1.3,
    width: '80%',
    display: 'inline-block'
  },
  textPara: {
    margin: '0',
    borderRight: '5px solid',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: '$typing 3s steps(18), $cursor 0.5s step-end infinite alternate'
  },
  exploreMoreButton: {
    padding: '30px 0px',
  },
  buttonStyle: {
    color: 'cyan',
    backgroundColor: 'transparent',
    border: '1px solid cyan',
    borderRadius: '5px',
    padding: '15px 15px',
    lineHeight: 1,
    fontSize: 'clamp(10px, 8vw, 15px)',
    fontFamily: "'Lucida Console', 'Courier New', monospace",
    textDecoration: 'none',
    marginTop: '10px',
    fontWeight: 400,
  },
  '@keyframes cursor': {
    '50%': { borderColor: 'transparent' }
  },
  '@keyframes typing': {
    '0%': { width: '0' },
    '50%': { width: '100%' },
    '100%': { width: '100%' }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <div className={classes.subHeaderWrapper}>
          <div className={classes.para0}>Hi, my name is</div>
          <div className={classes.para1}>Prem Ranjan Pattanayak.</div>
          <div className={classes.para2}>
            <p className={classes.textPara}>I build Things for Web.</p>
          </div>
          <p className={classes.para3}>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at
          </p>
          <div className={classes.exploreMoreButton}>
            <button className={classes.buttonStyle} type='submit'>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
