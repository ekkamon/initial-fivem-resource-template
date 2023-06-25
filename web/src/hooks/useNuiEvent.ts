import { type MutableRefObject, useEffect, useRef } from 'react';

export const useNuiEvent = (
  actionName: string,
  handler: (...args: any) => void
) => {
  const saveHandler: MutableRefObject<(...args: any) => void> = useRef(
    () => undefined
  );

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      const { action, data } = e.data;

      if (!saveHandler.current) return;

      if (action == actionName) {
        saveHandler.current(data);
      }
    };

    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, [actionName]);
};
