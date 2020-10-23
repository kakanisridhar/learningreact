import { GlobalState } from "./Store";
import { LOCAL_STORAGE_STATE_KEY } from "../Constants/Strings";

export const LoadState = (): GlobalState | undefined => {
  try {
    const persistedState = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);

    if (persistedState == null) return undefined;

    return JSON.parse(persistedState);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const SaveState = (state: GlobalState): void => {
  try {
    const stateToPersist: Partial<GlobalState> = {
      ...state,
    };

    localStorage.setItem(
      LOCAL_STORAGE_STATE_KEY,
      JSON.stringify(stateToPersist)
    );
  } catch (error) {
    console.error(error);
  }
};
