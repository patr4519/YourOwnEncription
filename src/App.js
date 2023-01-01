import './App.css';
import React from 'react';
import { Nav } from './elements/Nav';
import { Header } from './elements/Header';
import { fromCipher } from './functions/fromCipher';
import { toCipher } from './functions/toCipher';
import closeIMG from './img/close.png'

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

  return (
    <div className='main'>
      <table>
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
            <td><input value={a} className='inputChar' onChange={(event) => setA(event.target.value)} /></td>
            <td><input value={b} className='inputChar' onChange={(event) => setB(event.target.value)} /></td>
            <td><input value={c} className='inputChar' onChange={(event) => setC(event.target.value)} /></td>
            <td><input value={d} className='inputChar' onChange={(event) => setD(event.target.value)} /></td>
            <td><input value={e} className='inputChar' onChange={(event) => setE(event.target.value)} /></td>
            <td><input value={f} className='inputChar' onChange={(event) => setF(event.target.value)} /></td>
            <td><input value={g} className='inputChar' onChange={(event) => setG(event.target.value)} /></td>
            <td><input value={h} className='inputChar' onChange={(event) => setH(event.target.value)} /></td>
            <td><input value={i} className='inputChar' onChange={(event) => setI(event.target.value)} /></td>
            <td><input value={j} className='inputChar' onChange={(event) => setJ(event.target.value)} /></td>
            <td><input value={k} className='inputChar' onChange={(event) => setK(event.target.value)} /></td>
            <td><input value={l} className='inputChar' onChange={(event) => setL(event.target.value)} /></td>
            <td><input value={m} className='inputChar' onChange={(event) => setM(event.target.value)} /></td>
            <td><input value={n} className='inputChar' onChange={(event) => setN(event.target.value)} /></td>
            <td><input value={o} className='inputChar' onChange={(event) => setO(event.target.value)} /></td>
            <td><input value={p} className='inputChar' onChange={(event) => setP(event.target.value)} /></td>
            <td><input value={q} className='inputChar' onChange={(event) => setQ(event.target.value)} /></td>
            <td><input value={r} className='inputChar' onChange={(event) => setR(event.target.value)} /></td>
            <td><input value={s} className='inputChar' onChange={(event) => setS(event.target.value)} /></td>
            <td><input value={t} className='inputChar' onChange={(event) => setT(event.target.value)} /></td>
            <td><input value={u} className='inputChar' onChange={(event) => setU(event.target.value)} /></td>
            <td><input value={v} className='inputChar' onChange={(event) => setV(event.target.value)} /></td>
            <td><input value={w} className='inputChar' onChange={(event) => setW(event.target.value)} /></td>
            <td><input value={x} className='inputChar' onChange={(event) => setX(event.target.value)} /></td>
            <td><input value={y} className='inputChar' onChange={(event) => setY(event.target.value)} /></td>
            <td><input value={z} className='inputChar' onChange={(event) => setZ(event.target.value)} /></td>
            <td><input value={space} className='inputChar' onChange={(event) => setSpace(event.target.value)} /></td>
            <td><input value={dot} className='inputChar' onChange={(event) => setDot(event.target.value)} /></td>
            <td><input value={comma} className='inputChar' onChange={(event) => setComma(event.target.value)} /></td>
            <td><input value={question} className='inputChar' onChange={(event) => setQuestion(event.target.value)} /></td>
            <td><input value={excMark} className='inputChar' onChange={(event) => setExcMark(event.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <button type='button' className='generateButton' onClick={generate}>Generate cipher</button>
      <button type='button' className='caesarCipher' onClick={putCaesarCipher}>Put Caesar cypher</button>
      <div className='inputs'>
        <textarea value={normalText} className='yourText' onChange={(e) => setNormalText(e.target.value)}></textarea>
        <button type='button' className='translateButton' onClick={translateTo}>Translate to</button>
        <button type='button' className='translateButton' onClick={translateFrom}>Translate from</button>
        <button type='button' className='clearInputs' onClick={clearInputs}>Clear</button>
        <img src={closeIMG} alt='close' className='closeNormalText' onClick={() => setNormalText('')}></img>
        <img src={closeIMG} alt='close' className='closeEncriptedText' onClick={() => setEncriptedText('')}></img>
        <textarea value={encriptedText} className='encriptedText' onChange={(e) => setEncriptedText(e.target.value)}></textarea>
        <p className='pNormal'>Normal text</p>
        <p className='pEncripted'>Encripted text</p>
      </div>
    </div>
  );
}

export default App;
