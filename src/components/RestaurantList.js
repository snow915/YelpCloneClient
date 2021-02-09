import React, {useEffect, useContext} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import {RestaurantsContext} from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";


const RestaurantList = props => {

    const {getRestaurants, setRestaurants} = useContext(RestaurantsContext);
    let history = useHistory();

    const deleteRow = async(id) => {
        try{
            const response = await RestaurantFinder.delete("/"+id);
            setRestaurants( getRestaurants.filter(restaurant => {
                return restaurant.id !== id;
            }) );
        } catch (e) {
            console.log(e);
        }

    }

    const updateRow = (id) => {
        history.push(`/restaurants/${id}/update`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch (e) {
                console.log(e);
            }

        }
        fetchData();
    }, []);

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead key={1}>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                    {getRestaurants && getRestaurants.map((restaurant) => {
                        return(
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>Rating</td>
                                <td>
                                    <button onClick={() => updateRow(restaurant.id)} className="btn btn-warning">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => deleteRow(restaurant.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default RestaurantList;