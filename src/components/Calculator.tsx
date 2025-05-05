import Display from "./Display";
import Button from "./Button";
import History from "./History";
//import Theme from "./Theme";
import '../index.css';
import { useState, useEffect } from "react";

const Calculator= function(){

    const [input, setInput]=useState<string>('');
    const [result, setResult]=useState<string>('');
    const [history, setHistory] = useState<string[]>([]);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const buttonClick = function(text: string) {
        if (text === 'C') {
            setInput('');
            setResult('');
        } else if (text === 'Del') {
            setInput(input.slice(0, -1));
        } else if (text === '=') {
            try {
                if (input.includes('/0')) {
                    throw new Error('Делить на ноль нельзя');
                }
                const evalResult = eval(input);
                setResult(evalResult.toString());
                setHistory([...history, `${input} = ${evalResult}`]); 
                setInput(''); 
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setResult('Ошибка: ' + error.message);
                }
            }
        } else {
            setInput(input + text);
        }
    };

    const keyDown = (event: KeyboardEvent) => {
        const { key } = event;
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', '+', '.', 'Enter', 'Backspace'];

        if (validKeys.includes(key)) {
            if (key === 'Enter') {
                buttonClick('=');
            } else if (key === 'Backspace') {
                buttonClick('Del');
            } else {
                buttonClick(key);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', keyDown);
        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    });
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    return (
        <div className={`flex flex-row w-[1200px] justify-center items-center`}>
            <div className={`flex flex-col items-center justify-center min-h-screen mr-[50px]`}>
                <Display input={input} result={result} />
                <div className={`w-[250px] flex flex-wrap`}>
                    <Button
                        text="7"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="8"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="9"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="/"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="4"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="5"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="6"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="*"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="1"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="2"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="3"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="-"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="."
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="0"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="="
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="+"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="C"
                        callback={buttonClick}
                    ></Button>
                    <Button
                        text="Del"
                        callback={buttonClick}
                    ></Button>
                  
                    <Button 
                        text="Theme"
                        callback={changeTheme}>
                    </Button>
                </div>
                
            </div>
            <History hist={history} />
        </div>
        
    );
}
export default Calculator;