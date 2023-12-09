// ф-я фильтрует массив от одинаковых объектов
// и возвращает массив объектов {emoji: emoji, count: counter[emoji]}

import { TReaction } from '../pages/Forum/types'

interface IObj {
  [key: string]: number
}
export const countDublicate = (data: TReaction[]) => {
  const counter: IObj = data.reduce((obj, i) => {
    const res: IObj = { ...obj }
    if (!Object.prototype.hasOwnProperty.call(res, i.emoji)) {
      res[i.emoji] = 0
    }
    res[i.emoji]++
    return res
  }, {})

  const currentArr = Object.keys(counter).map(emoji => {
    return { emoji: emoji, count: counter[emoji] }
  })

  return currentArr
}
