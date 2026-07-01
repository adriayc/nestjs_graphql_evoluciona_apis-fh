import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateListInput, UpdateListInput } from './dto/inputs';
import { List } from './entities/list.entity';
import { User } from 'src/users/entities/user.entity';
import { PaginationArgs } from '../common/dto/args/pagination.args';
import { SearchArgs } from 'src/common/dto/args';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private readonly listsRespository: Repository<List>,
  ) {}

  async create(createListInput: CreateListInput, user: User): Promise<List> {
    const newList = this.listsRespository.create({ ...createListInput, user });

    return await this.listsRespository.save(newList);
  }

  async findAll(
    user: User,
    paginationArgs: PaginationArgs,
    searchArgs: SearchArgs,
  ): Promise<List[]> {
    const { limit, offset } = paginationArgs;
    const { search } = searchArgs;

    // return await this.listsRespository.find({
    //   where: {
    //     user: {
    //       id: user.id,
    //     },
    //   },
    //   take: limit,
    //   skip: offset,
    // });

    const queryBuilder = this.listsRespository
      .createQueryBuilder()
      .where('"userId" = :userId', { userId: user.id })
      .limit(limit)
      .offset(offset);

    if (search) {
      queryBuilder.andWhere('LOWER(name) like :name', {
        name: `%${search.toLowerCase()}%`,
      });
    }

    return queryBuilder.getMany();
  }

  async findOne(id: string, user: User): Promise<List> {
    const list = await this.listsRespository.findOneBy({
      id,
      user: { id: user.id },
    });
    if (!list) throw new NotFoundException(`List with id #${id} not found`);

    return list;
  }

  async update(
    id: string,
    updateListInput: UpdateListInput,
    user: User,
  ): Promise<List> {
    await this.findOne(id, user); // Validate list

    const updateList = await this.listsRespository.preload({
      ...updateListInput,
      user,
    });
    if (!updateList)
      throw new NotFoundException(`List with id #${id} not found`);

    return await this.listsRespository.save(updateList);
  }

  async remove(id: string, user: User): Promise<List> {
    const list = await this.findOne(id, user); // Validate list
    await this.listsRespository.remove(list);

    return { ...list, id };
  }
}
