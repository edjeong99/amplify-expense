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
export declare type BudgetCreateFormInputValues = {
    budget?: number;
};
export declare type BudgetCreateFormValidationValues = {
    budget?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BudgetCreateFormOverridesProps = {
    BudgetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    budget?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BudgetCreateFormProps = React.PropsWithChildren<{
    overrides?: BudgetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BudgetCreateFormInputValues) => BudgetCreateFormInputValues;
    onSuccess?: (fields: BudgetCreateFormInputValues) => void;
    onError?: (fields: BudgetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BudgetCreateFormInputValues) => BudgetCreateFormInputValues;
    onValidate?: BudgetCreateFormValidationValues;
} & React.CSSProperties>;
export default function BudgetCreateForm(props: BudgetCreateFormProps): React.ReactElement;
