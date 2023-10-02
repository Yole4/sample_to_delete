import React, { useState } from 'react'
import '../assets/ccs/petter.css';

function Petter() {
    const [answer, setAnswer] = useState('');
    const [petter, setPetter] = useState('');
    const [question, setQuestion] = useState('');

    // const map = answer.map((index, item) => {
    //     if (answer[0] === "p."){
    //         setAnswer()
    //     }
    // });

    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setUserInput(inputText);

        if (inputText.startsWith('p.')) {
            // Modify the input character by character
            const modifiedInput = 'Peloy Please Answer!';
            if (currentCharIndex < modifiedInput.length) {
                setOutput(modifiedInput.slice(0, currentCharIndex + 1));
                setCurrentCharIndex(currentCharIndex + 1);
            } else {
                setOutput(modifiedInput);
            }
        } else {
            setOutput(inputText);
            setCurrentCharIndex(0); // Reset the character index
        }
    };
    const buttonSubmit = async (e) => {

    }

    return (
        <div className='container'>
            <div className='header'>
                <h1>Petter Please Answer My Question</h1>
            </div>
            <div className='questions'>
                <form onSubmit={buttonSubmit}>
                    <div>
                        <h1>React Input Processor</h1>
                        <input
                            type="text"
                            placeholder="Type something..."
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <p>Output:</p>
                        <div>{output}</div>
                    </div>
                    <div>
                        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Your Question' />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
                <div>
                    <h3>Answer:</h3>
                    <span>{answer}</span>
                </div>
            </div>
        </div>
    )
}

export default Petter
