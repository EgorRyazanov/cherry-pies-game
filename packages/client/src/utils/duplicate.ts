// ф-я фильтрует массив от одинаковых объектов
// и возвращает массив объектов {emoji: emoji, count: counter[emoji]}

import { TReaction } from '../pages/Forum/types'

interface Inter {
  [key: string]: number
}
export const filterAndCountDublicate = (data: TReaction[]) => {
  const inter: Inter = {}
  data.forEach((item, index) => {
    inter[JSON.stringify(item)] = index
  })
  const result = Object.keys(inter).map(item => JSON.parse(item))

  const counter = result.reduce((obj, i) => {
    const res = { ...obj }
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
