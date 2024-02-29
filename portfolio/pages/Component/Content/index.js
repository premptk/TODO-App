import { createUseStyles } from 'react-jss';
import Experience from '../AtomicComponent/Experience';
import Working from '../AtomicComponent/Working';

const useStyles = createUseStyles({
  mainWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    width: '90%',
    margin: '0 auto',
    gap: '40px'
  },
  headerWrapper: {
    width: '40%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '90px',
  },
  secondPart: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  }
});

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <Experience />
      </div>
      <div className={classes.secondPart}>
        <Working />
      </div>
    </div>
  );
};

export default Content;
