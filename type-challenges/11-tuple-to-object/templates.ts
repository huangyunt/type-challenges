// 你的答案
type TupleToObject<T extends readonly PropertyKey[]> = { [K in T[number]]: K }


/**
 * T[number] 实际上会拿到数组值的一个联合类型，比如数组['h', 'y', 'z']，拿到的就是 'h' | 'y' | 'z'
 */
type arr = ['hyz', 'hdz', 'hhh'];
type arrs<T extends any[]> = T[number]
type c = arrs<arr> // 'hyz' | 'hdz' | 'hhh'

/************************************************** */