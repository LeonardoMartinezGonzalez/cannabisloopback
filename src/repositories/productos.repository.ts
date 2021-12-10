import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongocannabisDataSource} from '../datasources';
import {Productos, ProductosRelations} from '../models';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.idProducto,
  ProductosRelations
> {
  constructor(
    @inject('datasources.mongocannabis') dataSource: MongocannabisDataSource,
  ) {
    super(Productos, dataSource);
  }
}
