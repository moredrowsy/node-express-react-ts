import React from 'react';

interface Props {
  title: string;
}

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  );
};

export default Home;
