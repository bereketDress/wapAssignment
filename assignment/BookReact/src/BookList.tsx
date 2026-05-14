
export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  imageUrl: string;
}
export interface ListProps {
  bks: Book[];//array, return type is known 
}
/* bks: propName, ListProps: interface name*/
export function BookList({ bks }: ListProps) {
  return (
    <ul className="p-4 m-2 border-4 grid grid-cols-6 gap-4 border-green-500 rounded-2xl">
        
      {bks.map(b => (
        <li key={b.id} className="mb-4">
          <p>{b.title}</p>
          <p>{b.author}</p>
          <p>{b.year}</p>
          {b.imageUrl && (
            <img
              className="w-32 h-40 p-2"
              src={b.imageUrl} alt={b.title}
            />
          )}
        </li>
      ))}
    </ul>
  );
}