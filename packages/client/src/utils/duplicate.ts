// ф-я фильтрует массив от одинаковых объектов
// и возвращает массив объектов {emoji: emoji, count: counter[emoji]}

import { TReaction } from '../pages/Forum/types'

interface Inter {
  [key: string]: number
}
export const filterAndCountDublicate = (data: TReaction[]) => {
  const newArr = data.slice()
  const inter: Inter = {}
  newArr.forEach((item, index) => {
    inter[JSON.stringify(item)] = index
  })
  let result = Object.keys(inter).map(item => JSON.parse(item))

  let counter = result.reduce((o, i) => {
    if (!o.hasOwnProperty(i.emoji)) {
      o[i.emoji] = 0
    }
    o[i.emoji]++
    return o
  }, {})

  let currentArr = Object.keys(counter).map(emoji => {
    return { emoji: emoji, count: counter[emoji] }
  })

  return currentArr
}
