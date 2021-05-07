import React from "react";

class AnimationRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'red',
        }
        this.myRef = React.createRef();
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll() {
        const div = this.myRef.current;
        const { y } = div.getBoundingClientRect();
        if(y < 0) {
            this.setState({background: 'blue'})
        } else {
            this.setState({background: 'red'})
        }
    }

    render() {
        return (
            <div ref={this.myRef} style={{ height: '200vh', background: this.state.background }}>
                Scroll.
            </div>
        );
    }
}

export default AnimationRef;