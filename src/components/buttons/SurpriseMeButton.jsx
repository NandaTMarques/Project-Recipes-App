import React from 'react';
import { useHistory } from 'react-router';

function SurpriseMeButton() {
  const history = useHistory();
  const drinkOrMeal = () => {
    if (history.location.pathname.includes('bebidas')) return '/bebidas/178319';
    return '/comidas/52771';
  };
  return (
    <button
      onClick={ () => history.push(drinkOrMeal()) }
      className="btnz btn btn-danger"
      data-testid="explore-surprise"
      type="button"
    >
      Me Surpreenda!
    </button>
  );
}

export default SurpriseMeButton;
