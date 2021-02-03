import React from 'react';
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

const HomePage = () => {
    return (
        <div className="container-fluid">
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    );
};

export default HomePage;