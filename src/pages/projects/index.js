import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Project } from '@/layouts/Home/Project';
import { projects } from '../../../data/projects';

import styles from './Projects.module.css';

const index = () => {
  const totalProjects = projects.length;
  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      className={styles.section}
    >
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            item={project}
            totalProjects={
              totalProjects <= 9 ? `0${projects.length}` : projects.length
            }
          />
        );
      })}
    </Container>
  );
};

export default index;
