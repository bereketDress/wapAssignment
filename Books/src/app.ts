import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { BookData } from "./data";
import { IBook, BookItem } from "./book";

const app = express();

app.use(cors());
app.use(express.json());


const middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const apikey = req.headers["x-api-key"];

    if (!apikey) {
        return res.status(401).json({
            success: false,
            data: "API key required"
        });
    }

    if (apikey !== "secret123") {
        return res.status(403).json({
            success: false,
            data: "Invalid API key"
        });
    }

    next();
};

app.use(middleware);



const isNonEmpty = (val: unknown): val is string =>
    typeof val === "string" && val.trim().length > 0;

const isValidYear = (val: unknown): val is number => {
    const num = Number(val);
    return !isNaN(num) && isFinite(num) && num > 0;
};



app.get("/books", (req: Request, res: Response) => {
    const response: IBook = {
        success: true,
        data: BookData
    };

    return res.status(200).json(response);
});



app.post("/books", (req: Request, res: Response) => {
    const { id, title, author, year, imageUrl } = req.body;

    const err = (msg: string) =>
        res.status(400).json({
            success: false,
            data: msg
        });

    if (!isNonEmpty(id))
        return err("id must not be empty");

    if (!isNonEmpty(title))
        return err("title must not be empty");

    if (!isNonEmpty(author))
        return err("author must not be empty");

    if (!isValidYear(year))
        return err("year must be a valid number");

    if (!isNonEmpty(imageUrl))
        return err("imageUrl must not be empty");

    const existingBook = BookData.find(book => book.id === id);

    if (existingBook)
        return err("Book ID already exists");

    const newBook: BookItem = {
        id,
        title,
        author,
        year: Number(year),
        imageUrl
    };

    BookData.push(newBook);

    const response: IBook = {
        success: true,
        data: newBook
    };

    return res.status(201).json(response);
});



app.get("/books/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    const found = BookData.find(book => book.id === id);

    if (!found) {
        return res.status(404).json({
            success: false,
            data: "book not found"
        });
    }

    return res.status(200).json({
        success: true,
        data: found
    });
});


app.patch("/books/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    const found = BookData.find(book => book.id === id);

    const err = (msg: string) =>
        res.status(400).json({
            success: false,
            data: msg
        });

    if (!found) {
        return res.status(404).json({
            success: false,
            data: "book not found"
        });
    }

    if (req.body.title !== undefined) {
        if (!isNonEmpty(req.body.title))
            return err("title must not be empty");

        found.title = req.body.title;
    }

    if (req.body.author !== undefined) {
        if (!isNonEmpty(req.body.author))
            return err("author must not be empty");

        found.author = req.body.author;
    }

    if (req.body.year !== undefined) {
        if (!isValidYear(req.body.year))
            return err("year must be a valid number");

        found.year = Number(req.body.year);
    }

    if (req.body.imageUrl !== undefined) {
        if (!isNonEmpty(req.body.imageUrl))
            return err("imageUrl must not be empty");

        found.imageUrl = req.body.imageUrl;
    }

    return res.status(200).json({
        success: true,
        data: found
    });
});


app.delete("/books/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    const index = BookData.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            data: "book not found"
        });
    }

    const deletedBook = BookData[index];

    BookData.splice(index, 1);

    return res.status(200).json({
        success: true,
        data: deletedBook
    });
});


const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);

    return res.status(500).json({
        success: false,
        data: err.message || "Internal Server Error"
    });
};

app.use(errorHandler);

const port = 5005;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});