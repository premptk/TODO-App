import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    height: '540px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  para1: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  para2: {
    fontSize: '40px',
    transition: 'opacity 0.5s, transform 0.5s',
    color: 'cyan',
  },
  para3: {
    fontSize: '16px',
    opacity: 0.5,
    marginTop: '20px',
  },
  exploreMoreButton: {
    padding: '30px 0px',
  },
  buttonStyle: {
    backgroundColor: 'cyan',
    color: 'black',
    padding: '4px 12px 4px 12px',
    border: '1px solid transparent',
    fontSize: '1rem',
    lineHeight: 1.5,
    borderRadius: '0.25rem',
    fontWeight: '400',
  },
});

const Header = () => {
  const classes = useStyles();
  const [role, setRole] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRole(!role);
    }, 2000);

    return () => clearTimeout();
  }, [role]);

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <div className={classes.subHeaderWrapper}>
          <div className={classes.para1}>Prem Ranjan Pattanayak</div>
          <div
            className={classes.para2}
          >
            {role ? 'Full Stack Developer' : 'Data Science'}
          </div>
          <div className={classes.para3}>
            {' '}
            B.Tech CSE (Computer Science and Engineering) grad with a strong
            passion for software development. I have gained a solid foundation
            in various computer science concepts and acquired practical
            experience through internships at prominent companies such as
            Samsung and Rupeek.
          </div>
          <div className={classes.para3}>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            reiciendis dolor at ipsum labore consectetur ab! Hic saepe omnis
            tenetur. Earum quibusdam in eligendi, ad quam dolores dolore
            incidunt error. Velit consequatur cum asperiores soluta voluptatem
            ipsum maiores tempore. Labore id quidem nisi quod!
          </div>
          <div className={classes.exploreMoreButton}>
            <button className={classes.buttonStyle} type='submit'>Explore More</button>
          </div>
        </div>
        <div className={classes.frameWrapper}>
          <iframe
            src='../../../public/images/giphy.gif'
            width="100%"
            height="100%"
            frameBorder="0"
            title="GIF"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Header;