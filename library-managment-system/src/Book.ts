import { LibraryItem } from "./LibraryItem";
export class Book extends LibraryItem {

    constructor(id: number, title: string, public author: string, public pages: number) {
        super(id, title);

    }

    override getInfo(): string {
        return `[Book] ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Available: ${this.isAvailable}`;
    }

}  