import React from 'react'

const Button = ({button="Button",action, customClass="text-white bg-black "}) => {
  return (
    <div
      className={
        customClass +
        " w-56 cursor-pointer rounded-full py-3 text-center text-sm font-semibold hover:bg-opacity-90"
      }
    >
      <button className="z-50">{button}</button>
    </div>
  );
}

export default Button;