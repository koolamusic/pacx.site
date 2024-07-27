import * as React from 'react'
import { type ComponentPropsWithoutRef, forwardRef, type PropsWithoutRef } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup, Stack, type StackProps } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import { type InputProps } from '@chakra-ui/input'

export interface FormRadioProps extends InputProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>
  labelProps?: ComponentPropsWithoutRef<'label'>
  options: string[]
  direction?: StackProps['direction']
}

const FormRadio = forwardRef<HTMLInputElement, FormRadioProps>(({ name, label, options, outerProps, labelProps, direction }, ref) => {
  const {
    formState: { errors },
    control
  } = useFormContext()
  const error = Array.isArray(errors)
    ? errors[name]?.message || Object.entries(errors[name]?.types || {})
    : errors[name]?.message?.toString()
  const isErrorInField = errors[name] ? true : false
  const flex = 'flex-start'

  return (
    <FormControl
      ref={ref}
      display="flex"
      isInvalid={isErrorInField}
      flexDirection="column"
      alignItems={flex}
      justifyContent={flex}
      {...outerProps}
    >
      <FormLabel {...labelProps}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Stack spacing={2} direction={direction} align={'flex-start'}>
              {options.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />

      {error && (
        <FormErrorMessage fontSize="xs" role="alert" color="red.500">
          {String(error)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
})

FormRadio.displayName = 'FormRadio'

export default FormRadio
