import React, { Component } from 'react';

import PlaceList from './restaurant-places';

const restaurants = {
    "mediterranean": {
        "Mediterranean Grill": [
            "hummus", "tabouli", "dolmas"
        ],
        "Yalla": [
            "hummus wrap", "tabouli wrap", "dolmas"
        ],
        "Nik's": [
            "spanakopita", "gyro", "dolmas"
        ]
    },
    "american": {
        "Chik fil a": [
            "chicken biscuit", "chicken sandwich", "chicken salad"
        ],
        "Mary Mac's Tea Room": [
            "biscuit", "fried chicken", "mashed potatoes"
        ],
        "Jersey Mike's": [
            "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
        ]
    },
    "mexican": {
        "Elmyriachi": [
            "tacos", "burritos", "cheese dip"
        ],
        "Mezcalito's Cantina": [
            "tortas", "tamales", "cheese dip"
        ],
        "Matador": [
            "cheese dip", "cheese dip", "cheese dip"
        ]
    }
}

class RestaurantList extends Component{
    state = {
        cuisineData: {}
    }

    handleClick = (e,cuisine) => {
        e.preventDefault();
        this.setState({
            cuisineData: restaurants[cuisine]
        });
    }

    render(){
        const { cuisineData } = this.state;

        return (
            <div>
                {Object.keys(restaurants).map((cuisine) =>
                    <button onClick = {(e) => this.handleClick(e, cuisine)} key={cuisine}>
                        <h3>Cuisine: {cuisine}</h3>
                    </button>
                )}
                <PlaceList cuisineData={cuisineData}/>
            </div>
        )
    }
}

export default RestaurantList;

// RestaurantList.PropTypes = {
//     cuisineData: PropTypes.object
// }

                    /* {Object.keys(restaurants[cuisine]).map(resto => 
                        <ul>
                            <li><b>Restaurant:</b> {resto}</li>
                            {restaurants[cuisine][resto].map((dish) =>
                                <ul>
                                    <li>{dish}</li>
                                </ul>
                            )}
                        </ul>
                    )}   */