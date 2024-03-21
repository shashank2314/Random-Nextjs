import First from '@/components/First'
import Second from '@/components/Second'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <Flex bg='gray.300' width='100%' flexDirection='column' justifyContent='center' alignItems='center' padding='20px 10px' gap='2rem'>
      <First />
      <Second />
    </Flex>
  )
}

export default page
