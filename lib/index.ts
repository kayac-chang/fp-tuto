/**
 * returns the number of elements in that array
 */
export function length<T>(arr: T[]): number {
  return arr.length;
}

/**
 * Returns the result of concatenating the given lists or strings.
 */
export function concat<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

/**
 * Returns the first element of the given list or string.
 */
export function head<T>(arr: T[]): T | undefined {
  return arr.at(0);
}

/**
 * Returns all but the first element of the given list or string
 */
export function tail<T>(arr: T[]): T[] {
  return arr.slice(1);
}

interface PredFn<T> {
  (t: T): boolean;
}

/**
 * filtered down to just the elements from the given array
 * that pass the test implemented by the provided function
 */
export function filter<T>(pred: PredFn<T>) {
  return function recursion(arr: T[]): T[] {
    if (length(arr) === 0) return [];
    const first = head(arr) as T;
    const item = pred(first) ? [first] : [];
    return concat(item, recursion(tail(arr)));
  };
}

interface Fn<X, Y> {
  (x: X): Y;
}

/**
 * creates a new array populated with the results of calling a provided function on every element
 * in the calling array
 */
export function map<X, Y>(fn: Fn<X, Y>) {
  return function _map(arr: X[]): Y[] {
    if (length(arr) === 0) return [];
    return concat([fn(head(arr) as X)], _map(tail(arr)));
  };
}

interface BinaryFn<X, Y> {
  (x: X, y: Y): X;
}

/**
 * executes a user-supplied "reducer" callback function on each element of the array,
 * in order, passing in the return value from the calculation on the preceding element.
 * The final result of running the reducer across all elements of the array is a single value.
 */
export function reduce<X, Y>(fn: BinaryFn<X, Y>, initialValue: X) {
  return function _reduce(array: Y[]): X {
    if (length(array) === 0) return initialValue;

    return fn(_reduce(tail(array)), head(array) as Y);
  };
}
