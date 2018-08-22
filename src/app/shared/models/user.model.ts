export interface UserData {
  id: number;
  name: {
    last: string,
    first: string
  };
  fakeToken: string;
  password: string;
  login: string;
}
