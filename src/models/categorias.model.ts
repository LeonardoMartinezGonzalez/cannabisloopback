import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorias extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombreCategoria: string;

  @property({
    type: 'string',
  })
  descripcionCategoria?: string;

  @property({
    type: 'number',
    default: 0,
  })
  ofertaCategoria?: number;

  @property({
    type: 'number',
    default: 0,
  })
  descuentoCategoria?: number;

  @property({
    type: 'string',
    default: 'defaultCannabis.jpg',
  })
  imagencategoria?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  @property({
    type: 'number',
    id: true,
  })
  idCategoria?: number;


  constructor(data?: Partial<Categorias>) {
    super(data);
  }
}

export interface CategoriasRelations {
  // describe navigational properties here
}

export type CategoriasWithRelations = Categorias & CategoriasRelations;
