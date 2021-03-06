import React, { useState, useEffect } from "react";
import feedback from "../logic/feedback";

const CommandButtons = ({
  setIsFilterInvoked,
  currentPage,
  reset,
  setMessage,
  isContentBlocked,
}) => {
  const [commandsCurrentPage, setCommandsCurrentPage] = useState(currentPage);
  useEffect(() => {
    setCommandsCurrentPage(currentPage);
  }, [currentPage, commandsCurrentPage]);

  const onHomeClick = (e) => {
    e.preventDefault();
    reset();
  };

  const onFilterClick = (e) => {
    if (isContentBlocked) {
      setMessage(feedback["BLOCKED_CONTENT"]);
      return;
    }
    setIsFilterInvoked(true);
  };

  const onLogoutClick = () => {
    // logout();
  };

  return (
    <div className="command-buttons">
      <div className="refresh-filter-buttons">
        <button
          className="command-button home"
          value="home"
          onClick={onHomeClick}
        >
          <span>&#8634;</span>
          <span className="tooltip home">Refresh</span>
        </button>
        <button className="command-button filter" onClick={onFilterClick}>
          &#9826;<span className="tooltip filter">Filter</span>
        </button>
      </div>
    </div>
  );
};

export default CommandButtons;
