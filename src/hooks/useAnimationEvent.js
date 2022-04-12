import { useCallback, useEffect, useRef, useState } from 'react';
export function useAnimationEvents(doms, animationEvent, handle) {
  const listenDoms = useRef([]);
  const [isAddListener, setIsAddEventListener] = useState(false);
  const handleFn = useCallback(() => {
    handle();
    setIsAddEventListener(false);
  }, []);
  useEffect(() => {
    listenDoms.current = doms.filter((_d) => isHTMLElement(_d));
    if (isAddListener) {
      listenDoms.current.lenth &&
        listenDoms.current.forEach((_d) =>
          _d.removeEventListener(animationEvent, handleFn),
        );
    }
  }, [doms, isAddListener, animationEvent, handleFn]);

  useEffect(() => {
    if (listenDoms.current.length) {
      listenDoms.current.forEach((_d) =>
        _d.addEventListener(animationEvent, handleFn),
      );
      setIsAddEventListener(true);
    }
  }, [animationEvent, handle, handleFn]);
}

function isHTMLElement(dom = null) {
  if (HTMLElement) {
    return dom instanceof HTMLElement;
  } else {
    return dom && typeof dom === 'object' && dom.nodeType === Node.ELEMENT_NODE;
  }
}
