import React from 'react';
import css from './Header.module.css';
import Main from './Main';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
 
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

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    render() {
        return (
            <div>
                <div className={css.container} style={{height: this.state.height}}>
                    <ParallaxProvider>
                        <div className={css.name} 
                            style={{fontSize: this.state.height * 0.06 + 10,
                                // position: 'absolute',
                                marginLeft: -window.innerWidth * (1 - this.state.height / window.innerHeight),
                                marginTop: this.state.height * 0.3,
                                textAlign: 'center'
                                }}>
                            <h1>Anran Du</h1>
                        </div>
                        <ul className={css.navbar}>
                            <li style={{
                                        marginLeft: -10000 * (1 - this.state.height / window.innerHeight)}}>
                                <Link
                                    activeClass={css.active}
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    About
                                </Link>
                            </li>
                            <li style={{
                                    marginTop: 10000 * (1 - this.state.height / window.innerHeight)}}>
                                <Link
                                    activeClass={css.active}
                                    to='publications'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    Publications
                                </Link>
                            </li>
                            <li style={{
                                    marginTop: 15000 * (1 - this.state.height / window.innerHeight),
                                    marginLeft: 60000 * (1 - this.state.height / window.innerHeight)}}>
                                <Link
                                    activeClass={css.active}
                                    to='research'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    Research
                                </Link>
                            </li>
                            <li style={{
                                    marginLeft: 30000 * (1 - this.state.height / window.innerHeight)}}>
                                <Link
                                    activeClass={css.active}
                                    to='projects'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </ParallaxProvider>
                </div>
                &nbsp;
                <Main height = {this.state.height}/>
            </div>
        );
    }
}

export default Header;