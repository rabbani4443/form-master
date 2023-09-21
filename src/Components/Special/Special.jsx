import { useContext, useState } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext (AssetContext)
    return (
        <div className="border-2 p-6 m-4 rounded-lg border-gray-700">
        <h1 className="text-2xl font-bold p-4">Special</h1>
        {/* <p>Gift : {asset}</p>      */}
        <p>Gift : {gift}</p>     

    </div>
    );
};

export default Special;