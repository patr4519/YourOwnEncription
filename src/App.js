import './App.css';
import React from 'react';
import { Nav } from './elements/Nav';
import { Header } from './elements/Header';
import { fromCipher } from './functions/fromCipher';
import { toCipher } from './functions/toCipher';

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
  const [a, setA] = React.useState('?');
  const [b, setB] = React.useState('?');
  const [c, setC] = React.useState('?');
  const [d, setD] = React.useState('?');
  const [e, setE] = React.useState('?');
  const [f, setF] = React.useState('?');
  const [g, setG] = React.useState('?');
  const [h, setH] = React.useState('?');
  const [i, setI] = React.useState('?');
  const [j, setJ] = React.useState('?');
  const [k, setK] = React.useState('?');
  const [l, setL] = React.useState('?');
  const [m, setM] = React.useState('?');
  const [n, setN] = React.useState('?');
  const [o, setO] = React.useState('?');
  const [p, setP] = React.useState('?');
  const [q, setQ] = React.useState('?');
  const [r, setR] = React.useState('?');
  const [s, setS] = React.useState('?');
  const [t, setT] = React.useState('?');
  const [u, setU] = React.useState('?');
  const [v, setV] = React.useState('?');
  const [w, setW] = React.useState('?');
  const [x, setX] = React.useState('?');
  const [y, setY] = React.useState('?');
  const [z, setZ] = React.useState('?');
  const [cipher, setCipher] = React.useState(null)

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
      y: y, z: z
    });
    alert('Cipher is generated')
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
          </tr>
        </tbody>
      </table>
      <button type='button' className='generateButton' onClick={generate}>Generate cipher</button>
    </div>
  );
}

export default App;
