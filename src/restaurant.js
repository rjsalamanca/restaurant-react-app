import React from 'react';

import PropTypes from 'prop-types';

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

const RestaurantList = () => {
    return (
        Object.keys(restaurants).map((cuisine)=>
            <ul>
                <li><h3>Cuisine: {cuisine}</h3></li>
                {Object.keys(restaurants[cuisine]).map(resto => 
                    <ul>
                        <li><b>Restaurant:</b> {resto}</li>
                        {restaurants[cuisine][resto].map((dish) =>
                            <ul>
                                <li>{dish}</li>
                            </ul>
                        )}
                    </ul>
                )}  
            </ul>
        )
    )
}

export default RestaurantList;

// RestaurantList.PropTypes = {
//     restaurantData: PropTypes.array
// }