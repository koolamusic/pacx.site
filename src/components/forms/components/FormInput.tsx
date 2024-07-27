import * as React from 'react'
import { forwardRef, type PropsWithoutRef, type ComponentPropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, type InputProps, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FormControl, type FormControlProps, FormLabel } from '@chakra-ui/form-control'
import { type ComponentWithAs, FormErrorMessage, Icon, type IconProps, InputLeftElement } from '@chakra-ui/react'

export type LabeledTextFieldProps = {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  // type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'date' | 'file';
  outerProps?: PropsWithoutRef<FormControlProps>
  labelProps?: ComponentPropsWithoutRef<'label'>
  leftElement?: boolean
  rightElement?: boolean
  placeholder?: string
  icon?: ComponentWithAs<'svg', IconProps>
  props?: ComponentPropsWithoutRef<typeof Input>
} & InputProps

export const FormInput = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, type, icon, labelProps, name, leftElement, rightElement, ...inputProps }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors }
    } = useFormContext()
    // const error = Array.isArray(errors[name]) ? errors[name]?.types?.join(', ') : errors[name]?.message || errors[name];
    const error = Array.isArray(errors)
      ? errors[name]?.message || Object.entries(errors[name]?.types || {})
      : errors[name]?.message?.toString()
    const isErrorInField = errors[name] ? true : false

    return (
      <FormControl ref={ref} isInvalid={isErrorInField}>
        {label && (
          <FormLabel color={'default'} fontSize="sm" {...labelProps}>
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
            size={'lg'}
            fontSize="md"
            _placeholder={{ fontSize: 'sm' }}
            _hover={{ borderColor: 'primary' }}
            _focus={{ borderColor: 'primary' }}
            isDisabled={isSubmitting}
            {...register(name, {
              valueAsNumber: type === 'number'
            })}
            // {...inputProps}
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
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
