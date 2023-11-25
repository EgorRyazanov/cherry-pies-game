interface IData {
  title: string
  body: string
  src: string
}

const useNotification = async (data: IData) => {
  const showNotification = () => {
    const { title, body, src } = data
    const notification = new Notification(title, {
      body: body,
      icon: src,
    })

    const timer = setTimeout(() => {
      notification.close()
    }, 10 * 1000)

    return () => {
      clearTimeout(timer)
    }
  }

  let granted = false

  if (Notification.permission === 'granted') {
    granted = true
  } else if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission()
    granted = permission === 'granted' ? true : false
  }

  granted ? showNotification() : console.log('Error')
}

export default useNotification
