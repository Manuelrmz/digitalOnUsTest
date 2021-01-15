import React from 'react';
import DigitalOnUsPanelClickable from './digital-on-us-panel-clickable';
import DigitalOnUsPanelNotClickable from './digital-on-us-panel-notClickable';
import image from '../resources/digital.png';
class DigitalOnUsPanel extends React.Component{
    constructor(props){
        super(props);
        this.minMovement = 40;
        this.maxPosition = 500;
        this.state = 
        {
            topPosition:0,
            leftPosition:0,
            imageDimensions: {},
            position: {t:false,l:false,r:false,b:false}
        }
        this.loadImageSize = this.loadImageSize.bind(this);
    }

    loadImageSize({target:img}){
        this.setState(
            {
                topPosition: 250 - (img.offsetHeight / 2),
                leftPosition: 250 - (img.offsetWidth / 2),
                imageDimensions: 
                {
                    height:img.offsetHeight,
                    width:img.offsetWidth
                }
            });
    }

    changeLogoPosition(direction){
        this.setState({position:{t:false,l:false,r:false,b:false}});
        let topPosition = this.state.topPosition;
        let leftPosition = this.state.leftPosition;
        switch(direction){
            case "t":
                topPosition = topPosition < this.minMovement ? 0 : topPosition - this.minMovement;
                this.setState({topPosition:topPosition, position:{t:true}});
                break;
            case "l":
                leftPosition = leftPosition < this.minMovement ? 0 : leftPosition - this.minMovement;
                this.setState({leftPosition: leftPosition, position:{l:true}});
                break;
            case "r":
                leftPosition = (leftPosition + this.minMovement) + this.state.imageDimensions.width > this.maxPosition ? 500 - this.state.imageDimensions.width : leftPosition + this.minMovement;
                this.setState({leftPosition: leftPosition, position:{r:true}});
                break;
            case "b":
                topPosition = (topPosition + this.minMovement) + this.state.imageDimensions.height > this.maxPosition ? 500 - this.state.imageDimensions.height : topPosition + this.minMovement;
                this.setState({topPosition:topPosition, position:{b:true}});
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div className="component">
                <DigitalOnUsPanelNotClickable />
                <DigitalOnUsPanelClickable isActive={this.state.position.t} onClick={() => this.changeLogoPosition("t")} isHorizontal={true} />
                <DigitalOnUsPanelNotClickable />
                <DigitalOnUsPanelClickable isActive={this.state.position.l} onClick={() => this.changeLogoPosition("l")} isHorizontal={false} />
                <div className="panelImage">
                    <img alt="" onLoad={this.loadImageSize} src={image} style={{top:this.state.topPosition, left: this.state.leftPosition}}></img>
                </div>
                <DigitalOnUsPanelClickable isActive={this.state.position.r} onClick={() => this.changeLogoPosition("r")} isHorizontal={false}/>
                <DigitalOnUsPanelNotClickable />
                <DigitalOnUsPanelClickable isActive={this.state.position.b} onClick={() => this.changeLogoPosition("b")} isHorizontal={true}/>
                <DigitalOnUsPanelNotClickable />
            </div>
        )
    }
}

export default DigitalOnUsPanel;