import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // Measure the width of the div before the browser paints
    if (divRef.current) {
      const measuredWidth = divRef.current.offsetWidth;
      setWidth(measuredWidth);
    }
  }, []);  // Run only on mount (once)

  return (
    <div>
      <div ref={divRef} style={{ width: '50%' }}>
        This div is 50% of the viewport width
      </div>
      <p>The measured width is: {width}px</p>
    </div>
  );
}

export default LayoutEffectExample;
