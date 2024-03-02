import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "rgb(255 255 255 / 10%)",
    padding: "30px 30px",
    backdropFilter: "blur(10px)",
    borderRadius: "13px",
  },
  header: {
    fontSize: "25px",
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
    margin: "18px 0px",
  },
  subheader: {
    marginRight: "auto",
    fontSize: "21px",
  },
  date: {
    marginLeft: "auto",
    fontSize: "16px",
  },
  pointers: {
    marginBottom: "10px",
    fontWeight: 200,
  },
  skills: {
    display: "flex",
    justifyContent: "flex-start",
  },
  skillsHeader: {
    width: "15%",
    fontSize: "18px",
  },
  bulletSkills: {
    display: "flex",
    width: "85%",
    flexWrap: "wrap",
  },
  eachSkill: {
    border: "2px black solid",
    borderRadius: "25px",
    padding: "6px",
    fontSize: "14px",
    backgroundColor: "#5d9fb0",
    color: "white",
    fontWeight: 600,
  },
});

const Working = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
          <div className={classes.header}>{data.company}</div>
          {data.positions.map((eachExperience, idx) => (
            <div key={idx}>
              <div className={classes.workheader}>
                <div className={classes.subheader}>{eachExperience.title}</div>
                <div className={classes.date}>{eachExperience.date}</div>
              </div>
              <div className={classes.pointers}>
                <ul>
                  {eachExperience.experience.map((element, subIdx) => (
                    <li key={subIdx}>{element}</li>
                  ))}
                </ul>
              </div>
              <div className={classes.skills}>
                <div className={classes.skillsHeader}>Skills:</div>
                <div className={classes.bulletSkills}>
                  {eachExperience.skills.map((skill, subIdx) => (
                    <div key={subIdx} className={classes.eachSkill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Working;
