import type {
  CheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
} from "react-aria-components";
import {
  Checkbox,
  CheckboxGroup,
  FieldError,
  Label,
  Text,
} from "react-aria-components";

interface MyCheckboxGroupProps extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function MyCheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyCheckboxGroupProps) {
  return (
    <CheckboxGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </CheckboxGroup>
  );
}

interface MyCheckboxProps extends Omit<CheckboxProps, "children"> {
  children?: React.ReactNode;
}

function MyCheckbox({ children, ...props }: MyCheckboxProps) {
  return (
    <Checkbox
      className="group flex items-center selected:text-maroon bg-mantle p-4"
      {...props}>
      {children}
      <div className="checkbox group-selected:p-4 group-selected:bg-red" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
    </Checkbox>
  );
}

export default MyCheckbox;
