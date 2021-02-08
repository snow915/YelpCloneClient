import React, {useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [getRestaurants, setRestaurants] = useState([]);
    const addRestaurants = restaurant => {
        setRestaurants([...getRestaurants, restaurant[0]]);
    };
    return (
        <RestaurantsContext.Provider value={{getRestaurants, setRestaurants, addRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};
