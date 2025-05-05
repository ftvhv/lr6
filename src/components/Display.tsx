interface IDisplay{
    input: string,
    result: string
}
const Display: React.FC<IDisplay>=function({input, result}){
    return(
        <div className={`border-1 w-[223px] h-[50px] text-right ml-[-17px] pr-3`}>
            <div>{input} |</div>
            <div>{result}</div>
        </div>
    )
}
export default Display;