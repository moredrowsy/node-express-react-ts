import React from 'react';
import { useParams } from 'react-router-dom';

interface ProjectProps {
  title: string;
}
interface ProjectParams {
  id: string;
}

// Path regex matching example
const Project = (props: ProjectProps) => {
  const params: ProjectParams = useParams();

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>Project Path ID: {params.id}</p>
    </React.Fragment>
  );
};

export default Project;
