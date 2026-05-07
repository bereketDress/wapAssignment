export interface IBook {
  success: boolean;
  data: any;
}


export interface BookItem {
  id: string;
  title: string;
  author: string;
  year: number;
  imageUrl: string;
}
export const books: BookItem[]=[];