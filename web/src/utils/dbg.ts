import { isEnvBrowser } from './misc';
import { IEventDebugger } from '@/types/EventDebugger';

export const dbg = (events: Array<IEventDebugger>, timer = 1000) => {
  if (import.meta.env.MODE === 'development' && isEnvBrowser()) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              action: event.action,
              data: event.data,
            },
          })
        );
      }, timer);
    }
  }
};
