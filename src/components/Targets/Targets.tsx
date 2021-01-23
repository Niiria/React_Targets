import React, { useContext, useEffect } from 'react';
import { TargetsContext } from '../../contex/TargetsState';
import Target from './Target';
import { Itarget } from '../../contex/Interfaces';

const Targets = () => {
  const { targets, fetchDataAction } = useContext(TargetsContext);

  useEffect(() => {
    targets.length=== 0 && fetchDataAction();
  });

  const TARGETS = targets && targets.map((e:Itarget)=>{
    return (
      <li key={e.id} className="w-full h-full lg:w-2/5 flex flex-wrap justify-center  p-2">
        <Target {...e} />
      </li>
    );
  });

  return (
    <section className="targets_background flex-grow">
      <ul className="flex flex-wrap justify-evenly">
        {TARGETS}
      </ul>
    </section>
  );
};

export default  Targets;

