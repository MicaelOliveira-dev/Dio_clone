import React from 'react';
import logo from "../../assets/logo-dio.png";
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
              <img src={logo} alt="Logo da Dio"/>
              {autenticado ? (
                  <>
                    <BuscarInputContainer title="Entrar">
                    <Input placeholder='Buscar...'></Input>
                    </BuscarInputContainer>     
                    <Menu>Live Code</Menu>        
                    <Menu>Global</Menu> 
                  </>
              ) : null}
              
            </Row>
            <Row>
                {autenticado ? (
                  <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                ) : (
                  <>
                    <MenuRight href=''>Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                  </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
