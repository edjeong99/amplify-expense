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
export declare type ExpenseUpdateFormInputValues = {
    item?: string;
    category?: string;
    amount?: number;
};
export declare type ExpenseUpdateFormValidationValues = {
    item?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpenseUpdateFormOverridesProps = {
    ExpenseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExpenseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExpenseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    expense?: any;
    onSubmit?: (fields: ExpenseUpdateFormInputValues) => ExpenseUpdateFormInputValues;
    onSuccess?: (fields: ExpenseUpdateFormInputValues) => void;
    onError?: (fields: ExpenseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExpenseUpdateFormInputValues) => ExpenseUpdateFormInputValues;
    onValidate?: ExpenseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExpenseUpdateForm(props: ExpenseUpdateFormProps): React.ReactElement;
