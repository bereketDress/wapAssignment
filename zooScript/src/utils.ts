export function identity<T>(value: T): T {
  return value;
}

export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}