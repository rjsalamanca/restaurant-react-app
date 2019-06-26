import React, { Component } from 'react';
import PropTypes from 'prop-types';

// function PlaceList (props){
//     const { cuisineData } = props;

//     return(
//         <div>
//             {Object.keys(cuisineData).map(resto => 
//                 <button>
//                     <h3>{resto}</h3>
//                 </button>    
//             )}
//             <ul>
                
//             </ul>
//         </div>
//     );
// }

class PlaceList extends Component {
    state = {
        menu: []
    }

    handleClick = async (e,restaurant) => {
        e.preventDefault();

        await this.setState({
            menu: this.props.cuisineData[restaurant]
        });

    }

    render(){
        const restoList = this.props.cuisineData
        const menu = this.state.menu;

        return(
            <div>
                {Object.keys(restoList).map(resto => 
                    <button onClick = {(e) => this.handleClick(e, resto)} key={resto}>
                        <h3>{resto}</h3>
                    </button>    
                )}
                <ul>
                    {menu.map((food,ind)=>
                        <li key={food+ind}>{food}</li>
                    )}
                </ul>
            </div>
        ); 
    }
}


export default PlaceList;

PlaceList.propTypes = {
    cuisineData: PropTypes.object
}