import React from 'react';
import Example from '../../public/assets/Example';

export function Header({ display, score }) {
  return (
    <>
      <Example />
      {/* Header */}
      <h1 className="title">USA Quiz</h1>
      {/* Current Score */}
      <h2 className="current-score">
        {display ? 'Current' : 'Final'} Score: {score}
      </h2>
    </>
  );
}
