import React from 'react';
import './CuteAnimation.scss';

function CuteAnimation(props) {
  return (
    <>
    <div className="she-said-yes">
    {props.count === 0 || props.count === 1 || props.count === 2 ?
        (<><div className="yes-really">
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                </div><h1>Yesssssss!!!  Come Here;))</h1></>
        ):(
            <><div className="yes-really">
                <img src="https://media1.tenor.com/m/A110TqjeIJsAAAAC/love-poke.gif" />
            </div>
            <h1>WOOOOO!! Finally {props.count} times tarvata...Come Here</h1>
            <div className="yes-after-many-times">
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            </div></>
        )}</div>
    
    
    </>
  );
}

export default CuteAnimation;
