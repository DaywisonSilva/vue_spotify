import { onUnmounted, reactive } from "vue";
import { useDebounce } from ".";

interface State {
  width: number;
  height: number;
}

const useMediaQuery: () => State = () => {
  const state = reactive<State>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const setSize = () => {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
  };

  window.addEventListener("resize", () => useDebounce(500, setSize));

  onUnmounted(() => {
    window.removeEventListener("resize", setSize);
  });

  return state;
};

export default useMediaQuery;
