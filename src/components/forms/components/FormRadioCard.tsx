/* eslint-disable  @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { type ComponentPropsWithoutRef, forwardRef, type PropsWithoutRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  chakra,
  type StackProps,
  Box,
  type BoxProps,
  Circle,
  Text,
  Icon,
  useId,
  useRadio,
  useRadioGroup,
  type UseRadioProps,
  useStyleConfig,
  HStack
} from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import { MdCheckCircle as CheckCircleIcon } from 'react-icons/md'

interface RadioCardGroupProps<T> extends Omit<StackProps, 'onChange'> {
  name?: string
  value?: T
  defaultValue?: string
  onChange?: (value: T) => void
}

export interface FormRadioCardOptionProps {
  name: string
  value: string
  /** optional metadata for radio card  */
  metadata?: string | number
}

export interface FormRadioCardProps extends ComponentPropsWithoutRef<'input'> {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>
  labelProps?: ComponentPropsWithoutRef<'label'>
  options: FormRadioCardOptionProps[]
}

export const RadioCardGroup = forwardRef(<T extends string>(props: RadioCardGroupProps<T>, ref: any) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange
  })

  const cards = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<RadioCardProps>>(React.isValidElement)
        .map((card) => {
          return React.cloneElement(card, {
            radioProps: getRadioProps({
              value: card.props.value
            })
          })
        }),
    [children, getRadioProps]
  )

  return (
    <Stack ref={ref} {...getRootProps(rest)} w={'full'} rounded={'3xl'}>
      {cards}
    </Stack>
  )
})

RadioCardGroup.displayName = 'RadioCardGroup'

interface RadioCardProps extends BoxProps {
  value: string
  radioProps?: UseRadioProps
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, ...rest } = props
  const { getInputProps, getCheckboxProps, getLabelProps, state } = useRadio(radioProps)
  const id = useId(undefined, 'radio-button')

  const styles = useStyleConfig('RadioCard', props)
  const inputProps = getInputProps()
  const checkboxProps = getCheckboxProps()
  const labelProps = getLabelProps()
  return (
    <Box
      as="label"
      cursor="pointer"
      {...labelProps}
      sx={{
        '.focus-visible + [data-focus]': {
          boxShadow: 'outline',
          zIndex: 1
        }
      }}
    >
      <chakra.input {...inputProps} aria-labelledby={id} />
      <Box sx={styles} {...checkboxProps}>
        <Stack direction="row">
          {state.isChecked ? (
            <Circle bg="emphasized" size="4">
              <Icon as={CheckCircleIcon} boxSize="2.5" color="inverted" />
            </Circle>
          ) : (
            <Circle borderWidth="2px" size="4" />
          )}
          <HStack flex={1} justify={'flex-end'}>
            {children}
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}

const FormRadioCard = forwardRef<HTMLInputElement, FormRadioCardProps>(({ name, label, options, outerProps, labelProps }, ref) => {
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
      flexDirection="column"
      alignItems={flex}
      justifyContent={flex}
      {...outerProps}
      isInvalid={isErrorInField}
    >
      <FormLabel {...labelProps}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          // @ts-ignore
          <RadioCardGroup
            // @ts-ignore
            defaultValue={options[0].value}
            spacing="3"
            {...field}
          >
            {options.map((option) => (
              <RadioCard key={option.value} value={option.value}>
                <Text color="muted" fontSize="sm">
                  {option.name}
                </Text>
                <Text color="emphasized" fontWeight="medium" fontSize="sm">
                  {/* We are stubbing the stakes value for demo purposes */}
                  {option.metadata || 0} stakes
                </Text>
              </RadioCard>
            ))}
          </RadioCardGroup>
        )}
      />

      {error && (
        <FormErrorMessage fontSize="sm" role="alert" color="red.500">
          {String(error)}
        </FormErrorMessage>
      )}
    </FormControl>
  )
})

FormRadioCard.displayName = 'FormRadioCard'

export default FormRadioCard
