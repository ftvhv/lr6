interface IHis{
    hist: string[],
}
const History: React.FC<IHis>=function({hist}){
    return(
        <div>
            <h3>История вычислений:</h3>
            <div>
                {hist.map((item, index)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default History;