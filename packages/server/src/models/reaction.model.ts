import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Reaction extends Model {
  id?: number | undefined
  comment_id?: string | undefined
  emoji?: string | undefined
  user_id?: string | undefined
}

Reaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_id: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'reaction',
    modelName: 'Reaction',
  }
)

export default Reaction

// force - при каждом запуске создаст новую бд
// alter - добавит если не было бд
sequelize
  .sync({ alter: true })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('База данных готова к использованию')
  })
  .catch(err => {
    console.error('Ошибка создания таблиц:', err)
  })
