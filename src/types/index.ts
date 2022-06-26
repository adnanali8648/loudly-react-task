export type InitialState = {
  loading: boolean;
  error: string | undefined | null;
  data?: object[] | null;
};

export type HttpAction = {
  responseData?: object[];
  type?: ActionType;
  errorMessage?: string | undefined | null;
};

export enum ActionType {
  RESPONSE = "RESPONSE",
  SEND = "SEND",
  ERROR = "ERROR",
  CLEAR = "CLEAR",
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}
