import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: '#fff',
    padding: '15px 40px',
  },
  logoWrapper: {},
  pagesWrapper: {
    display: 'flex',
    width: '35%',
    justifyContent: 'space-between',
  },
  page: {},
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainWrapper}>
        <div className={classes.logoWrapper}>Prem Ranjan Pattanayak</div>
        <div className={classes.pagesWrapper}>
          <p className={classes.page}>Resume</p>
          <p className={classes.page}>Projects</p>
          <p className={classes.page}>About Me</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
