import React, { Component } from 'react'
import '../App.css'
import SummaryOptions from './SummaryOptions';
import Total from './Total';

class Summary extends Component {

    render(){
        
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return (
                <div>
                    <SummaryOptions 
                        featureHash={featureHash} 
                        feature={feature} 
                        selectedOption={selectedOption}
                        key={idx}/>
                    <Total selected={this.props.selected}/>
                </div>

                    
            );
        });
        
        return(
            <div>{summary}</div>
        )

    }
}

export default Summary