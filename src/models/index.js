// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "ENTERTAINMENT": "ENTERTAINMENT",
  "FOOD": "FOOD",
  "BEAUTY": "BEAUTY",
  "ETC": "ETC"
};

const { Budget, Expense } = initSchema(schema);

export {
  Budget,
  Expense,
  Category
};