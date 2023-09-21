import { createContext, useState} from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";



export const AssetContext = createContext('Golden Rink default');

export const MoneyContext =createContext(1000);

const Grandpa = () => {
    const asset = 'Diamond Rink';
    const [money, setMoney] = useState(1000);

    return (
        <div>
            <div className="border-2 w-full text-center p-4 rounded-lg border-gray-700">
                <h1 className="text-4xl font-bold">Grandpa</h1>
                <p className="font-bold py-5" > Money : {money} TK</p>
                <div className="flex gap-5 pt-6 justify-between">

                <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Golden Rink">      
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
                </AssetContext.Provider>
                </MoneyContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Grandpa;