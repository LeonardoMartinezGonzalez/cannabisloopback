import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongocannabisDataSource} from '../datasources';
import {Clientes, ClientesRelations} from '../models';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype.idCliente,
  ClientesRelations
> {
  constructor(
    @inject('datasources.mongocannabis') dataSource: MongocannabisDataSource,
  ) {
    super(Clientes, dataSource);
  }
}
