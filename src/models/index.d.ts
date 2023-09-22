import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Category {
  ENTERTAINMENT = "ENTERTAINMENT",
  FOOD = "FOOD",
  BEAUTY = "BEAUTY",
  ETC = "ETC"
}



type EagerBudget = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Budget, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly budget: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBudget = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Budget, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly budget: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Budget = LazyLoading extends LazyLoadingDisabled ? EagerBudget : LazyBudget

export declare const Budget: (new (init: ModelInit<Budget>) => Budget) & {
  copyOf(source: Budget, mutator: (draft: MutableModel<Budget>) => MutableModel<Budget> | void): Budget;
}

type EagerExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: string;
  readonly category?: Category | keyof typeof Category | null;
  readonly amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: string;
  readonly category?: Category | keyof typeof Category | null;
  readonly amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense) & {
  copyOf(source: Expense, mutator: (draft: MutableModel<Expense>) => MutableModel<Expense> | void): Expense;
}