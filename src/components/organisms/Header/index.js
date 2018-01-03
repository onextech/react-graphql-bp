import React from 'react';
import { Visibility, Container, Segment, Menu, Button } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { MenuLink } from '@onextech/react-semantic-booster';


const FloatingDiv = styled.div`
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    width: 100%;
`;

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <MenuLink to="#home">Home</MenuLink>
      <MenuLink to="#work">Work</MenuLink>
      <MenuLink to="#company">Company</MenuLink>
      <MenuLink to="#careers">Careers</MenuLink>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

class Header extends React.Component {
  state = {}

  showFixedMenu = () => this.setState({ visible: true })

  hideFixedMenu = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state;
    return (
      <FloatingDiv>
        { visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item><HashLink to="#home">Home</HashLink></Menu.Item>
                <Menu.Item><HashLink to="#work">Work</HashLink></Menu.Item>
                <Menu.Item><HashLink to="#company">Company</HashLink></Menu.Item>
                <Menu.Item><HashLink to="#careers">Careers</HashLink></Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>Log in</Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </FloatingDiv>
    );
  }
}

export default Header;
