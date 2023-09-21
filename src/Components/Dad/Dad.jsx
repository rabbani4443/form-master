import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <div className="border-2 rounded-lg border-gray-700 p-4 ">
                <h1 className="text-4xl font-bold p-4">Dad</h1>
                <div className="flex gap-2">
                    <Myself asset={asset} ></Myself>
                    <Brother></Brother>
                    <Sister></Sister>
                </div>

            </div>
        </div>
    );
};

export default Dad;