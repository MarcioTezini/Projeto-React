import { Component } from 'react'
import './style.css'

export class Buttom extends Component {
   render() {
      const { text, onClick, disabled,className } = this.props;
      return (
           <button
            className={className}
            disabled={disabled} 
            onClick={onClick}
           >
            {text}
           </button>
      )
   }
}