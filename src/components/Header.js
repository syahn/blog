import React from "react";
import styled from "styled-components";

import Link from "gatsby-link";
// import './style.scss';

class Header extends React.Component {
  render() {
    const menus = ["about", "blog", "tech", "lab"];

    return (
      <Container>
        <Link to="/">
          <Logo>Frank's</Logo>
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
  font-size: 1rem;
  position: absolute;
  font-weight: 600;
  padding: 10px 19px 0 39px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  width: 200px;
  color: rgba(0, 0, 0, 0.4);
  margin: 9px auto;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
`;

const MenuItem = styled.li`
  display: inline;
`;

// Menu.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default Header;
