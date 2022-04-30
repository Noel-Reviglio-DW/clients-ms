import { Injectable } from '@nestjs/common';
import { Client, ClientDocument } from './schemas/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {

  constructor( @InjectModel('Client.name') private ClientModel: Model<ClientDocument> )  {}

  async getOne(id: string): Promise<Client> {
    return await this.ClientModel.findById(id);
  }

  async getAll(id: string): Promise<Client[]> {
    return new Array<Client>();
  }

  async create(createClient: CreateClientDto): Promise<Client> {
    return new Client;
  }

  async update(updateClient: UpdateClientDto): Promise<Client> {
    return new Client;
  }

  async remove(id: string): Promise<string> {
    return `The client with id: ${id} was removed!`;
  }
}
