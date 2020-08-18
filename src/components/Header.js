import React from 'react';
import css from './Header.module.css';
import Main from './Main';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
 
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
                    <ParallaxProvider>
                        {/* <Parallax x={[50, -50]} y={[40, -40]} disabled={ this.state.height <= 0.15 * window.innerHeight ? true : false }> */}
                        <div className={css.name} 
                            style={{fontSize: this.state.height * 0.06 + 10,
                                // position: 'absolute',
                                marginLeft: -window.innerWidth * (1 - this.state.height / window.innerHeight),
                                marginTop: this.state.height * 0.3,
                                textAlign: 'center'
                                // display: 'flex',  
                                // justifyContent:'center' 
                                // alignItems:'center'
                                // height: '100vh',
                                }}>
                            <h1>Anran Du</h1>
                        </div>
                        {/* </Parallax> */}
                    </ParallaxProvider>
                </div>
                &nbsp;
                <Main height = {this.state.height}/>
            </div>
        );
    }
}

export default Header;