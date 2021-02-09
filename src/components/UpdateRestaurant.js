import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";


const UpdateRestaurant = (props) => {

    const {id} = useParams();
    let history = useHistory();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");


    useEffect(async() => {
        try{
            const response = await RestaurantFinder.get(`/${id}`);
            setName(response.data.data.restaurants[0].name);
            setLocation(response.data.data.restaurants[0].location);
            setPriceRange(response.data.data.restaurants[0].price_range);

        } catch (e) {
            console.log(e);
        }

    },[]);

    const updateData = async(e) => {
        e.preventDefault();
        try{
            const response = await RestaurantFinder.put(`/${id}`, {
                name: name,
                location: location,
                price_range: priceRange
            });
            if(response.status === 200){
                history.push("/");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} id="location" className="form-control" type="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price range</label>
                    <input value={priceRange} onChange={e => setPriceRange(e.target.value)} id="price_range" className="form-control" type="number"/>
                </div>

                <button onClick={updateData} type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateRestaurant;