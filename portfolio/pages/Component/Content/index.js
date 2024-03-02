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
    alignItems: 'start'
  },
  secondPart: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  }
});

const Content = () => {
  const classes = useStyles();
  const workingData = [
    {
      company: 'Rupeek',
      positions: [
        {
          title: 'Software Development Engineer (SDE-1)',
          date: 'Aug 2023 - Present',
          experience: [
            "Spearheaded the design and implementation of India’s first Gold-backed Credit card’s Digital Journey, leveraging NextJs & Strapi;revolutionized digital experiences for customers,resulting in a 40% increase in user engagement and a 25% boost in card applications.",
            "Created Authenticated flow for Web using NextAuth.js and performing AB Experiment fortarget audience using Flagsmith.",
            "Integrated our internal microservice Reward Engine with third-party SAAS provider, increasing customer acquisition by 25% by Gamification and Reward distribution."
          ],
          skills: [
            "NextJs",
            "Javascript",
            "Java"
          ]
        },
        {
          title: 'SDE Intern',
          date: 'Jan 2023 - Aug 2023',
          experience: [
            "Developed and implemented an integrated product analytics suite enabling comprehensive Funnel analysis, optimized retention strategies, and enhanced user engagement.",
            "Created end-to-end Automation suites for API Testing for various post-disbursement activities on loan closure using Java & Gherkin."
          ],
          skills: [
            "NextJs",
            "Javascript",
            "Java",
            "Gherkin"
          ]
        }
      ]
    },
    {
      company: 'Samsung',
      positions: [
        {
          title: 'Research Intern',
          date: 'Aug 2021 - Feb 2022',
          experience: [
            "Constructed various Machine Learning Techniques for Network Element Fault Management Systems for 5G LTE Technology by leveraging Samsung’s Internal Tools.",
            "Lead the team and attended various workshops for Automatic Speech Recognition technology (ASR) organized by Samsung"
          ],
          skills: [
            "Python",
            "Data Science",
            "Machine Learning"
          ]
        }
      ]
    },
    {
      company: 'ATPLC',
      positions: [
        {
          title: 'Machine Learning Intern',
          date: 'Jun 2021 - Aug 2021',
          experience: [
            "Designing, architecting, and developing high-quality deep learning models and algorithms for object detection and segmentation problems andd Reading, understanding, implementing, and experimenting with new research papers."
          ],
          skills: [
            "Python",
            "Data Science",
            "Machine Learning"
          ]
        }
      ]
    }
  ];
  

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.headerWrapper}>
        <Experience />
      </div>
      <div className={classes.secondPart}>
        {workingData.map(element => (
          <Working key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
};

export default Content;
