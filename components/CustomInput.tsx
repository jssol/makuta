import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CustomInput = ({control, label, type = "text", name}: {control: any, label: string, type: string, name: string}) => {
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
                placeholder="Enter your email"
                className="input-class"
                type={type}
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
