import React from 'react';
import Features from './Features';

class MainForm extends React.Component{



    render(){
        //console.log(this.props.features)
        return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features features={this.props.features} selected={this.props.selected} updateFeature={this.props.updateFeature} />
            
          </form>
        )
    }
}

export default MainForm;