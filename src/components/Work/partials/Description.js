import React from 'react';

import { Title } from '../../common/Text';

const Description = ({
  title,
  description,
  githubLink,
  exampleLink,
  img1,
  img2,
}) => (
  <div>
    <Title black bold>
      {title}
    </Title>
  </div>
);

export default Description;

{
  /* div className="work-links">
        <a target="_blank" href={githubLink} className="work-href">
          <i className="icon-social-github icons"></i>
        </a>
        <a target="_blank" href={exampleLink} className="work-href">
          <i className="icon-link icons"></i>
        </a>
      </div>
    </div>

    <p className="work-desc">{description}</p> */
}
