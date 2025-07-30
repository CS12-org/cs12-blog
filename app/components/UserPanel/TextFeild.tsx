import {
  FieldError,
  Input,
  type InputProps,
  Label,
  TextField,
} from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
} & Omit<InputProps, "children">;

export function TextInput({
  label,
  name,
  placeholder,
  className = "",
  ...inputProps
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField className={className}>
          {label && <Label>{label}</Label>}
          <Input {...field} placeholder={placeholder} {...inputProps} />
          {fieldState.error && (
            <FieldError>{fieldState.error.message}</FieldError>
          )}
        </TextField>
      )}
    />
  );
}
