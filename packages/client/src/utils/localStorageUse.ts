const getItem = (value: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(value)
  }
}
const deleteItem = (value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.delete(value)
  }
}
const saveItem = (value: string, data: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(value, data)
  }
}
export const localStorageUse = {
  getItem,
  deleteItem,
  saveItem,
}
