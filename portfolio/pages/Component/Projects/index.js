import Card from '../AtomicComponent/ProjectCard';

// Projects component
const Projects = () => {
  // Sample data for demonstration
  const projectData = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
