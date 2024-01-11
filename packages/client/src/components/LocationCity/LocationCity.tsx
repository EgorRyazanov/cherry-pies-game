import { useEffect, useState } from 'react'

import { MapPin } from 'phosphor-react'
import axios from 'axios'
import clsx from 'clsx'
import { localStorageUse } from '../../utils/localStorageUse'
import styles from './LocationCity.module.scss'

type LocationCityProps = {
  open: boolean
  isEdit: () => void
}
export const LocationCity: React.FC<LocationCityProps> = ({ open, isEdit }) => {
  const [isCity, setIsCity] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEditCity, setEditIsCity] = useState(isCity ?? '')
  const [positions, setPositions] = useState<number[] | null>(null)

  useEffect(() => {
    if (isCity && localStorageUse.getItem('city') !== isCity) {
      localStorageUse.saveItem('city', isCity)
    }
    if (!isCity && localStorageUse.getItem('city')) {
      setIsCity(localStorageUse.getItem('city') ?? '')
    }
  }, [isCity])

  const getCurrentCity = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      )
      const city =
        response.data.address.city ||
        response.data.address.town ||
        response.data.address.village
      if (city) {
        setIsCity(city)
        localStorageUse.saveItem('city', city)
      }
    } catch (error) {
      console.error('Ошибка при получении названия города:', error)
    }
    setIsLoading(false)
  }

  const getPositions = async () => {
    try {
      setIsLoading(true)
      if (navigator.geolocation) {
        const position: { coords: { latitude: number; longitude: number } } =
          await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })

        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        localStorageUse.saveItem(
          'city_position',
          JSON.stringify([latitude.toFixed(2), longitude.toFixed(2)])
        )
        setPositions([latitude, longitude])
        getCurrentCity(latitude, longitude)
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Geolocation не поддерживается вашим браузером.')
    }
  }

  useEffect(() => {
    getPositions()
    if (!positions) {
      setIsLoading(false)
    }
  }, [])

  const getCity = (city: { name: string; position: number[] }) => {
    setEditIsCity(city.name)
    setPositions(city.position)
  }

  const onCancel = () => {
    setEditIsCity(isCity ?? '')
    isEdit()
  }

  const handleNext = () => {
    setIsCity(isEditCity)
    if (positions) {
      localStorageUse.saveItem(
        'city_position',
        JSON.stringify([positions[0].toFixed(2), positions[1].toFixed(2)])
      )
    }
    isEdit()
  }

  return (
    <div className={styles.Wrapper}>
      {!open ? (
        <div className={styles.myCity}>
          <MapPin size={22} color={'#45cad6'} weight={'fill'} />Я здесь!{' '}
          {isCity}
        </div>
      ) : (
        <>
          <div className={clsx(styles.LocationCity)}>
            <MapPin size={28} color={'#1e909b'} weight={'fill'} />
            <h1>
              {isLoading ? <></> : <>{isCity ? isCity : 'Указать город'}</>}
            </h1>
          </div>

          <div>
            <div className={styles.ModalCity}>
              <div className={styles.ListCity}>
                {listCity.map((city, index) => (
                  <div
                    key={index}
                    className={clsx(styles.NameCity, {
                      [styles.EditCity]: isEditCity === city.name,
                    })}
                    onClick={() => getCity(city)}>
                    <h2>{city.name}</h2>
                  </div>
                ))}
              </div>
              <div className={styles.Buttons}>
                <button onClick={onCancel} className={styles.buttonState}>
                  Отмена
                </button>
                <button onClick={handleNext} className={styles.buttonState}>
                  Далее
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const listCity = [
  {
    name: 'Москва',
    position: [55.7558, 37.6173],
  },
  {
    name: 'Санкт-Петербург',
    position: [59.9343, 30.3351],
  },
  {
    name: 'Новосибирск',
    position: [55.0084, 82.9357],
  },
  {
    name: 'Краснодар',
    position: [45.0355, 38.9753],
  },
  {
    name: 'Екатеринбург',
    position: [56.8389, 60.6057],
  },
  {
    name: 'Казань',
    position: [55.7903, 49.1347],
  },
  {
    name: 'Уфа',
    position: [54.7388, 55.9721],
  },
  {
    name: 'Нижний Новгород',
    position: [56.2965, 43.9361],
  },
  {
    name: 'Челябинск',
    position: [55.1644, 61.4368],
  },
  {
    name: 'Самара',
    position: [53.1959, 50.1002],
  },
  {
    name: 'Ростов-на-Дону',
    position: [47.2357, 39.7015],
  },
  {
    name: 'Омск',
    position: [54.9849, 73.3673],
  },
  {
    name: 'Красноярск',
    position: [56.0097, 92.8525],
  },
  {
    name: 'Воронеж',
    position: [51.6606, 39.2003],
  },
  {
    name: 'Пермь',
    position: [58.0093, 56.2464],
  },
  {
    name: 'Волгоград',
    position: [48.708, 44.5133],
  },
  {
    name: 'Владивосток',
    position: [43.1198, 131.8869],
  },
]
