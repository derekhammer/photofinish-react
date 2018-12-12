import * as React from 'react';
import './Parallax.css';
import BG1 from '../../../assets/images/level_art/1.png';
import BG2 from '../../../assets/images/level_art/2.png';
import BG3 from '../../../assets/images/level_art/3.png';
import BG4 from '../../../assets/images/level_art/4.png';
import BG5 from '../../../assets/images/level_art/5.png';
import BG6 from '../../../assets/images/level_art/6.png';
import BG7 from '../../../assets/images/level_art/7.png';
import BG8 from '../../../assets/images/level_art/8.png';
import BG9 from '../../../assets/images/level_art/9.png';
import BG10 from '../../../assets/images/level_art/10.png';
import BG11 from '../../../assets/images/level_art/11.png';
import BG12 from '../../../assets/images/level_art/12.png';
import BG13 from '../../../assets/images/level_art/13.png';
import BG14 from '../../../assets/images/level_art/14.png';
import BG15 from '../../../assets/images/level_art/15.png';
import BG16 from '../../../assets/images/level_art/16.png';
import BG17 from '../../../assets/images/level_art/17.png';
import BG18 from '../../../assets/images/level_art/18.png';
import BG19 from '../../../assets/images/level_art/19.png';
import BG20 from '../../../assets/images/level_art/20.png';
import BG21 from '../../../assets/images/level_art/21.png';
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
