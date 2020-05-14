import React from 'react';

interface Props {
  title: string;
}

const About: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Node, Express, and React Template with Typescript</p>
    </div>
  );
};

export default About;
