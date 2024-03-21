'use client'
import { TableContainer,Image, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Container, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData } from '@/slices/itemSlice';
import Image1 from "./image.png"

const page = () => {
    const router = useRouter();
    const { Data } = useSelector((state: any) => state.item)
    const dispatch = useDispatch()
    const handleDelete = (data: any) => {
        // setData(
        //     Data.filter((data) => data?.id!==id )
        // );
        dispatch(DeleteData(data))
    }


    const handleUpdate = (data: any) => {
        router.push(`/Edit/${data?.id}`);
    }




    return (
        <Box bg='white' width="100%" padding='2rem' fontSize='1rem'>
            <TableContainer rounded="lg">
                <Table variant='simple'>
                    <Thead bg='purple.100'>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Type</Th>
                            <Th>Statistics</Th>
                            <Th>Last Opened</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Data?.map((data: any) => {
                                return (
                                    <Tr key={data?.id}>
                                        <Td>
                                            <HStack>
                                            <Box>
                                                <Image src="https://bit.ly/dan-abramov" borderRadius='full' boxSize='60px' alt='Background image' />
                                            </Box>
                                            <Flex direction={{ base: 'column' }}>
                                                <div>
                                                    {
                                                        data?.name
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        data?.items
                                                    }
                                                    items
                                                </div>
                                            </Flex>
                                            </HStack>
                                        </Td>
                                        <Td>
                                            {
                                                data?.type
                                            }
                                        </Td>
                                        <Td>
                                            {
                                                data?.statistics
                                            }
                                        </Td>
                                        <Td>
                                            {
                                                data?.lastOpened
                                            } days ago
                                        </Td>
                                        <Td>
                                            <Flex gap='2'>
                                                <RiDeleteBin6Line cursor='pointer' onClick={() => (handleDelete(data))} />
                                                <FiEdit2 cursor='pointer' onClick={() => handleUpdate(data)} />
                                                <IoShareSocialOutline cursor='pointer' />
                                            </Flex>

                                        </Td>
                                    </Tr>
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default page
