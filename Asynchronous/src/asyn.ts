
// ....async/Await Version .......

export interface User {
  id: number;
  name: string;
  email: string;
}

export function gettUser(id: number): Promise<User> {// same function as Promise version
  return new Promise((resolve, reject) => {
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


