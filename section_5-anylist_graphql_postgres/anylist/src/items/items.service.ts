import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemInput); // Crear el item
    return await this.itemsRepository.save(newItem); // Guardar en la DB y retorna el item
  }

  async findAll(): Promise<Item[]> {
    // TODO: filtrar, paginar, por usuario...
    return await this.itemsRepository.find();
  }

  async findOne(id: string) {
    const item = await this.itemsRepository.findOneBy({ id });
    if (!item) throw new NotFoundException(`Item with id #${id} not found`);

    return item;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
