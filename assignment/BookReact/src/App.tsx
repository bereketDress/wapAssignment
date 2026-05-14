
import { useState } from "react";
import { bookData } from "./Data";
import { Book } from "./BookList";
import { BookForm } from "./BookForm";
import { BookList } from "./BookList";

/* common interaction b/n component:  bookform work with addbook, bookList with bookdata*/

export default function App() {

/* Create parent state variable called books, using bookData*/

    const [books, setBooks] = useState<Book[]>(bookData);

    function addBook(book: Book) {
        setBooks([...books, book]);
    }
/*onadd & bks are props of bookform and booklist but created and controlled by parent App*/
   return (
        <div className="p-2 m-2 border-4 border-purple-500 rounded-2xl">
            <h1>Library App</h1>
            
            {/* Passes parent function 'addBook' into BookForm using own prop */}
            <BookForm add={addBook} /> 
            
            {/* Passes parent state 'books' into BookList using own prop */}
            <BookList bks={books} />      
        </div>
    );
}
