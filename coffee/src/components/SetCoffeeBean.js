import { useEffect, useState } from "react";
import { useCoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans}) => {

  const {coffeeBean, setCoffeeBeanId} = useCoffeeContext();
    // console.log(setCoffeeBeanId)

  const handleClick = (e)=> {
    console.log('inside event listener')
    console.log(e.target.value)
    e.preventDefault();
    setCoffeeBeanId(e.target.value)
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={handleClick}>
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;