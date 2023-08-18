import React from "react"

const LoadMoreButton = ({ onClick, onScrollToTop }) => {
  return (
    <div className="lower-btns">
      <button className="load-more-button" onClick={onClick}>
        Load More Fighters
      </button>
      <button className="scroll-to-top-button" onClick={onScrollToTop}>
        Scroll to Top
      </button>
    </div>
  )
}

export default LoadMoreButton
