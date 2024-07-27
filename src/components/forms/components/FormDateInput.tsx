import * as React from "react";
import {
  forwardRef,
  type PropsWithoutRef,
  type ComponentPropsWithoutRef,
} from "react";
import { useFormContext } from "react-hook-form";
import {
  Input,
  type InputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/input";
import {
  FormControl,
  type FormControlProps,
  FormLabel,
} from "@chakra-ui/form-control";
import {
  type ComponentWithAs,
  FormErrorMessage,
  Icon,
  type IconProps,
  InputLeftElement,
} from "@chakra-ui/react";

export interface LabeledTextFieldProps extends InputProps {
  /** Field name. */
  name: string;
  /** Field label. */
  label?: string;
  outerProps?: PropsWithoutRef<FormControlProps>;
  labelProps?: ComponentPropsWithoutRef<"label">;
  leftElement?: boolean;
  rightElement?: boolean;
  icon?: ComponentWithAs<"svg", IconProps>;
  props?: ComponentPropsWithoutRef<typeof Input>;
}

export const FormDateInput = forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(
  (
    {
      label,
      outerProps,
      icon,
      labelProps,
      name,
      leftElement,
      rightElement,
      ...props
    },
    ref,
  ) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext();
    const error = Array.isArray(errors)
      ? errors[name]?.message || Object.entries(errors[name]?.types || {})
      : errors[name]?.message?.toString();
    const isErrorInField = errors[name] ? true : false;

    return (
      <FormControl ref={ref} isInvalid={isErrorInField}>
        {label && (
          <FormLabel color={"default"} fontSize="sm" {...labelProps}>
            {label}
          </FormLabel>
        )}
        <InputGroup>
          {leftElement && (
            <InputLeftElement>
              <Icon as={icon} color="primary.500" />
            </InputLeftElement>
          )}
          <Input
            size={"lg"}
            fontSize="md"
            _placeholder={{ fontSize: "sm" }}
            _hover={{ borderColor: "primary" }}
            _focus={{ borderColor: "primary" }}
            isDisabled={isSubmitting}
            type={"datetime-local"}
            {...register(name, {
              valueAsDate: true,
            })}
            // {...props}
          />
          {rightElement && (
            <InputRightElement>
              <Icon as={icon} color="primary.500" />
            </InputRightElement>
          )}
        </InputGroup>
        <FormErrorMessage fontSize="xs" role="alert" color="red.500">
          {error?.toString()}
        </FormErrorMessage>
      </FormControl>
    );
  },
);

FormDateInput.displayName = "FormDateInput";

export default FormDateInput;
