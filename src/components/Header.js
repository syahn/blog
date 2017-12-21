import React from "react";
import styled from "styled-components";

import Link from "gatsby-link";
// import './style.scss';

class Header extends React.Component {
  state = {
    scrollDowned: false,
    isLogoChanged: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = document.scrollingElement.scrollTop;
    const { isLogoChanged } = this.state;

    if (scrollTop > 50 && !isLogoChanged) {
      this.setState({
        scrollDowned: true,
        isLogoChanged: true
      })
    } else if (scrollTop < 50 && isLogoChanged) {
      this.setState({
        scrollDowned: false,
        isLogoChanged: false
      })
    }
  }

  render() {
    const menus = ["about", "blog", "tech", "lab"];
    const { scrollDowned } = this.state;

    return (
      <Container>
        <Link to="/">
          <Logo scrollDowned={scrollDowned}>Frank's</Logo>
        </Link>
        <Menu>
          {menus.map(menu => (
            <MenuItem key={menu}>
              <Link exact to={`/${menu}`}>
                {menu}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    );
  }
}

const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  position: absolute;
  font-weight: 700;
  padding: 1rem 1.5rem;
  transition-duration: 0.5s;

  @media (max-width: 680px) {
    color: ${props => (props.scrollDowned === true) ? '#082243' : 'inherit'}
     
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  width: 200px;
  color: rgba(0, 0, 0, 0.4);
  margin: 1.4rem auto;
  text-transform: uppercase;
  font-size: 0.7rem;

  @media (max-width: 680px) {
    position: absolute;
    right: 2rem;
    margin: 1.35rem auto 0;
  }
`;

const MenuItem = styled.li`
  display: inline;
`;

// Menu.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default Header;
