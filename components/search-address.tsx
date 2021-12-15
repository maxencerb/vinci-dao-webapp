import React from 'react'
import MyBox from '@components/utils/my-box'
import { IconButton, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

export default function SearchAddress() {
    return (
        <MyBox>
            <VStack 
                spacing='5'
                align='stretch'
            >
                <Heading as='h2' fontSize='2xl'>Reasearch student with address</Heading>
                <Formik
                    initialValues={{
                        address: '',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field name='account'>
                            {({ field, form }: any) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='account'>Student&apos;s address</FormLabel>
                                    <Input {...field} id='account' placeholder='0x42F...' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                            </Field>
                            {/* <IconButton
                                isLoading={isSubmitting}
                                type='submit'
                                icon={}
                            /> */}
                        </Form>
                    )}
                </Formik>
            </VStack>
        </MyBox>
    )
}
