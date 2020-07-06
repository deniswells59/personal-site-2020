import React from 'react';

import { Text } from '../common/Text';
import Wrapper from './partials/Wrapper';
import Image from './partials/Image';
import ImageLabel from './partials/ImageLabel';

import profileImg from '../../images/profile.png';

import useAboutData from '../../hooks/useAboutData';

const About = () => {
  const aboutData = useAboutData();

  return (
    <Wrapper>
      <Image src={profileImg} />
      <ImageLabel>{aboutData.imageLabel}</ImageLabel>

      <Text black>{aboutData.primary}</Text>
      <Text black>{aboutData.secondary}</Text>
    </Wrapper>
  );
};

export default About;
