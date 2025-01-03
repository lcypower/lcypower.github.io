import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © 1984-{new Date().getFullYear()} <a href={githubUrl}>{author}</a> 님의 인생
        &nbsp;
        {/* &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a> */}
      </p>
    </footer>
  );
}

export default PageFooter;
