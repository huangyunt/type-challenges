// 你的答案
type TupleToObject<T extends readonly PropertyKey[]> =  { [K in T[number]]: K }