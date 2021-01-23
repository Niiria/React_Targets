import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';

interface IMatchParams {
  id: string;
}

const Construction:React.FC<RouteComponentProps<IMatchParams>>  = ({ match }) => {
  document.title=match.params.id;
  return (
    <section className="flex h-full justify-center items-center bg-gray-700">
      <h1 className="text-red-700 font-bold text-6xl stroke-black font-sofia text-shadow">{match.params.id.charAt(0).toUpperCase() + match.params.id.slice(1)} Site under construction</h1>
    </section>
  );
};

export default withRouter(Construction);