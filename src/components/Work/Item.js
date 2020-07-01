import React from 'react';

const Item = ({ title, description, githubLink, exampleLink, img1, img2 }) => (
  <div>
    <div className="work-img-wrapper">
      <div
        className="work-img-other"
        style={{
          backgroundImage: img1,
        }}
      ></div>
      <div
        className="work-img-main"
        style={{
          backgroundImage: img2,
        }}
      ></div>
    </div>

    <div className="work-header">
      <h2 className="work-title">{title}</h2>
      <div className="work-links">
        <a target="_blank" href={githubLink} className="work-href">
          <i className="icon-social-github icons"></i>
        </a>
        <a target="_blank" href={exampleLink} className="work-href">
          <i className="icon-link icons"></i>
        </a>
      </div>
    </div>

    <p className="work-desc">{description}</p>
  </div>
);

export default Item;
