import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
  },
  header: {
    color: '#ccd6f6',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: '10px 0px 40px',
    fontSize: 'clamp(26px, 5vw, var(--fz-heading))',
    whiteSpace: 'nowrap',
  },
  hr: {
    width: '100px',
    margin: '0 10px',
    borderColor: 'cyan',
    borderStyle: 'solid',
    borderWidth: '3px 0 0 0',
  },
  image: {
    width: '50%',
  },
  h2: {
    fontSize: '35px',
    position: 'relative',
    '&::before': {
      content: '"01."',
      position: 'absolute',
      top: '50%', 
      transform: 'translateY(-50%)', 
      right: '100%',
      marginRight: '10px',
      color: 'cyan',
      fontFamily: "'Lucida Console', 'Courier New', monospace",
      fontSize: '20px',
      fontWeight: 400
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%', 
      transform: 'translateY(-50%)', 
      display: 'inline-block',
      width: '200px',
      margin: '0 10px',
      borderTop: '1px solid #427474',
      marginLeft: '20px',
    },
  }
});

const IndexHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.h2}>About Me</h2>
      </div>
    </div>
  );
};

export default IndexHeader;
