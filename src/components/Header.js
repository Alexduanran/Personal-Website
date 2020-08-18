import React from 'react';
import css from './Header.module.css';
import Main from './Main';
 
// function Header() {
//     return (
//         <div>
            
//         </div>
//     );
// }

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0};
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    handleScroll(event) {
        let scrollTop = window.scrollY,
                minHeight = 0.15 * window.innerHeight,
                logoHeight = Math.max(minHeight, window.innerHeight - scrollTop);
        this.setState({
            height: logoHeight
        });
    }

    render() {
        return (
            <div>
                <div className={css.container} style={{height: this.state.height}}>
                    Anran Du
                </div>
                &nbsp;
                <Main height = {this.state.height}/>
            </div>
        );
    }
}

export default Header;