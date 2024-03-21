'use client'
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Container, Box, Input, HStack, VStack, RadioGroup, Radio, Button, Select } from '@chakra-ui/react'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { TbStack } from "react-icons/tb";

import { useDispatch, useSelector } from 'react-redux';
import { UpdateData } from '@/slices/itemSlice';

const page = ({params}:{params:{pageid:string}}) => {
    const [btn1, setbtn1] = useState(true);
    const [btn2, setbtn2] = useState(true);
    const {Data } = useSelector((state:any) => state.item)
    const dispatch = useDispatch()
    const router = useRouter();
    const id = params.pageid;
    let data2 = Data?.filter((item:any) => item?.id === id);
    console.log("data2",data2);
    const [formData,setformData] = useState({
        id:data2[0]?.id,
        name:data2[0]?.name,
        items:data2[0]?.items,
        type:data2[0]?.type,
        statistics:"",
        lastOpened:data2[0]?.lastOpened,
    })
    console.log("data23",formData);

    function ChangeHandler(event:any){
        let {name,type,value,checked} = event.target;
        setformData((prevData) => {
            return{
                ...prevData,
                [name]:(type==="checkbox") ? checked : value
            }
        });
    }

    function SubmitHandler(e:any){
        e.preventDefault();
        data2 = formData;
        dispatch(UpdateData(data2));
        console.log(formData);
        router.push('/Table')
    }

    return (
        
        <Box bg='white' width="100%" padding='2rem' fontSize='1rem'>
            <FormControl as='fieldset'>
                <FormLabel>Name</FormLabel>
                
                <Input type='text' onChange={ChangeHandler} name="name" value={formData.name} placeholder='Enter Catalogue Name' color='gray.900' _placeholder={{ opacity: 1, color: 'gray.500' }} marginBottom='20px'/>
                <HStack alignItems="start">
                    <VStack alignItems="start">
                        <FormLabel as='legend'>
                            Type
                        </FormLabel>
                        <FormLabel color='gray.500'>
                            Choose if this Catalogue will be usedfor sales or marketing
                        </FormLabel>
                    </VStack>
                    <RadioGroup defaultValue='Sales' color='blue.500'>
                        <VStack spacing='24px' alignItems="start">
                            <Box rounded='lg' border='2px' borderColor='blue.600' width='100%' padding='6px 8px'>

                                <Radio value='Sales' alignItems="start" onChange={ChangeHandler} name="type" checked={formData.type==="Sales"} >
                                    <HStack alignItems="start">
                                        <Box rounded='full' bg='blue.200' border='4px' borderColor='blue.600' padding='3px'>
                                            <TbStack />
                                        </Box>
                                        <VStack alignItems="start">
                                            <Text fontSize='lg' fontWeight='bold'>Sales</Text>
                                            <Text fontSize='md'>Users can buy items from this catalogue on website</Text>
                                        </VStack>
                                    </HStack>
                                </Radio>
                            </Box>
                            <Box rounded='lg' border='2px' borderColor='blue.600' width='100%' padding='6px 0px 6px 8px'>

                                <Radio value='Marketing' alignItems="start" onChange={ChangeHandler} name="type" checked={formData.type==="Marketing"} >
                                    <HStack alignItems="start">
                                        <Box rounded='full' bg='blue.200' border='4px' borderColor='blue.600' padding='3px'>
                                            <TbStack />
                                        </Box>
                                        <VStack alignItems="start">
                                            <Text fontSize='lg' fontWeight='bold'>Marketing</Text>
                                            <Text fontSize='md'>Users can only view & post enquiry or order from this catalogue transaction not allowed on website</Text>
                                        </VStack>
                                    </HStack>
                                </Radio>
                            </Box>


                        </VStack>
                    </RadioGroup>

                </HStack>
                <HStack>
                    <Box>
                        <FormLabel>Visibility</FormLabel>
                        <VStack alignItems='start' gap='10px'>
                            <HStack gap='10px'>
                                <Text>Guest CheckOut</Text>
                                <Flex width='2.6rem' height='1.5rem' rounded='full' padding='1px' bg={btn1 ? 'blue.700' : 'white'} flexDirection='column' alignItems={btn1 ? "start" : "end"} onClick={() => { setbtn1(!btn1) }} cursor='pointer' border='2px' borderColor='blue.700'>
                                    <Box aspectRatio='1/1' height='1.4rem' rounded='full' bg={!btn1 ? 'blue.700' : 'white'} />
                                </Flex>
                            </HStack>
                            <Text color='gray.600'>Allow Buyers to place an order without signing up</Text>
                            <HStack gap='30px'>
                                <Text>Hide Catalog</Text>
                                <Flex width='2.6rem' height='1.5rem' rounded='full' padding='1px' bg={btn2 ? 'blue.700' : 'white'} flexDirection='column' alignItems={btn2 ? "start" : "end"} onClick={() => { setbtn2(!btn2) }} cursor='pointer' border='2px' borderColor='blue.700'>
                                    <Box aspectRatio='1/1' height='1.4rem' rounded='full' bg={!btn2 ? 'blue.700' : 'white'} />
                                </Flex>
                            </HStack>
                        </VStack>
                    </Box>
                    <VStack></VStack>
                </HStack>
                <Box width='100%'>
                    <FormLabel>Buyers</FormLabel>

                    <Select placeholder='Select option' name='statistics' onChange={ChangeHandler} value={formData?.statistics}>
                        <option value='60'>Grade1</option>
                        <option value='40'>Grade2</option>
                        <option value='20'>Grade3</option>
                        <option value='12'>Grade4</option>
                    </Select>
                    <Text>Select which buyers can access this catalogue</Text>
                </Box>
                <Flex gap='10px' justifyContent='end'>
                    <Button
                        mt={4}
                        colorScheme='gray'
                        type='reset'
                        onClick={()=>{router.push('/Table')}}
                    >
                        Cancel
                    </Button>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        onClick={SubmitHandler}
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    )
}

export default page
