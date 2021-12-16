import React from 'react'
import MyBox from '@components/utils/my-box'
import { IconButton, FormControl, FormErrorMessage, Heading, Input, VStack, HStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { BiSearchAlt } from 'react-icons/bi'
import { isValidAddress } from '@services/address'
import { useRouter } from 'next/router'

export default function SearchAddress() {
    
    const router = useRouter()

    return (
        <MyBox>
            <VStack 
                spacing='5'
                align='stretch'
            >
                <Heading as='h2' fontSize='2xl'>Reasearch student with address</Heading>
                <Formik
                    initialValues={{
                        address: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true)
                        router.push(`/address/${values.address}`)
                    }}
                    validate={(values) => {
                        const errors: Partial<typeof values> = {}
                        if (!isValidAddress(values.address)) {
                            errors.address = 'Invalid address'
                        }
                        return errors
                    }}

                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form>
                            <FormControl isInvalid={errors.address !== undefined && touched.address}>
                                {/* <FormLabel htmlFor='account'>Student&apos;s address</FormLabel> */}
                                <HStack
                                    spacing='3'
                                    align='center'
                                >
                                    <Field name='address'>
                                        {({ field }: any) => (
                                            <Input {...field} name='address' placeholder='0x42F...' variant='filled' />
                                        )}
                                    </Field>
                                    <IconButton
                                        isLoading={isSubmitting}
                                        type='submit'
                                        aria-label='Search'
                                        icon={<BiSearchAlt />}
                                    />
                                </HStack>
                                <FormErrorMessage>{errors.address}</FormErrorMessage>
                            </FormControl>
                            
                        </Form>
                    )}
                </Formik>
            </VStack>
        </MyBox>
    )
}
