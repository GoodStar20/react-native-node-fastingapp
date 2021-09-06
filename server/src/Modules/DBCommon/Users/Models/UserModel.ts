export interface FAUser {
  _id?: Number;
  name: String;
  mode: 'admin' | 'user' | 'doctor' | 'tester';
  age: Number;
  activeSubscription: boolean;
}

declare global {
  namespace Express {
    interface User extends FAUser {}
  }
}
