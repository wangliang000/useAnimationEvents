import { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import { useAnimationEvents } from '../../hooks/useAnimationEvent';
function Ball() {
  const [data, setDate] = useState([1, 2, 3]);
  const [releasedBall, setReleasedBall] = useState(0);
  const ballRefs = useRef([]);
  useAnimationEvents(ballRefs.current, 'animationend', () => {
    ballRefs.current = [1];
    setReleasedBall(0);
    setDate([parseInt(Math.random() * 100), parseInt(Math.random() * 100)]);
  });
  useEffect(() => {
    console.log(ballRefs.current, 'ballRef');
  }, [ballRefs]);
  const renderBall = useMemo(() => {
    return (
      <div className="ball-wrap">
        {data.map((item) => (
          <div
            ref={(r) => ballRefs.current.push(r)}
            onClick={(e) => {
              setReleasedBall(item);
            }}
            className={`ball ${
              releasedBall === item ? 'flip' : 'ball-shaking'
            }`}
          >
            第{item}球
          </div>
        ))}
      </div>
    );
  }, [data, releasedBall]);
  return <div className="App">{renderBall}</div>;
}

export default Ball;
