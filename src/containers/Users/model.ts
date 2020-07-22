export interface User {
    ID: number,
    FullName: string,
    Party: string,
    Terms: string
  }
  
  export interface UserAction {
    type: string
    payload?: any
  }