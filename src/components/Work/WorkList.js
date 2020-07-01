import React from 'react';

const WorkList = ({ workExamples }) => (
  <>
    <div>LIST!</div>
    {workExamples.map(example => (
      <h1 key={example.id}>{example.title}</h1>
    ))}
  </>
);

export default WorkList;
