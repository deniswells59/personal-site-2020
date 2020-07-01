import React from 'react';

import WallOfStars from '../WallOfStars';

import LogoWrapper from './partials/LogoWrapper';
import Logo from './partials/Logo';
import Wrapper from './partials/Wrapper';

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <Logo size="100" />
    </LogoWrapper>

    <WallOfStars starSize={2} starOpacity={0.4} />
    <WallOfStars starSize={2.5} starOpacity={0.6} />
    <WallOfStars starSize={3} starOpacity={0.8} />
  </Wrapper>
);

export default Header;
