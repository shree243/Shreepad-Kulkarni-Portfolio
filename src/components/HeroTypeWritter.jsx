import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({words, speed}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [curenttext, setCurenttext] = useState("");
  const currentWord = words[currentWordIndex];


  useEffect(() => {
    let charIndex=0;
    
    const typingInterval = setInterval(() => {
      if(charIndex <= currentWord.length)
      {
        setCurenttext(currentWord.slice(0, charIndex));
        charIndex++;
      }
      else{
      clearInterval(typingInterval);
      setTimeout(() => {
        setCurrentWordIndex((previousIndex) => previousIndex === words.length -1 ? 0 : previousIndex+1 );
      },1000);  
      }
    }, speed);

    return() => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words])
  
  return (
 
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r
    from-primary to-secondary mt-7"> {curenttext}</span>
  )
};

export default HeroTypeWritter;
