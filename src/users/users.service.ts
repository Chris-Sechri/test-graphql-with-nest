import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      {
        id: 1,
        name: "Chris"
      },
      {
        id: 2,
        name: "Earl Quincy"
      },
      {
        id: 3,
        name: "David"
      },
      {
        id: 4,
        name: "Junior"
      },
    ];
  }

  findOne(id: number) {
    const listUsers = [
      {
        id: 1,
        name: "Chris"
      },
      {
        id: 2,
        name: "Earl Quincy"
      },
      {
        id: 3,
        name: "David"
      },
      {
        id: 4,
        name: "Junior"
      },
    ];
    const user = listUsers.filter((element) => element.id == id);
    return user[0];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
