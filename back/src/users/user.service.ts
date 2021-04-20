import { createHash } from 'crypto';
import { CharacterModel } from '../models/CharacterModel';
import { UserModel } from '../models/UserModel';

export class UserService {
  static async getAll() {
    return await UserModel.find({});
  }

  static async getFiltered(filter: Record<string, any>) {
    return UserModel.find({ ...filter });
  }

  static async getOne(filter: Record<string, any>) {
    return UserModel.findOne({ ...filter }).populate('character');
  }

  static async create({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
    const encrypt = createHash('sha512');
    const character = await CharacterModel.create({});
    return await UserModel.create({
      username,
      email,
      character: character._id,
      password: encrypt.update(password).digest('hex'),
    });
  }
}
