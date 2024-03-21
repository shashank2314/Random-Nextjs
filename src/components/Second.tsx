// Second.tsx
import { Box, Button, Container, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Second = () => {
    return (
        <Flex padding='2rem 3rem' width='95%' rounded='xl' bg='white' gap='2.5rem' flexDirection='column' >
            <Box >
                <Heading as='h2' size='md' marginBottom='1rem'>
                    Linked Products
                </Heading>
                <Text color='gray.500'>
                    Add upselling, cross selling & bundled products to increase average order value.
                </Text>
            </Box>
            <HStack justifyContent='space-between' flexWrap='wrap' gap='1rem'>

                <Flex flexDirection='column' alignItems='start' justifyContent='center' gap='10px'>
                    <Heading as='h2' size='md'>
                        Upselling Products
                    </Heading>
                    <Button colorScheme='twitter' variant='outline' bg='blue.200' fontWeight='bold'>
                        <Text fontWeight='bold' fontSize='2xl' paddingRight='10px'>+ </Text> Add Upselling Products
                    </Button>
                    <Text color='gray.600'>No Upselling Product has been added yet.</Text>
                </Flex>
                <Flex flexDirection='column' alignItems='start' justifyContent='center' gap='10px'>
                    <Heading as='h2' size='md'>
                        Cross Selling Products
                    </Heading>
                    <Button colorScheme='twitter' variant='outline' bg='blue.200' fontWeight='bold'>
                        <Text fontWeight='bold' fontSize='2xl' paddingRight='10px'>+ </Text> Add Cross Selling Products
                    </Button>
                    <Text color='gray.600'>No Upselling Product has been added yet.</Text>
                </Flex>
                <Flex flexDirection='column' alignItems='start' justifyContent='center' gap='10px'>
                    <Heading as='h2' size='md'>
                        Bundled Products
                    </Heading>
                    <Button colorScheme='twitter' variant='outline' bg='blue.200' fontWeight='bold'>
                        <Text fontWeight='bold' fontSize='2xl' paddingRight='10px'>+ </Text> Add Bundled Products
                    </Button>
                    <Text color='gray.600'>No Upselling Product has been added yet.</Text>
                </Flex>
            </HStack>
            <Box>
                <Flex direction='column' alignItems='end'>
                    <Button colorScheme='messenger' variant='solid' fontWeight='bold'>
                        Save
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Second
