import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongocannabisintenert',
  connector: 'mongodb',
  url: 'mongodb://rootcannabis:enter1234@cluster0.itvar.mongodb.net/cannabisDB',
  host: 'https://cloud.mongodb.com/v2/61b2a44370ace905bf72df75#metrics/replicaSet/61b2ad1035c9677a27c785e4/explorer/',
  port: 27017,
  user: 'rootcannabis',
  password: 'enter1234',
  database: 'cannabisDB',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongocannabisintenertDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongocannabisintenert';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongocannabisintenert', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
