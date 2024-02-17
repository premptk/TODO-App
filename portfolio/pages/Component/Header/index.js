import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainWrapper: {
    height: '550px',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    marginBottom: '20px', // Adjust margin as needed
    display: 'flex',
    flexDirection: 'row',
  },
  frameWrapper: {
    width: '30%',
  },
  subHeaderWrapper: {
    textAlign: 'center', // Center text horizontally
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <div className={classes.frameWrapper}>
          <iframe
            src='https://giphy.com/embed/kKefeMw8rbMVq'
            width='100%'
            height='100%'
            frameBorder='0'
            title='GIF'
            allowFullScreen
          ></iframe>
        </div>
        <div className={classes.subHeaderWrapper}>Hello</div>
      </div>
    </div>
  );
};

export default Header;
