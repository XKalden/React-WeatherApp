import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';




function average(data){
    return _.round(_.sum(data)/ data.length);
}


const Chart = (props) => {

    let currentHum = null;
    if(props.CurrentHumidity ){
        currentHum = <div>Current Humidity: {props.CurrentHumidity} {props.units}</div>
    }

    let currentTemp = null;
    if(props.CurrentTemp){
        currentTemp = <div>Current Temp: {props.CurrentTemp} {props.units}</div>
    }
    


    return (
            <div>
                <Sparklines data={props.data} limit={40}  width={180} height={120} >
                    <SparklinesLine color={props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>Avg: {average(props.data)} {props.units} </div>
                {currentTemp}
                {currentHum}

            </div>
    )
}

export default Chart;