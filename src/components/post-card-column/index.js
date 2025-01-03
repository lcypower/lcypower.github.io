import { Button } from '@mui/material';
import { navigate } from 'gatsby-link';
import React, { useCallback } from 'react';
import PostCard from '../post-card';
import './style.scss';

function PostCardColumn({ posts, showMoreButton, moreUrl }) {
  const onMoreButtonClick = useCallback(() => {
    navigate(moreUrl);
  }, [moreUrl]);

  return (
    <div className="more-post-card-button-wrapper">
      <div className="post-card-column-wrapper">
        <div className="post-card-column">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}

        </div>
      </div>
      <div className="post-card-column-wrapper">
        {showMoreButton && (
            <Button
              className="more-post-card-button"
              onClick={onMoreButtonClick}
              variant="contained"
              disableElevation
            >
              More
            </Button>
          )}
        </div>
    </div>
  );
}

export default PostCardColumn;
