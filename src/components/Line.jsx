import React, { useRef, useEffect } from "react";

function Line() {
  // References to the SVG path, the animation frame id,
  // the current vertical offset, target offset, and horizontal ratio.
  const pathRef = useRef(null);           // Reference to the <path> element
  const reqIdRef = useRef(null);          // Reference to requestAnimationFrame id
  const progressRef = useRef(0);          // Current vertical offset
  const targetProgressRef = useRef(0);    // Target vertical offset (for smoothing)
  const xRef = useRef(0.1);               // Current horizontal ratio (0‑1)

  // A simple linear interpolation function.
  const lerp = (a, b, t) => a * (1 - t) + b * t;

  /** 
   * Redraw the SVG path using a quadratic Bézier curve.
   * The curve starts at the left-center and ends at the right-center.
   * The control point is set at a horizontal position based on the pointer (xRef)
   * and vertically offset by progressRef (current offset).
   */
  const setPath = () => {
    if (!pathRef.current) return;

    // Define drawing area
    const width = window.innerWidth * 0.5; // visible half‑width of the screen
    const height = 100;

    // Calculate control point coordinates
    const cx = width * xRef.current;     
    const cy = height / 2 + progressRef.current;

    // Set the path "d" attribute using a quadratic Bézier command.
    pathRef.current.setAttribute(
      "d",
      `M 0 ${height / 2} Q ${cx} ${cy} ${width} ${height / 2}`
    );
  };

  /** 
   * Animation loop: Smoothly interpolate the current progress towards the target value.
   * This loop runs continuously (using requestAnimationFrame) to ensure the transition
   * is smooth even when the pointer moves.
   */
  const animate = () => {
    progressRef.current = lerp(progressRef.current, targetProgressRef.current, 0.1);
    setPath();
    reqIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Initially set the path.
    setPath();

    // Start the continuous animation loop.
    reqIdRef.current = requestAnimationFrame(animate);

    // Update the path on window resize.
    const handleResize = () => setPath();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqIdRef.current);
    };
  }, []);

  /**
   * Handle pointer move:
   * - Update xRef based on the horizontal position within the element.
   * - Determine the vertical difference between the pointer and the line's center.
   * - Invert the difference so that the bulge appears opposite to the cursor.
   */
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate horizontal position ratio (0‑1).
    xRef.current = (e.clientX - rect.left) / rect.width;

    // Calculate the vertical difference from the center of the element.
    const diff = e.clientX - (rect.left + rect.height / 15);

    // Invert the difference so the bulge appears opposite to the cursor.
    targetProgressRef.current = -diff;
  };

  /** 
   * When the pointer leaves the element, set the target offset to 0.
   * The animation loop will gently transition the curve back to flat.
   */
  const handlePointerLeave = () => {
    targetProgressRef.current = 0;
  };

  return (
    <div className="mobile:hidden tablet:hidden">
      <div className="string-line hero-lineDraw">
        <span
          className="box"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        ></span>
        <svg width="100%" height="100">
          <path ref={pathRef} stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export default Line;
