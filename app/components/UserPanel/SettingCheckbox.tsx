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
    <Checkbox {...props}>
      {({ isSelected }) => (
        <div className="flex items-center justify-between gap-2.5 w-full  ">
          {/* باکس کلیک‌پذیر */}
          <div
            className={`flex-1 h-9 rounded-md px-3 py-2 text-xs text-subtext-1 cursor-pointer flex items-center  ${
              isSelected ? "bg-mantle text-maroon" : "bg-mantle "
            }`}
          >
            {children}
          </div>

          {/* دایره مستقل، ولی وابسته به isSelected */}
          <div
            className="relative h-9 w-9 shrink-0 flex items-center justify-center "
            aria-hidden="true"
          >
            <div className="absolute h-9 w-9 rounded-md bg-base opacity-40 " />
            <div
              className={`relative h-4 w-4 rounded-full transition-colors duration-300 cursor-pointer ${
                isSelected ? "bg-teal" : "bg-crust"
              }`}
            />
          </div>
        </div>
      )}
    </Checkbox>
  );
}


export default  MyCheckbox;