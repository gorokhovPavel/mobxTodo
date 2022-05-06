export type typeId = string | number


/**
 * @prop title название цели списка
 * @prop isCompleted флаг выполнения
 */
export interface ITodo {
    id: typeId
    title: string
    isCompleted: boolean
}

/**
 * @prop name имя поля (то, что видно)
 * @prop [value] его значние (то, что не видно)
 */
export interface IOption<T = number> {
    name: string
    value?: T
}
