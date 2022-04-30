import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './schemas/client.entity';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller()
export class ClientsController {
  constructor(private readonly appService: ClientsService) {}

  @MessagePattern('get_client')
  getOne(id: string): Client {
    return this.appService.getOne(id);
  }

  @MessagePattern('get_all_client')
  getAll(params: any): Client[] {
    return this.appService.getAll(params);
  }

  @MessagePattern('create_client')
  create(client: CreateClientDto): Client {
    return this.appService.create(client);
  }

  @MessagePattern('update_client')
  update(client: UpdateClientDto): Client {
    return this.appService.update(client);
  }

  @MessagePattern('get_client')
  remove(id: string): string {
    return this.appService.remove(id);
  }
}
