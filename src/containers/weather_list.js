import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);


        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        
        const firstTemp = cityData.list[0].main.temp;
        const firstHum = cityData.list[0].main.humidity;

        // latudue and logitute
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        // const { lon, lat } = cityData.city.coord.;

        console.log(lon);
        console.log(lat);

    


        console.log(temps);
        console.log(firstTemp);
        console.log('hum', firstHum);

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color={"blue"} units="K" CurrentTemp={firstTemp}/></td>
                <td><Chart data={pressure} color={"red"} units="hPa"/></td>
                <td><Chart data={humidity} color={"green"} units="%" CurrentHumidity={firstHum}/></td>
                
            </tr>
        );
    
    
    }




    render() {

        console.log(this.props.weather);

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>        
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}

                </tbody>



            
            </table>
        );
    }


}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);