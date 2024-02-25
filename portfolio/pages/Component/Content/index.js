import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    height: '550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    width: '80%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '90px', 
  },
  subHeaderWrapper: {
    width: '40%',
    marginLeft: '25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px'
  },
  subHeaderWrapper2: {
    width: '40%',
    marginLeft: '25px',
    display: 'flex',
    gap: '20px',
    marginBottom: '40px'
  },
  secondPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  para1: {
    fontSize: '40px',
    marginBottom: '20px'
  },
  para2: {
    fontSize: '16px',
    opacity: 0.5,
    marginTop: '20px',
  },
  para3: {
    fontSize: '18px',
    marginTop: '20px',
    color: 'white',
    // textAlign: 'center'
  },
  AboutMe: {
    fontSize: '20px',
    opacity: 0.8,
    marginTop: '20px',
  }
});

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <div className={classes.subHeaderWrapper}>
          <div className={classes.para1}>Prem Ranjan Pattanayak</div>
          <div className={classes.para2}> B.Tech CSE (Computer Science and Engineering) grad with a strong passion for software development. I have gained a solid foundation in various computer science concepts and acquired practical experience through internships at prominent companies such as Samsung and Rupeek.</div>
          <div className={classes.para3}>About</div>
          <div className={classes.para3}>Experience</div>
          <div className={classes.para3}>Project</div>
          <div className={classes.para3}>Publications</div>
        </div>

        <div className={classes.secondPart}>
          <div className={classes.subHeaderWrapper2}>
            <div className={classes.AboutMe}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa cum dignissimos harum non nesciunt fugit delectus quisquam. Quae nisi harum, voluptas architecto cupiditate recusandae, aperiam nam beatae non dignissimos molestiae odio? B.Tech CSE (Computer Science and Engineering) grad with a strong passion for software development. I have gained a solid foundation in various computer science concepts and acquired practical experience through internships at prominent companies such as Samsung and Rupeek.</div>
          </div>

          <div className={classes.subHeaderWrapper2}>
            <div className={classes.AboutMe}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa cum dignissimos harum non nesciunt fugit delectus quisquam. Quae nisi harum, voluptas architecto cupiditate recusandae, aperiam nam beatae non dignissimos molestiae odio? B.Tech CSE (Computer Science and Engineering) grad with a strong passion for software development. I have gained a solid foundation in various computer science concepts and acquired practical experience through internships at prominent companies such as Samsung and Rupeek.</div>
          </div>

          <div className={classes.subHeaderWrapper2}>
            <div className={classes.AboutMe}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa cum dignissimos harum non nesciunt fugit delectus quisquam. Quae nisi harum, voluptas architecto cupiditate recusandae, aperiam nam beatae non dignissimos molestiae odio? B.Tech CSE (Computer Science and Engineering) grad with a strong passion for software development. I have gained a solid foundation in various computer science concepts and acquired practical experience through internships at prominent companies such as Samsung and Rupeek.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
