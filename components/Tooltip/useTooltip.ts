import { RefObject, useCallback, useEffect, useState } from 'react';

const useTooltip = (eventTriggerRef: RefObject<HTMLDivElement>) => {
  const [pos, setPos] = useState({
    top: 0,
    left: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = typeof window === 'object';

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPos({
      top: e.clientY,
      left: e.clientX,
    });
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const deleteListeners = () => {
      eventTriggerRef.current?.removeEventListener('mouseenter', onMouseEnter);
      eventTriggerRef.current?.removeEventListener('mousemove', onMouseMove);
      eventTriggerRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };

    if (!isBrowser) return deleteListeners;

    eventTriggerRef.current?.addEventListener('mouseenter', onMouseEnter);
    eventTriggerRef.current?.addEventListener('mousemove', onMouseMove);
    eventTriggerRef.current?.addEventListener('mouseleave', onMouseLeave);

    return deleteListeners;
  }, [isBrowser, eventTriggerRef, onMouseEnter, onMouseMove, onMouseLeave]);

  return {
    pos,
    isVisible,
  };
};

export default useTooltip;
