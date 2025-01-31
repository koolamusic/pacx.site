import { forwardRef, type PropsWithoutRef, type ComponentPropsWithoutRef } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Flex, useColorModeValue, FormErrorMessage } from '@chakra-ui/react'
import Select from 'react-select'

interface OptionProps {
  readonly value: string
  readonly label: string
}

export interface LabeledSelectFieldProps extends ComponentPropsWithoutRef<'input'> {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field placeholder. */
  placeholder?: string
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>
  labelProps?: ComponentPropsWithoutRef<'label'>
  options: readonly OptionProps[]
  width?: string
}

const FormSelect = forwardRef<HTMLInputElement, LabeledSelectFieldProps>(
  ({ label, outerProps, labelProps, name, placeholder, width, options, ...props }, ref) => {
    const {
      formState: { isSubmitting, errors },
      control
    } = useFormContext()
    const error = Array.isArray(errors[name]) ? errors[name]?.types?.message?.toString() : errors[name]?.message?.valueOf() || errors[name]

    return (
      <FormControl ref={ref} {...outerProps}>
        <Flex align="center" justify="space-between">
          <FormLabel color={useColorModeValue('black', 'white')} fontSize="sm" {...labelProps}>
            {label}
          </FormLabel>
        </Flex>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              placeholder={placeholder}
              {...field}
              options={options}
              isDisabled={isSubmitting}
              components={{
                IndicatorSeparator: () => null
              }}
              styles={{
                menuList(provided) {
                  return {
                    ...provided,
                    backgroundColor: '#011627',
                    color: 'white'
                  }
                },
                valueContainer(provided) {
                  return {
                    ...provided,
                    color: 'orange',
                    backgroundColor: 'none',
                    width: width || '200px',
                    fontSize: '14px'
                  }
                },
                control(provided) {
                  return {
                    ...provided,
                    borderRadius: '8px',
                    minHeight: '42px',
                    border: '.7px solid',
                    boxShadow: 'none',
                    backgroundColor: 'none',
                    '&:hover': {
                      borderColor: 'brand'
                    }
                  }
                }
              }}
              {...props}
            />
          )}
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

FormSelect.displayName = 'FormSelect'

export default FormSelect
