import { useContext } from "react";
import Cousin03 from "../Cousin03/Cousin03";
import Cousin04 from "../Cousin04/Cousin04";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext)

    return (
        <div>
            <div className="border-2 p-4 rounded-lg border-gray-700">
                <h1 className="text-4xl font-bold p-4">Aunty</h1>
                <div className="flex gap-2">
                    <Cousin03></Cousin03>
                    <Cousin04></Cousin04>
                </div>
                <p className="font-bold py-5" >Money : {money} TK</p>
            </div>
        </div>
    );
};

export default Aunty;