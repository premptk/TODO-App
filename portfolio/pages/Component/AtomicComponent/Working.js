import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: 'rgb(255 255 255 / 10%)',
    padding: "30px 30px",
    backdropFilter: 'blur(10px)',
    borderRadius: '13px'
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
    marginBottom: '10px',
    fontWeight: 200
  },
  skills: { 
    display: "flex",
    justifyContent: 'flex-start'
  },
  skillsHeader: {
    width: '15%',
    fontSize: '18px'
  },
  bulletSkills: { 
    display: "flex", 
    width: '85%',
    flexWrap: 'wrap'
  },
  eachSkill: {
    border: '2px black solid',
    borderRadius: '25px',
    padding: '6px',
    fontSize: '14px',
    backgroundColor: '#5d9fb0',
    color: 'white',
    fontWeight: 600
  }
});

const Working = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.header}>Rupeek</div>
        <div className={classes.workheader}>
          <div className={classes.subheader}>
            Software Development Engineer - 1
          </div>
          <div className={classes.date}>August 2023 - Present</div>
        </div>
        <div className={classes.pointers}>
          <ul>
            <li>
              Designed and implemented Digital Journey for India’s first
              Gold-backed Credit card, facilitating seam- less digital
              experiences using NextJs & Strapi.
            </li>
            <li>
              Created Authenticated flow for both Mobile App & Web using
              NextAuth, integrated Auth API’s and enabling user to bypass OTP by
              using session-token in cookie.
            </li>
          </ul>
        </div>
        <div className={classes.skills}>
          <div className={classes.skillsHeader}>Skills:</div>
          <div className={classes.bulletSkills}>
            <div className={classes.eachSkill}>NextJs</div>
            <div className={classes.eachSkill}>Javascript</div>
            <div className={classes.eachSkill}>NextJs</div>
            <div className={classes.eachSkill}>NextJs</div>
            <div className={classes.eachSkill}>NextJs</div>
            <div className={classes.eachSkill}>NextJs</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
