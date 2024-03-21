// First.tsx

import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const First = () => {
    return (
        <Flex padding='2rem 3rem' width='95%' rounded='xl' bg='white' gap='2.5rem' flexDirection='column' >
            <Box >
                <Heading as='h2' size='md' marginBottom='1rem'>
                    Customizations
                </Heading>
                <Text color='gray.500'>
                    Add modifier options like a text box, checkbox, or file upload to enable further product Customizations.
                </Text>
            </Box>
            <Box>
                <Heading as='h3' size='md' marginBottom='2.5rem'>
                    Modifier Options
                </Heading>
                <Flex flexDirection='column' alignItems='center' justifyContent='center' gap='10px'>
                    <Text color='gray.600'>No modifier option has been added yet.</Text>
                    <Button colorScheme='twitter' variant='outline' bg='blue.200' fontWeight='bold'>
                        <Text fontWeight='bold' fontSize='2xl' paddingRight='10px'>+ </Text> Add Modifier Options
                    </Button>
                </Flex>
            </Box>
            <Box>
                <Heading as='h3' size='md' marginBottom='2.5rem'>
                    Rules
                </Heading>
                <Flex flexDirection='column' alignItems='center' justifyContent='center' gap='10px' marginBottom='2rem'>
                    <Text color='gray.600' fontWeight='semibold'>No rules has been added yet.</Text>
                    <Text color='gray.600' fontWeight='semibold'>Rules can be added after adding Multiple Choice, Pick List, or Checkbox modifier options.</Text>
                </Flex>
                <Flex direction='column'  alignItems='end'>
                    <Button colorScheme='messenger' variant='solid'  fontWeight='bold'>
                        Save
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default First
