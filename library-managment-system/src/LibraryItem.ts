
export abstract class LibraryItem {

    constructor(
        public id: number,
        public title: string,
        public isAvailable: boolean = true) { }

    checkout(): void {
        this.isAvailable = false;
    }

    returnItem(): void {
        this.isAvailable = true;
    }

    abstract getInfo(): string;
}

