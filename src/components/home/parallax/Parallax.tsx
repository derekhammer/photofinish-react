import * as React from 'react';

function Parallax(){
  let background: number[] = AssetChoice(21);
  let ships: number[] = AssetChoice(12);
  
  return(
    React.createElement('div', { className: 'parallax-component' },
      React.createElement('div', { className: 'parallax-background'},
      [
        React.createElement('marquee',{ behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
          React.createElement('img', {},'')),
        React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},
          React.createElement('img', {}, '')),
        React.createElement('marquee', { behavior: 'scroll', direction: 'right', scrollamount: Math.round(Math.random()*15)},'')
      ]
    )
    );
  );
}
export default Parallax;

function AssetChoice(limit:number){
  const assetMax: number = limit; 
  let assetArray: number[] = [];
  for(assetArray.length < 4){
    let newNumber: number = Math.round(Math.random()*assetMax);
    if(newNumber < assetMax && newNumber != 0){
      assetArray.push(newNumber);
    }else{
      assetArray.push(1);
    }
  }
  return assetArray;
}

