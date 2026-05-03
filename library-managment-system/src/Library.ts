import { LibraryItem } from "./LibraryItem";
export class Library {
    items: LibraryItem[] = [];
    constructor() { }

    addItem(item: LibraryItem): void {
        this.items.push(item);

    }

    listAvailable(): void {
        const avail = this.items.filter(n => n.isAvailable)
        avail.forEach(m => {
            console.log(m.getInfo())

        });

    }

    findByTitle(title: string): LibraryItem | undefined {
        return this.items.find(s => s.title === title);
    }
}