import { createUseStyles } from 'react-jss';
import Image from 'next/image';

const useStyles = createUseStyles({
  subHeaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    position: 'sticky',
    top: '0px',
    paddingTop: '50px'
  },
  para1: {
    fontSize: '40px',
    marginBottom: '20px',
    color: 'cyan'
  },
  para2: {
    fontSize: '16px',
    opacity: 0.5,
    marginTop: '20px',
  },
});

const Experience = () => {
    const classes = useStyles();

  return (
    <>
      <div className={classes.subHeaderWrapper}>
        <div className={classes.para1}>Experience</div>
        <div className={classes.para2}>
          B.Tech CSE (Computer Science and Engineering) grad with a strong
          passion for software development. I have gained a solid foundation in
          various computer science concepts and acquired practical experience
          through internships at prominent companies such as Samsung and Rupeek.
        </div>
      </div>
    </>
  );
}

export default Experience;