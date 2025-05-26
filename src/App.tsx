import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Button, Flex, Typography, Col, Row } from 'antd';
import { Tiles } from './components/Tiles';
import { Header } from './components/Header';
import { TictacProvider } from './context/useTicTac';
import { useTicTac } from './context/useTicTac';

function App() {
  

  return (
    <Flex vertical gap={20} className='app'>
      <TictacProvider>
        <Header />
        <Flex className='box'>
          <Flex vertical>
              {[1,2,3].map((i) => {
                  return(
                      <Flex>
                          {[1,2,3].map((j) => {
                              return(
                                <Tiles row={i} column={j} />
                              )
                          })}
                      </Flex>
                  )
              })}
          </Flex>    
        </Flex>
      </TictacProvider>
      
      
    </Flex>    
  )
}

export default App
