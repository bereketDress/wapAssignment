
// Response interface 

export interface ErrorResponse {
  message: string;
}

// fetch function
export async function fetchWrongUrl(): Promise<ErrorResponse> {
  try {
    const raw = await fetch("https://wrong-url-that-does-not-exist.com/data"); 
    const converted: ErrorResponse = await raw.json(); 
    return converted;
  } catch (error) {
    throw new Error(`Bad Request: ${error}`); // rethrow to caller
  }
}


