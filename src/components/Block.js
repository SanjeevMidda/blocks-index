import React, { useState } from 'react'

function Block() {

  const [motion, setMotion] = useState(true);

  function moveBlock(){
    setMotion(!motion);
  }

  function randomIndex(){
    return Math.floor(Math.random() * 100);
  }

  function randomSize(){
    return Math.floor(Math.random() * 300);
  }

  function randomColor(){
    return Math.floor(Math.random() * 255)
  }

  function randomPosition(){
    return Math.floor(Math.random() * 1200)
  }

  function randomColorTwo(){
    return `${randomColor()},${randomColor()},${randomColor()}`
  }

  function randomBorder(){
    return Math.floor(Math.random() * 150)
  }

    let styles = {
        width: `${randomSize()}px`,
        height: `${randomSize()}px`,
        zIndex: randomIndex(),
        // backgroundColor: `rgb(${randomColor()},${randomColor()},${randomColor()})`,
        left: `${randomPosition()}px`,
        top: `${randomPosition()}px`,
        background: `linear-gradient(rgb(${randomColorTwo()}),rgb(${randomColorTwo()}))`,
        borderRadius: `${randomBorder()}px`
    }

    console.log(styles);

  return (
    <div className={motion? "block" : "moveBlock"} style={styles} onClick={moveBlock}></div>
  )
}

export default Block

// create a random z-index - DONE
// create a random width and height - DONE
// create a random background color - DONE
// create a random position onscreen - DONE
// movement animation - DONE

// background:linear-gradient(green, red)
