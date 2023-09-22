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
export declare type AddBudgetInputValues = {
    budget?: number;
};
export declare type AddBudgetValidationValues = {
    budget?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddBudgetOverridesProps = {
    AddBudgetGrid?: PrimitiveOverrideProps<GridProps>;
    budget?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddBudgetProps = React.PropsWithChildren<{
    overrides?: AddBudgetOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddBudgetInputValues) => AddBudgetInputValues;
    onSuccess?: (fields: AddBudgetInputValues) => void;
    onError?: (fields: AddBudgetInputValues, errorMessage: string) => void;
    onChange?: (fields: AddBudgetInputValues) => AddBudgetInputValues;
    onValidate?: AddBudgetValidationValues;
} & React.CSSProperties>;
export default function AddBudget(props: AddBudgetProps): React.ReactElement;
