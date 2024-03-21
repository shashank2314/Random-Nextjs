// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/reducers';

const store = configureStore({
  reducer : rootReducer,
})
export function Providers({ children }: { children: React.ReactNode }) {
  return <CacheProvider><Provider store = {store}><ChakraProvider >{children}</ChakraProvider></Provider></CacheProvider>
  
}