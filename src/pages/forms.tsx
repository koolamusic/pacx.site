import React from 'react'
import { Meta } from '@/layouts'
import z from 'zod'
import { FormCheckbox, FormInput, FormInputArray, FormTextArea, useForm } from '@/components/forms'
import FormDateInput from '@/components/forms/components/FormDateInput'
import { Stack, HStack, Button, ThemeProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

const formValidationSchema = z.object({
  question: z.string(),
  amount: z.string(),
  supply: z.string(),
  deadline: z.string()
})

type FormInputOptions = z.infer<typeof formValidationSchema>

export default function Page() {
  const handleSubmit = async (data: FormInputOptions) => {
    alert(JSON.stringify(data))
  }
  const { renderForm } = useForm<FormInputOptions>({
    onSubmit: handleSubmit,
    defaultValues: { question: '' },
    schema: formValidationSchema
  })

  return renderForm(
    <ThemeProvider theme={theme}>
      <Meta />

      <Stack spacing={6} mt={12}>
        <FormTextArea name="question" label="Question" />
        <HStack minH={'62px'} align={'flex-start'}>
          <FormInput type="number" name="amount" label="Amount ($MATIC)" />
          <FormDateInput name="deadline" label="Event deadline" />
        </HStack>
        <HStack minH={'62px'} align={'flex-start'}>
          <FormDateInput name="time" label="Resolution Time" />
          <FormInput name="supply" type="string" label="Max Ticket Supply" />
        </HStack>

        <FormCheckbox label="Limit ticket supply" name="limitMaxTicketSupply" />
        <FormInputArray limit={4} addMoreText={'Add more Outcomes'} label="Event Outcomes" name="eventOutcomes" />

        <FormTextArea placeholder={'DSTV website'} name="resolutionSource" label="Resolution Source" />

        <FormInput name="resolutionLink" type="url" label="Resolution link" />
        <Button rounded={'3xl'} fontSize={'lg'} fontWeight="medium">
          Submit
        </Button>
      </Stack>
    </ThemeProvider>
  )
}
