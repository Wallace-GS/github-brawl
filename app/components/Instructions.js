import React from 'react';
import { FaUserFriends, FaGrunt, FaTrophy } from 'react-icons/fa';

export default function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text brawl-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Brawl</h3>
          <FaGrunt className="bg-light" color="rgb(187, 46, 31)" size={140} />
        </li>
        <li>
          <h3 className="header-sm">Champions</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
  );
}
