import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { Book } from "./BookList";

/* useState:Store input values, like a notebook inside the component
 useState:lets React “remember” what the user typed */

interface FormProps {
  onAdd: (book: Book) => void;
}

export function BookForm({ onAdd }: FormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit() {
    onAdd({
      id: uuidv4(),
      title,
      author,
      year: Number(year),
      imageUrl,
    });

    /* set clears the form coz set value empty="" */

    setTitle("");
    setAuthor("");
    setYear("");
    setImageUrl("");
  }

/* e.target.value = what user types in input e.preventDefault: Stops page reload to keep data*/
  
return (
    <form
      className="p-4 m-2 border-4 flex flex-col gap-2 border-green-500 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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







