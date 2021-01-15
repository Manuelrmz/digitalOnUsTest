import React from 'react';

class DigitalOnUsPanelClickable extends React.Component{
    render(){
        let isHorizontal = this.props.isHorizontal;
        let isActive = this.props.isActive;
        var componentClasses = 'panelClickable ' + (isHorizontal ? 'panelClickableHorizontal' : 'panelClickableVertical') + (isActive ? " panelClickableActive" : "");
        return(
            <div className={componentClasses} onClick={this.props.onClick}></div>
        )
    }
}

export default DigitalOnUsPanelClickable;