

export interface User {
  id: number;
  name: string;
  email: string;
}

export function getUsr(id: number, callback: (error: Error | null, usr?: User) => void): void {
  setTimeout(() => {// simulates API delay
    if (id <= 0) {
      callback(new Error("Invalid ID"));// error is a class needs new keyword  
    } else {
      callback(null, {id: id, name: "John Doe", email: "john@gmail.com"
      });// null:means no error 
    }
  }, 1000);                                           
}
