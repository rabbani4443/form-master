import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import Cousin02 from "../Cousin02/Cousin02";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <div className="border-2 p-4  rounded-lg border-gray-700">
                <h1 className="text-4xl p-4 font-bold">Uncle</h1>
                <div className="flex gap-2 ">
                    <Cousin></Cousin>
                    <Cousin02></Cousin02>
                </div>
                <div className="py-6">
                    <button onClick={()=> setMoney (money + 1000)} className="btn " >Money 1000 </button>
                </div>
            </div>
        </div>
    );
};

export default Uncle;