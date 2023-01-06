import './App.css';
import React from 'react';
import { Nav } from './elements/Nav';
import { Header } from './elements/Header';
import { fromCipher } from './functions/fromCipher';
import { toCipher } from './functions/toCipher';
import closeIMG from './img/close.png';
import copyIMG from './img/copyButton.png';
import { randomCipher } from './functions/randomCipher';

document.addEventListener('click', (event) => {
  const elem = event.target;
  if (elem.classList.contains('copyNormalText')) {
    navigator.clipboard.writeText(document.querySelector('.inputs').firstChild.textContent);
  }
})

document.addEventListener('click', (event) => {
  const elem = event.target;
  if (elem.classList.contains('copyEncriptedText')) {
    navigator.clipboard.writeText(elem.nextElementSibling.textContent);
  }
});

function App() {

  return (
    <div className='wrapper'>
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [c, setC] = React.useState('');
  const [d, setD] = React.useState('');
  const [e, setE] = React.useState('');
  const [f, setF] = React.useState('');
  const [g, setG] = React.useState('');
  const [h, setH] = React.useState('');
  const [i, setI] = React.useState('');
  const [j, setJ] = React.useState('');
  const [k, setK] = React.useState('');
  const [l, setL] = React.useState('');
  const [m, setM] = React.useState('');
  const [n, setN] = React.useState('');
  const [o, setO] = React.useState('');
  const [p, setP] = React.useState('');
  const [q, setQ] = React.useState('');
  const [r, setR] = React.useState('');
  const [s, setS] = React.useState('');
  const [t, setT] = React.useState('');
  const [u, setU] = React.useState('');
  const [v, setV] = React.useState('');
  const [w, setW] = React.useState('');
  const [x, setX] = React.useState('');
  const [y, setY] = React.useState('');
  const [z, setZ] = React.useState('');
  const [space, setSpace] = React.useState(' ');
  const [dot, setDot] = React.useState('');
  const [comma, setComma] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [excMark, setExcMark] = React.useState('');

  const [cipher, setCipher] = React.useState(null);
  const [normalText, setNormalText] = React.useState('');
  const [encriptedText, setEncriptedText] = React.useState('');
  const [mainBlock, setMainBlock] = React.useState(false);
  const [uniqKey, setUniqKey] = React.useState(null);

  React.useEffect(() => {
    if (cipher !== null) {
      let str = '';
      for (let x of Object.values(cipher)) {
        str += x;
      }
      setUniqKey(str);
    }
  }, [cipher])

  const generate = () => {
    setCipher({
      a: a, b: b, c: c,
      d: d, e: e, f: f,
      g: g, h: h, i: i,
      j: j, k: k, l: l,
      m: m, n: n, o: o,
      p: p, q: q, r: r,
      s: s, t: t, u: u,
      v: v, w: w, x: x,
      y: y, z: z, [' ']: space,
      ['.']: dot, [',']: comma,
      ['?']: question, ['!']: excMark
    });
    setMainBlock(true);
  }

  const putCaesarCipher = () => {
    setCipher(() => {
      setA('x');
      setB('y');
      setC('z');
      setD('a');
      setE('b');
      setF('c');
      setG('d');
      setH('e');
      setI('f');
      setJ('g');
      setK('h');
      setL('i');
      setM('j');
      setN('k');
      setO('l');
      setP('m');
      setQ('n');
      setR('o');
      setS('p');
      setT('q');
      setU('r');
      setV('s');
      setW('t');
      setX('u');
      setY('v');
      setZ('w');
    });
  }

  const putRandomCipher = () => {
    let randCipher = randomCipher();
    for (let i = 0; i < randCipher.length; i++) {
      setA(randCipher[0]);
      setB(randCipher[1]);
      setC(randCipher[2]);
      setD(randCipher[3]);
      setE(randCipher[4]);
      setF(randCipher[5]);
      setG(randCipher[6]);
      setH(randCipher[7]);
      setI(randCipher[8]);
      setJ(randCipher[9]);
      setK(randCipher[10]);
      setL(randCipher[11]);
      setM(randCipher[12]);
      setN(randCipher[13]);
      setO(randCipher[14]);
      setP(randCipher[15]);
      setQ(randCipher[16]);
      setR(randCipher[17]);
      setS(randCipher[18]);
      setT(randCipher[19]);
      setU(randCipher[20]);
      setV(randCipher[21]);
      setW(randCipher[22]);
      setX(randCipher[23]);
      setY(randCipher[24]);
      setZ(randCipher[25]);
      setSpace(randCipher[26]);
      setDot(randCipher[27]);
      setComma(randCipher[28]);
      setQuestion(randCipher[29]);
      setExcMark(randCipher[30]);
    }
  }

  const translateTo = () => {
    setEncriptedText(toCipher(cipher, normalText))
  }

  const translateFrom = () => {
    setNormalText(fromCipher(cipher, encriptedText))
  }

  const clearInputs = () => {
    setNormalText('');
    setEncriptedText('');
  }

  const clearCipher = () => {
    setCipher(null);
    setMainBlock(false);
    setUniqKey(null);

    setA('');
    setB('');
    setC('');
    setD('');
    setE('');
    setF('');
    setG('');
    setH('');
    setI('');
    setJ('');
    setK('');
    setL('');
    setM('');
    setN('');
    setO('');
    setP('');
    setQ('');
    setR('');
    setS('');
    setT('');
    setU('');
    setV('');
    setW('');
    setX('');
    setY('');
    setZ('');
    setSpace(' ');
    setDot('');
    setComma('');
    setQuestion('');
    setExcMark('');
  }

  return (
    <div className='main'>
      <table className='mainTable'>
        <tbody>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
            <th>H</th>
            <th>I</th>
            <th>G</th>
            <th>K</th>
            <th>L</th>
            <th>M</th>
            <th>N</th>
            <th>O</th>
            <th>P</th>
            <th>Q</th>
            <th>R</th>
            <th>S</th>
            <th>T</th>
            <th>U</th>
            <th>V</th>
            <th>W</th>
            <th>X</th>
            <th>Y</th>
            <th>Z</th>
            <th> </th>
            <th>.</th>
            <th>,</th>
            <th>?</th>
            <th>!</th>
          </tr>
          <tr>
            <td><input maxLength="1" type='text' value={a} className='inputChar' onChange={(event) => setA(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={b} className='inputChar' onChange={(event) => setB(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={c} className='inputChar' onChange={(event) => setC(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={d} className='inputChar' onChange={(event) => setD(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={e} className='inputChar' onChange={(event) => setE(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={f} className='inputChar' onChange={(event) => setF(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={g} className='inputChar' onChange={(event) => setG(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={h} className='inputChar' onChange={(event) => setH(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={i} className='inputChar' onChange={(event) => setI(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={j} className='inputChar' onChange={(event) => setJ(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={k} className='inputChar' onChange={(event) => setK(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={l} className='inputChar' onChange={(event) => setL(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={m} className='inputChar' onChange={(event) => setM(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={n} className='inputChar' onChange={(event) => setN(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={p} className='inputChar' onChange={(event) => setP(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={o} className='inputChar' onChange={(event) => setO(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={q} className='inputChar' onChange={(event) => setQ(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={r} className='inputChar' onChange={(event) => setR(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={s} className='inputChar' onChange={(event) => setS(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={t} className='inputChar' onChange={(event) => setT(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={u} className='inputChar' onChange={(event) => setU(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={v} className='inputChar' onChange={(event) => setV(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={w} className='inputChar' onChange={(event) => setW(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={x} className='inputChar' onChange={(event) => setX(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={y} className='inputChar' onChange={(event) => setY(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={z} className='inputChar' onChange={(event) => setZ(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={space} className='inputChar' onChange={(event) => setSpace(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={dot} className='inputChar' onChange={(event) => setDot(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={comma} className='inputChar' onChange={(event) => setComma(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={question} className='inputChar' onChange={(event) => setQuestion(event.target.value)} /></td>
            <td><input maxLength="1" type='text' value={excMark} className='inputChar' onChange={(event) => setExcMark(event.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <img src={closeIMG} alt='close' className='clearCipher rot' onClick={clearCipher}></img>
      <button type='button' className='button button1 generateButton' onClick={generate}>Generate cipher</button>
      <button type='button' className='button button1 caesarCipher' onClick={putCaesarCipher}>Put Caesar cipher</button>
      <button type='button' className='button button1 randomCipher' onClick={putRandomCipher}>Put random cipher</button>
      <div className='inputs'>
        <textarea value={normalText} className='yourText' onChange={(e) => setNormalText(e.target.value)}></textarea>
        <div className={`mainBlock ${mainBlock ? 'show' : 'hidden'}`}>
          <button type='button' className='button button1 translateButton1' onClick={translateTo}>Encrypt</button>
          <button type='button' className='button button1 translateButton2' onClick={translateFrom}>Decrypt</button>
          <button type='button' className='button button2 clearInputs' onClick={clearInputs}>Clear</button>
        </div>
        <img src={closeIMG} alt='close' className='closeNormalText rot' onClick={() => setNormalText('')}></img>
        <img src={closeIMG} alt='close' className='closeEncriptedText rot' onClick={() => setEncriptedText('')}></img>
        <img src={copyIMG} alt='copy' className='copyNormalText'></img>
        <img src={copyIMG} alt='copy' className='copyEncriptedText'></img>
        <textarea spellCheck='false' value={encriptedText} className='encriptedText' onChange={(e) => setEncriptedText(e.target.value)}></textarea>
        <p className='pNormal'>Normal text</p>
        <p className='pEncripted'>Encrypted text</p>
      </div>
      {uniqKey && <div className='uniqKey'>Your uniq key: {uniqKey}</div>}
    </div>
  );
}

export default App;
