import React from 'react';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback('bad')}>
        Bad
      </button>

      {}
      {totalFeedback > 0 && (
        <button type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
