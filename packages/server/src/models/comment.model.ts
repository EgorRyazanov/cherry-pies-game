import { DataTypes, Model } from 'sequelize'

import Topic from './topic.model'
import sequelize from '../db'

class Comment extends Model {
  id: number | undefined
  title: string | undefined
  comment: string | undefined
  user_id?: string | undefined
  topic_id: number | undefined
  likes_count: number | undefined
  reactions?: [] | undefined
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
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    likes_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reactions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
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
