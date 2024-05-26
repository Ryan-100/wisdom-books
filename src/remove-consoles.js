export const GlobalDebug = (function () {
  let isDebugOn = true;
  let isSuppressAll = false;

  const consoleProxy = new Proxy(console, {
    get(target, prop) {
      if (!isDebugOn || (isSuppressAll && ['log', 'info', 'warn', 'error'].includes(prop))) {
        return () => {};
      }
      return target[prop];
    }
  });

  /**
  * @param {boolean} debugOn
  * @param {boolean} suppressAll
  */
  return function (debugOn, suppressAll) {
    isDebugOn = debugOn;
    isSuppressAll = suppressAll || false;
    if (typeof window !== 'undefined') {
      window.console = consoleProxy;
    } else if (typeof global !== 'undefined') {
      global.console = consoleProxy;
    }
  };
})();
