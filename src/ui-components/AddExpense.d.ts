/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddExpenseInputValues = {
    item?: string;
    category?: string;
    amount?: number;
};
export declare type AddExpenseValidationValues = {
    item?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddExpenseOverridesProps = {
    AddExpenseGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddExpenseProps = React.PropsWithChildren<{
    overrides?: AddExpenseOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddExpenseInputValues) => AddExpenseInputValues;
    onSuccess?: (fields: AddExpenseInputValues) => void;
    onError?: (fields: AddExpenseInputValues, errorMessage: string) => void;
    onChange?: (fields: AddExpenseInputValues) => AddExpenseInputValues;
    onValidate?: AddExpenseValidationValues;
} & React.CSSProperties>;
export default function AddExpense(props: AddExpenseProps): React.ReactElement;
