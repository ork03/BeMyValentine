import React from 'react';
import './CuteAnimation.scss';

function CuteAnimation(props) {
  return (
    <>
    <div className="she-said-yes">
    {props.count === 0 || props.count === 1 || props.count === 2 ?
        (<><div className="yes-really">
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt='bear-kiss'/>
                </div><h1>Yesssssss!!!  Come Here;))</h1></>
        ):(
            <><div className="yes-really">
                <img src="https://media1.tenor.com/m/A110TqjeIJsAAAAC/love-poke.gif" alt='love-poke'/>
            </div>
            <h1>WOOOOO!! Finally {props.count} times tarvata...Come Here</h1>
            <div className="yes-after-many-times">
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt='bear-kiss'/>
            </div></>
        )}</div>
    
    
    </>
  );
}

export default CuteAnimation;
