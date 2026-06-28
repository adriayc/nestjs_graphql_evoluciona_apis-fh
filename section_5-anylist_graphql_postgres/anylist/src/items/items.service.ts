import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  async create(createItemInput: CreateItemInput, user: User): Promise<Item> {
    const newItem = this.itemsRepository.create({ ...createItemInput, user }); // Crear el item
    return await this.itemsRepository.save(newItem); // Guardar en la DB y retorna el item
  }

  async findAll(user: User): Promise<Item[]> {
    // TODO: filtrar, paginar, por usuario...
    // Filter by user
    return await this.itemsRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
    });
  }

  async findOne(id: string, user: User) {
    const item = await this.itemsRepository.findOneBy({
      id,
      user: {
        id: user.id,
      },
    });
    if (!item) throw new NotFoundException(`Item with id #${id} not found`);

    // item.user = user; // Agregar el user (no recomendado)

    return item;
  }

  async update(
    id: string,
    updateItemInput: UpdateItemInput,
    user: User,
  ): Promise<Item> {
    await this.findOne(id, user);

    // const item = (await this.itemsRepository.preload({
    //   ...updateItemInput,
    //   user,
    // })) as Item; // Otra opción
    const item = (await this.itemsRepository.preload(updateItemInput)) as Item;
    if (!item) throw new NotFoundException(`Item with id #${id} not found`);

    return await this.itemsRepository.save(item);
  }

  async remove(id: string, user: User): Promise<Item> {
    // TODO: soft delete, integridad referencial
    const item = await this.findOne(id, user);

    await this.itemsRepository.remove(item);

    return { ...item, id };
  }
}
