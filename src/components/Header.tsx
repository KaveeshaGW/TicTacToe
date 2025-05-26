import React, { useState } from 'react';
import { Button, Flex, Typography, Dropdown, Space } from 'antd'
const { Title } = Typography;
import type { DropdownProps, MenuProps } from 'antd';
import { useTicTac } from '../context/useTicTac';
import { DownOutlined } from '@ant-design/icons';

export const Header:React.FC = () => {
  const [open, setOpen] = useState(false);
  const {setCurrentPlayer, setReset, reset, setCount} = useTicTac();

  const items: MenuProps['items'] = [
    {
      label: 'X',
      key: 'X',
    },
    {
      label: 'O',
      key: 'O',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'X') {
      setCurrentPlayer('X');
      
    }else{
      setCurrentPlayer('O');
    }
    setOpen(false);
    setReset(false);
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const handleReset = () => {
    setReset(true);
    setCount(0);
  } 

  return(
      <Flex vertical align="space-between" className='title-section'>
      <Flex justify='right'>
        <Button className='reset-btn' onClick={() => handleReset()}>Reset</Button>
      </Flex>
      
      <Flex justify='center'>
        <Title level={2} >Tic-Tac-Toe</Title> 
      </Flex>

      <Flex justify='space-between' gap={10} >
        X will play first
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}
          disabled={!reset}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click to select X or O
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> 
      </Flex>

      <Flex justify='center'>
        <Title level={5}>{useTicTac().currentPlayer} is playing</Title>
      </Flex>
              
    </Flex>
  )
}