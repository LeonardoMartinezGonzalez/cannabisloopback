import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongocannabisDataSource} from '../datasources';
import {Categorias, CategoriasRelations} from '../models';

export class CategoriasRepository extends DefaultCrudRepository<
  Categorias,
  typeof Categorias.prototype.idCategoria,
  CategoriasRelations
> {
  constructor(
    @inject('datasources.mongocannabis') dataSource: MongocannabisDataSource,
  ) {
    super(Categorias, dataSource);
  }
}
