let timer = 0;
const useDebounce: (timeout: number, fn: TimerHandler) => void = (
  timeout,
  fn
) => {
  clearTimeout(timer);
  timer = setTimeout(fn, timeout);
};

export default useDebounce;
