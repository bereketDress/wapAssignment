// ---------------Promise Version ------------
export interface User {
  id: number;
  name: string;
  email: string;
}
//resolve = function that represents SUCCESS 
//reject  = function that represents FAILURE 

export function getUser(id: number): Promise<User> {         
  return new Promise((resolve, reject) => {// Promise takes resolve & reject
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("Invalid ID"));               
      } else {
        resolve({                                      
          id: id,
          name: "John Doe",
          email: "john@gmail.com"
        });
      }
    }, 1000);
  });
}


