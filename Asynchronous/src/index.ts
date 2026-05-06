import { gettUser, User } from "./asyn";
import { getUsr } from "./callback";
import { fetchUser } from "./fetch";
import { fetchPost } from "./fetch";
import { fetchWrongUrl } from "./try-catch";
import {getUser} from "./promise";



//....async/Await Version --->: using try-catch
async function promiseTest(): Promise<void> {
  try {
    console.log("1.promise await test:");
    const user: User = await gettUser(1);// await unwraps Promise<User>
    console.log("User:", user);                        
  } catch (error) {
    console.log("Error:", error);                      
  }
}

promiseTest(); //triggers execution


// ----- Callback : using if-else
async function callbackTest(){
    console.log("2.callbackTest test:");
getUsr(1, (error, usr) => {// for primitive do value &  non primitive key 
  if (error) {
    console.log("Error:", error.message); // error             
  } else {
    console.log("User:", usr);//success
  }
});
}
callbackTest();

// fetch user 

async function userTest() {
  try {
    console.log("3. fetch userTest:")
    const URL = "https://jsonplaceholder.typicode.com/users/1";
    const fetching = await fetchUser(URL);
    console.log(fetching);
  } catch (error) {
    throw new Error(`error: ${(error as Error).message}`);  
  }
}
userTest();

// post test
async function postTest() {
  try {
    console.log("4.post test:")
    const URL = "https://jsonplaceholder.typicode.com/posts/1";
    const pos = await fetchPost(URL);
    console.log(pos);
  } catch (error) {
    throw new Error(`error: ${(error as Error).message}`);  
  }
}
postTest();

// parallel test
async function parallel(): Promise<void> {
  try {

    const [user, post] = await Promise.all([
      fetchUser("https://jsonplaceholder.typicode.com/users/1"),
      fetchPost("https://jsonplaceholder.typicode.com/posts/1")
    ]);

    console.log("5. Parallel Results:");
    console.log("User:", user);
    console.log("Post:", post);
  } catch (error) {
    console.log("Error:", error);
  }
}

parallel();

// sequential test

async function sequential(): Promise<void> {
  try {
    const user = await fetchUser("https://jsonplaceholder.typicode.com/users/1");
    const post = await fetchPost("https://jsonplaceholder.typicode.com/posts/1");
   

    console.log("6.Sequential Results:");
    console.log("User:", user);
    console.log("Post:", post);
  } catch (error) {
    console.log("Error:", error);
  }
}

sequential(); 

// try-catch test

async function wrongTest(): Promise<void> {
  try {
    console.log("7.wrong test:")
    const data = await fetchWrongUrl();
    console.log("Data:", data);                         
  } catch (error) {
    console.log("Caught with try/catch:", error);       
  }
}

wrongTest();

//.then().catch(): promise

function getUserTest(){
    console.log("8. old promise user test:")
const cont= getUser(1)
  cont.then((x) => {
    console.log("User:", x);                        
  })
  .catch((e) => {
    console.log("Error:", e.message);             
  });
}
getUserTest();