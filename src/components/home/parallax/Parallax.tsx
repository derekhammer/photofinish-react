import * as React from 'react';
import './Parallax.css';
import BG1 from '../../../assets/images/level_art/1.png';
import BG2 from '../../../assets/images/level_art/2.png';
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
  let ships: any[] = ShipAssetChoice(11);
  let ship1: any = ships[0];
  let ship2: any = ships[1];
  let ship3: any = ships[2];
  return(
    <div className="parallax-component">
      <div className="parallax-background">
        <span className="ships-scrolling">
          <img className="ship" src={ship1}/>
        </span>
        <span className="ships-scrolling">
          <img className="ship" src={ship2}/>
        </span>
        <span className="ships-scrolling">
          <img className="ship" src={ship3}/>
        </span>
      </div>
    </div>
  );
}
export default Parallax;

function ShipAssetChoice(limit:number){
  const assetMax: number = limit;
  const assetList: any[] = [Gif1, Gif2, Gif3, Gif4, Gif5, Gif6, Gif7, Gif8, Gif9, Gif10, Gif11, Gif12];
  let assetArray: any[] = [];
  while(assetArray.length < 3){
    let newNumber: number = Math.round(Math.random()*assetMax);
    let invalidCounter = 0;
    for(let x = 0; x < assetArray.length; x++){
      if(assetArray[x].toString() === assetList[newNumber].toString()){
        invalidCounter++;
      }
    }
    if(assetArray.length != 0 && invalidCounter === 0){
      assetArray.push(assetList[newNumber]);
    } else if (assetArray.length === 0){
      assetArray.push(assetList[newNumber]);
    }
  }
  return assetArray;
}

function AssetChoice(limit:number){
  const assetMax: number = limit;
  const assetList: any[] = [Gif1, Gif2, Gif3, Gif4, Gif5, Gif6, Gif7, Gif8, Gif9, Gif10, Gif11, Gif12];
  let assetArray: any[] = [];
  // while(assetArray.length < 3){
  //   let newNumber: number = Math.round(Math.random()*assetMax);
  //   for(let x = 0; x < assetArray.length; x++)
  //   {
  //     if(assetArray[x] != assetList[newNumber])
  //     {
  //       console.log("Asset array at possition: " + x + " = " + assetArray[x]);
  //       console.log("Asset list at possition: " + newNumber + " = " + assetList[newNumber]);
  //       assetArray.push(assetList[newNumber]);
  //     }
  //   }
  //   if(assetArray.length === 0)
  //   {
  //     assetArray.push(assetList[newNumber]);
  //   }
  // }
  return assetArray;
}


// This section needs to be redone. Currently it will not load any changes for img's, saying it is an invalid format.
// React.createElement('div', { className: 'parallax-component' },
//   React.createElement('div', { className: 'parallax-background'},
//   [
//     React.createElement('marquee',{ behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
//       <img className="ship" src={Gif5} />),
//     React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
//       <img className="ship" src={Gif12} />),
//     React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
//       <img className="ship" src={Gif1} />)
//   ]
// )
// )

// function SpeedLimit(){
//   const
// }
