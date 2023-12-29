import { DataTypes, Model } from 'sequelize'

import sequelize from '../db'
import Comment from './comment.model'

class Reaction extends Model {
  id: number | undefined
  comment_id: string | undefined
  emoji: string | undefined
  user_id: string | undefined
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
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Comment,
        key: 'id',
      },
    },
  },
  {
    tableName: 'reaction',
    modelName: 'Reaction',
    sequelize,
    indexes: [
      {
        name: 'idx_commit_id',
        fields: ['commit_id'],
      },
    ],
  }
)

export default Reaction
