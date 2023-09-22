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
export declare type BudgetUpdateFormInputValues = {
    budget?: number;
};
export declare type BudgetUpdateFormValidationValues = {
    budget?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BudgetUpdateFormOverridesProps = {
    BudgetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    budget?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BudgetUpdateFormProps = React.PropsWithChildren<{
    overrides?: BudgetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    budget?: any;
    onSubmit?: (fields: BudgetUpdateFormInputValues) => BudgetUpdateFormInputValues;
    onSuccess?: (fields: BudgetUpdateFormInputValues) => void;
    onError?: (fields: BudgetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BudgetUpdateFormInputValues) => BudgetUpdateFormInputValues;
    onValidate?: BudgetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BudgetUpdateForm(props: BudgetUpdateFormProps): React.ReactElement;
