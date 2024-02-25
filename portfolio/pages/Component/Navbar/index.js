import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    padding: '15px 40px',
    justifyContent: 'flex-end',
  },
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
