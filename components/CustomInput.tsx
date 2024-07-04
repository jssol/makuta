import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { authFormSchema } from "@/lib/utils";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";

interface CustomInputProps {
  control: Control<z.infer<typeof authFormSchema>>;
  label: string;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  placeholder: string;
}

const CustomInput = ({control, label, name, placeholder}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={ name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage
              className="form-message mt-2"
            />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
