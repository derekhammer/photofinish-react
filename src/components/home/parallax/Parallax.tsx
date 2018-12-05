import * as React from 'react';

function Parallax(){
  let background: number[] = AssetChoice(21);
  let ships: number[] = AssetChoice(12);
  
  return(
    <div className="Parallax">
      <div style="background-image:src('../../../../assets/images/level_art/{background}.png')">
        <div className="foreground">
          <marquee behavior="scroll" direction="right" scrollamount={ships[0]}>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount={ships[1]}>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount={ships[2]}>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount={ships[3]}>
          </marquee>
        </div>
      </div>
    </div>
  );
}

function AssetChoice(limit:number){
  const assetMax: number = limit; 
  let assetArray: number[];
  for(assetArray.length < 4){
    let newNumber: number = Math.round(Math.random()*assetMax);
    if(newNumber < AssetMax && NewNumber != 0){
      assetArray.push(newNumber);
    }else{
      assetArray.push(1);
    }
  }
  return assetArray;
}

