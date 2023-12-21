import { DataTypes, Model } from 'sequelize'

import sequelize from '../db'

class Reaction extends Model {
  public id!: number
  public comment_id!: string
  public emoji!: string
  public user_id!: string
}

Reaction.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    comment_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'reactions',
    sequelize,
  }
)

export { Reaction }
