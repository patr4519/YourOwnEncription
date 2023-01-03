import React from 'react';

export const Header = () => {
    return (
        <header>
            <h1 className="headerTitle">Make own encription</h1>
            <h3 className="subTitle">Instruction:</h3>
            <p>This site let you make your own encryption:</p>
            <div className='instructions'>
                <p className='instruction line1'>1. Insert a unique character into each input field or <br /> press the 'Put random cipher' button to generate a unique cipher</p>
                <p className='instruction'>2. Press 'Generate cipher' button</p>
                <p className='instruction'>3. For encrypting text: </p>
                <p className='instruction'>Insert your text to 'Normal text' field</p> 
                <p className='instruction'>Press 'Encrypt' button</p> 
                <p className='instruction'>4. For decrypting text:</p> 
                <p className='instruction'>Insert your encryped text in 'Encrypted text' field</p> 
                <p className='instruction'>Press 'Decrypt' button</p>
            </div>
        </header>
    );
}