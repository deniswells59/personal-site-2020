import React from 'react';

import WallOfStars from '../WallOfStars';
import { Title } from '../common/Text';

import Wrapper from './partials/Wrapper';
import ContentWrapper from './partials/ContentWrapper';
import Logo from './partials/Logo';
import Divider from './partials/Divider';
import SocialLinks from './partials/SocialLinks';
import CallToAction from './partials/CallToAction';

const Header = () => (
  <Wrapper>
    <WallOfStars starSize={2} starOpacity={0.4} />
    <WallOfStars starSize={2.5} starOpacity={0.6} />
    <WallOfStars starSize={3} starOpacity={0.7} />

    <ContentWrapper>
      <div>
        <Logo size="100" />

        <Title>Hi, I'm a Web Developer</Title>

        <Divider />

        <SocialLinks />
      </div>

      <div>
        <CallToAction />
      </div>
    </ContentWrapper>
  </Wrapper>
);

export default Header;
