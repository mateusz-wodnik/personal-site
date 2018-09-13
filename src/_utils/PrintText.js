import React, {Component} from 'react';

class PrintText extends Component {
    state = {
        text: ""
    }

    componentDidMount() {
        const {text="", interval=300, randomize=0, callback, executeOnIteration} = this.props
        if(randomize > interval) return console.error("Randomize argument has to be smaller than interval argument")
        if(executeOnIteration > text.length - 1) return console.error("You can't execute callback at iteration number larger than text length")
        
        // Loop through text
        for(let i = 0; i < text.length; i++) {
            // Set timeout on every letter
            setTimeout(() => {
                // Uptade text with new letter
                this.setState((state) => ({text: state.text + text[i]}))
                // Execute callback
                if(i === (executeOnIteration || text.length - 1)) callback && callback()
            // Set and randomize timeout 
            }, i * interval + Math.floor(Math.random() * randomize))
                
        }
    }

    render() {
        return(
            <span>{this.state.text}</span>
        )
    }
}

export default PrintText;