// components/MyTextField.tsx
import React, { useRef } from "react";
import { useTextField } from "react-aria";

type Props = {
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string; // اضافه کردن این پراپ
};

export function MyTextField({ label, name, placeholder, className = "" }: Props) {
  let ref = useRef<HTMLInputElement>(null);
  let { labelProps, inputProps } = useTextField(
    {
      label,
      name,
      placeholder
    },
    ref
  );

  return (
    <div className="flex flex-col gap-1">
      <label {...labelProps} className="text-sm font-medium">
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        className={`bg-mantle p-2 w-full rounded-md h-9 text-xs focus:outline-none focus:ring-1 focus:ring-lavender ${className}`}
      />
    </div>
  );
}
