import { useState } from 'react';

type probs={
    src:string;
    className:string;
    alt?:string
}

const SafeImg = ({ src, className, alt = "" }:probs) => {
  const [isBroken, setIsBroken] = useState(false);

  if (isBroken) return null; // Or return a placeholder <div></div>

  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onError={() => setIsBroken(true)}
    />
  );
};

export default SafeImg;