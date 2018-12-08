import * as React from 'react';
import './Parallax.css';
import Gif1 from '../../../assets/images/ships/1.gif';
import Gif2 from '../../../assets/images/ships/2.gif';
import Gif3 from '../../../assets/images/ships/3.gif';
import Gif4 from '../../../assets/images/ships/4.gif';
import Gif5 from '../../../assets/images/ships/5.gif';
import Gif6 from '../../../assets/images/ships/6.gif';
import Gif7 from '../../../assets/images/ships/7.gif';
import Gif8 from '../../../assets/images/ships/8.gif';
import Gif9 from '../../../assets/images/ships/9.gif';
import Gif10 from '../../../assets/images/ships/10.gif';
import Gif11 from '../../../assets/images/ships/11.gif';
import Gif12 from '../../../assets/images/ships/12.gif';

function Parallax(){
  let background: number[] = AssetChoice(21);
  let ships: number[] = AssetChoice(12);
  let ship1: string = "Gif"+ships[0].toString();
  console.log(Gif1);
  return(
    React.createElement('div', { className: 'parallax-component' },
      React.createElement('div', { className: 'parallax-background'},
      [
        React.createElement('marquee',{ behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
          <img className="ship" src={Gif5} />),
        React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
          <img className="ship" src={Gif12} />),
        React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
          <img className="ship" src={Gif1} />)
      ]
    )
    )
  );
}
export default Parallax;

function AssetChoice(limit:number){
  const assetMax: number = limit; 
  let assetArray: number[] = [];
  while(assetArray.length < 4){
    let newNumber: number = Math.round(Math.random()*assetMax);
    if(newNumber < assetMax && newNumber != 0){
      assetArray.push(newNumber);
    }else{
      assetArray.push(1);
    }
  }
  return assetArray;
}

