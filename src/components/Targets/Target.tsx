import React, { useState } from 'react';
import { Itarget } from '../../contex/Interfaces';

const Target = (target: Itarget) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(true);
  document.title = 'target';

  const handleModal = () => {
    switch (animation) {
      case true: {
        setTimeout((e) => {
          setAnimation(false);
        }, 200);
        setModal(true);
        setTimeout((e) => {}, 200);

        break;
      }
      case false:
        setAnimation(true);
        setTimeout((e) => {
          setModal(false);
        }, 500);
        break;
    }
  };
  return (
    <>
      <div className="overflow-hidden ">
        <img
          src={target.image}
          alt={target.name}
          className="cursor-pointer  transition duration-500 ease-in transform hover:scale-125"
          onClick={handleModal}
        />
        {modal && (
          <div
            className={`bg-black bg-opacity-75 h-full w-full absolute top-0 left-0 lg:py-8 cursor-pointer z-10 lg:flex lg:items-center transition duration-500 ease-in  ${
              animation ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleModal}
          >
            <img
              src={target.image}
              alt={target.name}
              className="lg:w-4/5 z-20 relative cursor-default mx-auto "
            />
          </div>
        )}
        <div className="relative target_description_background font-sofia  p-2">
          <h2 className="font-bold text-3xl">{target.name}</h2>
          <p className="text-2xl">Price: {target.price} </p>
        </div>
      </div>
    </>
  );
};

export default Target;
