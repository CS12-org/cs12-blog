import { Input, Label, TextField } from "react-aria-components";

type Props = {
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
};

export function TextInput({ label, name, placeholder, className = "" }: Props) {
  return (
    <TextField name={name} className="flex flex-col gap-1 w-full">
      <Label className="text-sm font-medium">{label}</Label>
      <Input
        placeholder={placeholder}
        className={`bg-mantle  rounded-md  text-xs focus:outline-none focus:ring-1 focus:ring-lavender ${className}`}
      />
    </TextField>
  );
}
