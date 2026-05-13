
import { useState } from "react";
import { bookData } from "./Data";
import { Book } from "./BookList";
import { BookForm } from "./bookForm";
import { BookList } from "./BookList";

/* common interaction b/n component:  bookform work with addbook, bookList with bookdata*/

export default function App() {

/* Create a state variable called books, and start it with bookData*/

    const [books, setBooks] = useState<Book[]>(bookData);

    function addBook(book: Book) {
        setBooks([...books, book]);
    }

    return (
        <div className="p-2 m-2 border-4 border-purple-500 rounded-2xl">
            <h1>Library App</h1>
            <BookForm onAdd={addBook} /> 
            <BookList bks={books} />      
                                                                 
        </div>
    );
}

// <BookForm onAdd={addBook} />  /* bookForm function parameter vs app component*/
// <BookList bks={books} />      /*bookList function parameter vs app state variable*/
//                               /*meaning: Send books data to BookList component*/  