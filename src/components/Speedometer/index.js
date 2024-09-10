import { Component } from "react";
import './index.css'

class Speedometer extends Component {
    state = {speed: 0}
    onClickAccelerateButton = () => {
        const {speed} = this.state
        if (speed < 200){
            this.setState(prevState =>{
                return {speed: prevState.speed + 10}
            })
        }
    }
    onClickApplyBrakeButton = () => {
        const {speed} = this.state
        if (speed > 0) {
            this.setState(prevState => {
                return {speed: prevState.speed - 10}
            })
        }
    }
    render(){
        const {speed} = this.state
        return(
            <div className="speedometer-app-container">
                <div className="speedometer-container">
                    <h1 className="heading"> SPEEDOMETER </h1>
                    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="speedometer-img" alt="speedometer-img"/>
                    <h1 className="speed-text">Speed is <span>{speed}</span> mph </h1>
                    <p className="speed-limits"> Min Limit is 0mph, Max limit is 200mph </p>
                    <div className="buttons-container">
                        <button type="button" className="button accelerate-btn" onClick={this.onClickAccelerateButton}> Acclerate </button>
                        <button type="button" className="button applybrake-btn" onClick={this.onClickApplyBrakeButton}> Apply Brake </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Speedometer