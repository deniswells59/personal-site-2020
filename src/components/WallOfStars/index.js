import React from 'react';
// import styled from 'styled-components';

import Star from './partials/Star';

import { useWindowSize } from '../../providers/useWindowSize';

const NUMBER_OF_COLUMNS = 6;
const NUMBER_OF_ROWS = 6;

// GridSqaure used for development
// const GridSquare = styled.div`
//   border: 1px solid black;
//   position: absolute;
//   width: ${props => props.colWidth}px;
//   height: ${props => props.rowHeight}px;
//   top: ${props => props.top}px;
//   left: ${props => props.left}px;
// `;

const WallOfStars = ({ starSize, starOpacity }) => {
  const windowSizes = useWindowSize();

  const createGrid = () => {
    // Screen's width and height
    const width = windowSizes.innerWidth;
    const height = windowSizes.innerHeight;

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

    return gridPositions;
  };

  const placeStar = (posObj, idx) => {
    const randomTop = randomIntFromInterval(posObj.top, posObj.bottom);
    const randomLeft = randomIntFromInterval(posObj.left, posObj.right);

    return (
      <Star
        key={`${posObj.top}-${posObj.left}-${idx}`}
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

  const gridPositions = createGrid();

  return <>{gridPositions.map(placeStar)}</>;
};

export default WallOfStars;
