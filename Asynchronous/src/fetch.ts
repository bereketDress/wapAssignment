// User interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// Post interface
export interface Post {
  id: number;
  title: string;
  body: string;
}

// fetch user
export async function fetchUser(url: string): Promise<User> {
  try {
    const raw = await fetch(url);
    const converted: User = await raw.json();
    return{
      id: converted.id,
      name: converted.name,
      email: converted.email
    }

  } catch (error) {
    throw new Error(`Bad Request: ${error}`);
  }
}

// fetch post
export async function fetchPost(url: string): Promise<Post> {
  try {
    const raw = await fetch(url);
    const converted: Post = await raw.json();  // single Post not array
    return {
      id: converted.id,
      title: converted.title,
      body: converted.body,
    };
  } catch (error) {
    throw new Error(`Bad Request: ${error}`);
  }
}
