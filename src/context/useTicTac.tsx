import React, { ReactNode, useState, useContext, useMemo } from "react";

export interface ITicTacContext {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
    reset: boolean;
    setReset: React.Dispatch<React.SetStateAction<boolean>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    ticTacValues: {row:number, column:number, value:string}[];
}

const TicTacContext = React.createContext<ITicTacContext | undefined>(undefined);

export const TictacProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [reset, setReset] = useState(true);
    const [count, setCount] = useState(0);

    const ticTacValues: {row:number, column:number, value:string}[] = useMemo(() => {
        let i = 1;
        let temp:any = [];

        while(i <4){
            for(let j=1; j<4; j++){
                temp.push({row:i, column:j, value: ''});
            }
            i++;
        }
        return temp;
    },[])

    return (
        <TicTacContext.Provider value={{ currentPlayer, setCurrentPlayer, reset, setReset, count, setCount, ticTacValues }}>
            {children}
        </TicTacContext.Provider>
    );
};

export const useTicTac = () => {
    const context = useContext(TicTacContext);
    if (!context) {
        throw new Error("Tictac context must be used within a TictacProvider");
    }
    return context;
};
