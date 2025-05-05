interface IBtn{
    text: string,
    callback (text: string): void;
}
const Button: React.FC<IBtn>=function({text, callback}){
    return(
        <button className={`w-[50px] h-[50px] border-1 m-1 bg-[#ddd] text-black`} onClick={()=>callback(text)}>{text}</button>
    )
}
export default Button;