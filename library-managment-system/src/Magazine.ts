import { LibraryItem } from "./LibraryItem";

export class Magazine extends LibraryItem {

    constructor(id: number, title: string, public issueNumber: number) {
        super(id, title);

    }
    override getInfo(): string {
        return `[Magazine] ID: ${this.id}, Title: ${this.title}, Issue: ${this.issueNumber}, Available: ${this.isAvailable}`;
    }

}