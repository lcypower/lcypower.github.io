import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function IntroduceSection({ introduces }) {
  if (!introduces || introduces.length < 2) return null;
  return (
    <div className="introduce-section">
      <SectionHeader title="Introduce" />
      <ul className="introduce">

        {introduces.map((introduce, index) =>
          index === 0 ? null : (
              <li className="head" key={index}>
                {introduce.info}
              </li>
          ),
        )}
      </ul>

    </div>
  );
}

export default IntroduceSection;
