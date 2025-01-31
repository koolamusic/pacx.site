import { forwardRef, type PropsWithoutRef, type ComponentPropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Flex, FormErrorMessage, Textarea, type TextareaProps } from '@chakra-ui/react'

export interface LabeledTextFieldProps extends TextareaProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>
  labelProps?: ComponentPropsWithoutRef<'label'>
}

export const FormTextarea = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors }
    } = useFormContext()

    const error = Array.isArray(errors)
      ? errors[name]?.message || Object.entries(errors[name]?.types || {})
      : errors[name]?.message?.toString()
    const isErrorInField = errors[name] ? true : false

    return (
      <FormControl ref={ref} isInvalid={isErrorInField}>
        <Flex align="center" justify="space-between">
          {label && (
            <FormLabel color={'default'} fontSize="sm" {...labelProps}>
              {label}
            </FormLabel>
          )}
        </Flex>
        <Textarea
          w="full"
          rounded="lg"
          _placeholder={{ fontSize: 'md' }}
          _hover={{ borderColor: 'primary' }}
          _focus={{ borderColor: 'primary' }}
          disabled={isSubmitting}
          {...register(name)}
          // {...props}
        />
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {String(error)}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }
)

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
