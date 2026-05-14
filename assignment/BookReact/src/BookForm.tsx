import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { Book } from "./BookList";

/* add: is function executed inside handleSubmit to save the book */
/* useState: it is form & Stores live input values */

interface FormProps {
  add: (b: Book) => void;// is function & need return type
}

export function BookForm({ add }: FormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  /* Pack state values into a single Book object, send it up */
  function handleSubmit() {
    add({
      id: uuidv4(), // Generates unique ID
      title,
      author,
      year: Number(year), // Converts string to number
      imageUrl,
    });

    /* Clears out input fields by resetting state to empty strings */
    setTitle("");
    setAuthor("");
    setYear("");
    setImageUrl("");
  }

  return (
    <form
      className="p-4 m-2 border-4 flex flex-col gap-2 border-green-500 rounded-2xl"
      onSubmit={(e) => {     /* 1st: Browser triggers form submit event */
        e.preventDefault();   /* 2nd: Blocks page reload to protect state memory */
        handleSubmit();      /* 3rd: Packs data object and resets form */
      }}>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} /* e.target.value = current text in box */
        required
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input
        placeholder="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />

      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}

// Summary Checklist:
// form  ----> onSubmit (Handles the save & blocks reload)
// input ----> onChange (Saves what user types into React state)