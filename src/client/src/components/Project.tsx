import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Path regex matching example
type ProjectParams = { id: string };
const Project = ({ match }: RouteComponentProps<ProjectParams>) => (
  <React.Fragment>
    <h3>Path Regex Matching Example</h3>
    <p>Project Path ID: {match.params.id}</p>
  </React.Fragment>
);

export default Project;
