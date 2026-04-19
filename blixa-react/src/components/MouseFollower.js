import React, { useEffect, useRef } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const followerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current && glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        followerRef.current.style.left = `${x}px`;
        followerRef.current.style.top = `${y}px`;
        
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="mouse-follower"></div>
      <div ref={glowRef} className="mouse-glow"></div>
    </>
  );
};

export default MouseFollower;
