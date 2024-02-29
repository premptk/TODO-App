import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Content from './Component/Content';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  setDiv: {
    position: 'relative', 
    minHeight: '100vh',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('/images/background-dark.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(8px)',
    zIndex: -1, 
  },
});

export default function Hello() {
  const classes = useStyles();

  return (
    <div className={classes.setDiv}>
      <div className={classes.backgroundImage}></div>
      <Navbar />
      <Header />
      <Content />
    </div>
  );
}
