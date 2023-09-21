import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <div className="border-2 rounded-lg border-gray-700">
                <h1 className="text-2xl font-bold p-4">Myself</h1>
            <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default Myself;