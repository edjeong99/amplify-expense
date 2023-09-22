// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Budget, Expense } = initSchema(schema);

export {
  Budget,
  Expense
};