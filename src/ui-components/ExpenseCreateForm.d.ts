/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExpenseCreateFormInputValues = {
    item?: string;
    category?: string;
    amount?: number;
};
export declare type ExpenseCreateFormValidationValues = {
    item?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpenseCreateFormOverridesProps = {
    ExpenseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExpenseCreateFormProps = React.PropsWithChildren<{
    overrides?: ExpenseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExpenseCreateFormInputValues) => ExpenseCreateFormInputValues;
    onSuccess?: (fields: ExpenseCreateFormInputValues) => void;
    onError?: (fields: ExpenseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExpenseCreateFormInputValues) => ExpenseCreateFormInputValues;
    onValidate?: ExpenseCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExpenseCreateForm(props: ExpenseCreateFormProps): React.ReactElement;
