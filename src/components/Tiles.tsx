import React, {useState } from 'react'
import { Flex, Button, Typography } from 'antd'
import './style.css'
import { useTicTac } from '../context/useTicTac';

export const Tiles:React.FC<{row:number, column:number}> = ({row, column}) => {
    const {currentPlayer, setCurrentPlayer, setCount, count, reset, setReset, ticTacValues} = useTicTac();
    const [playSign, setPlaySign] = useState(' ');

    const handlePlaySigns = () => {
        ticTacValues.map((item) => item.row === row && item.column === column ? item.value = playSign : item.value);
        setPlaySign(currentPlayer)
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');  
        setCount(count => count + 1);
    }

    return (
        <Button className='individual-tile' onClick={() => handlePlaySigns()} disabled={count >= 9}>
            <Typography.Title>{reset? ' ' : playSign}</Typography.Title>
        </Button>
    )
}