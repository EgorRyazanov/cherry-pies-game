import { DataTypes, Model } from 'sequelize'

import sequelize from '../db'

class Topic extends Model {
  id?: number | undefined
  title: string | undefined
  text?: string | undefined
  likes_count?: number | undefined
  description: string | undefined
}

Topic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    likes_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Topic',
    tableName: 'topic',
  }
)

export default Topic
