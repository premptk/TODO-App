import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Content from './Component/Content';
import Projects from './Component/Projects';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  overallBackground: {
    backgroundColor: '#0f1d3a',
    zIndex: -1, 
  },
});

export default function Hello() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.overallBackground}>
        <Navbar />
        <Header />
        <Content />
        {/* <Projects /> */}
      </div>
    </>
  );
}
