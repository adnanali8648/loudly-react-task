import { useReducer, useCallback } from "react";
import { InitialState, HttpAction, RequestMethod, ActionType } from "../types";

const initialState: InitialState = {
  loading: false,
  error: null,
  data: null,
};

const httpReducer = (
  curHttpState: InitialState,
  action: HttpAction
): InitialState => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatchHttp({ type: ActionType.CLEAR }), []);

  const sendRequest = useCallback(
    (url: string, method: RequestMethod, body?: any) => {
      console.log(body);
      dispatchHttp({ type: ActionType.SEND });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          if (!response.ok) {
            const error = new Error("No response");
            throw error;
          } else {
            return response.json();
          }
        })
        .then((responseData) => {
          dispatchHttp({
            type: ActionType.RESPONSE,
            responseData: responseData,
          });
        })
        .catch(() => {
          dispatchHttp({
            type: ActionType.CLEAR,
            errorMessage: "Something went wrong!",
          });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    clear: clear,
  };
};

export default useHttp;
