import { DataTypes, Model } from 'sequelize'

import Topic from './topic.model'
import sequelize from '../db'

class Comment extends Model {
  id: number | undefined
  title: string | undefined
  comment: string | undefined
  topic_id: number | undefined
  likes_count: number | undefined
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    likes_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Topic,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment',
    indexes: [
      {
        name: 'idx_topic_id',
        fields: ['topic_id'],
      },
    ],
  }
)

export default Comment
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
