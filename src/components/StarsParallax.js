import React from 'react';
import styled from 'styled-components';

import Star from './WallOfStars/partials/Star';

const NUMBER_OF_COLUMNS = 8;
const NUMBER_OF_ROWS = 10;

// const GridSquare = styled.div`
//   border: ${process.env.NODE_ENV === 'development' && '1px solid black'};
//   position: absolute;
//   width: ${props => props.colWidth}px;
//   height: ${props => props.rowHeight}px;
//   top: ${props => props.top}px;
//   left: ${props => props.left}px;
// `;

const Parallax = ({ starSize, starOpacity }) => {
  const createGrid = () => {
    // Screen's width and height
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Dynamic grid size based on size of screen
    // This means wide monitors will get a less dense starry night
    const colWidth = width / NUMBER_OF_COLUMNS;
    const rowHeight = height / NUMBER_OF_ROWS;

    const gridPositions = [];

    for (let rowIndex = 0; rowIndex < NUMBER_OF_ROWS; rowIndex++) {
      // Each square's "top" position
      const top = rowHeight * rowIndex;
      const bottom = top + rowHeight;

      for (let colIndex = 0; colIndex < NUMBER_OF_COLUMNS; colIndex++) {
        // Each square's "left" position
        const left = colWidth * colIndex;
        const right = left + colWidth;

        gridPositions.push({ top, bottom, left, right });
      }
    }

    const grid = gridPositions.map((positionObj, idx) => (
      <>
        {/* <GridSquare
          key={`${positionObj.colPos}-${idx}`}
          top={positionObj.top}
          left={positionObj.left}
          colWidth={colWidth}
          rowHeight={rowHeight}
        /> */}
        {placeStar(positionObj)}
      </>
    ));

    return grid;
  };

  const placeStar = posObj => {
    const randomTop = randomIntFromInterval(posObj.top, posObj.bottom);
    const randomLeft = randomIntFromInterval(posObj.left, posObj.right);

    return (
      <Star
        key={`${posObj.top}-${posObj.left}`}
        top={randomTop}
        left={randomLeft}
        size={starSize}
        opacity={starOpacity}
      />
    );
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return <>{createGrid()}</>;
};

export default Parallax;
