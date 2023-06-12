// External
import { createContext, useRef, useContext } from "react";
import EventBus from "../utils/event-bus";

// @ts-ignore
const context = createContext<Context>({});

export function SurveyContext({ children }: Props) {
  const overallData = useRef<any>([]);

  const setOverallData = (value: any) => {
    overallData.current = value;
    EventBus.dispatch(EventBus.Event.UPDATE_SIDE_BAR_STATUS, { value });
  };

  return (
    <context.Provider
      value={{
        overallData: overallData.current,
        setOverallData,
      }}
    >
      {children}
    </context.Provider>
  );
}

export function useSurvey() {
  return useContext(context);
}

interface Props {
  children: JSX.Element;
}

interface Context {
  overallData: any;
  setOverallData: (value: any) => void;
}
