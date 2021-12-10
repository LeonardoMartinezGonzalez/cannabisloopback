import {Entity, model, property} from '@loopback/repository';

@model()
export class Clientes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idCliente: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  telefonoCelular: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  apellidos?: string;

  @property({
    type: 'string',
  })
  estado?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  codigopostal?: string;

  @property({
    type: 'string',
  })
  telefonocasa?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  banderaFacebook?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  banderaGmail?: boolean;

  @property({
    type: 'string',
    default: 'default.jpg',
  })
  imageFile?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estadoUsuario?: boolean;


  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
