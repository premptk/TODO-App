import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "black",
  },
  header: {
    fontSize: "20px",
    fontFamily: "'Inter-Regular', Helvetica",
    fontWeight: "400",
    lineHeight: "16px",
  },
  workheader: {
    display: "flex",
    gap: "auto",
    fontSize: "10px",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  subheader: {
    marginRight: "auto", 
  },
  date: {
    marginLeft: "auto", 
    fontSize: "10px",
  },
});

const Working = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.header}>Rupeek</div>
        <div className={classes.workheader}>
          <div className={classes.subheader}>
            Software Development Engineer - 1 (SDE-1)
          </div>
          <div className={classes.date}>2023 - Present</div>
        </div>
        <div className={classes.pointers}>
          <ul>
            <li>Created Website</li>
            <li>Created Reward Engine</li>
          </ul>
        </div>
        <div className={classes.skills}>
          <ul>
            <li>NextJs</li>
            <li>Javscript</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Working;
