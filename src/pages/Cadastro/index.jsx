import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { Header } from '../../components/Header';

import { Column, Container, CriarText, EsqueciText,  SubtitleLogin, Title, TitleLogin, Wrapper,FormContainer, InputContainer, StyledInput, Button, IconContainer } from './styles';

const Cadastro = () => {
  
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas
            desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <FormContainer>
                <InputContainer>
                    <IconContainer>
                    <FontAwesomeIcon icon={faUser} />
                    </IconContainer>
                    <StyledInput type="text" placeholder="Nome Completo" />
                </InputContainer>
                <InputContainer>
                    <IconContainer>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </IconContainer>
                    <StyledInput type="text" placeholder="E-mail" />
                </InputContainer>
                <InputContainer>
                    <IconContainer>
                    <FontAwesomeIcon icon={faLock} />
                    </IconContainer>
                    <StyledInput type="password" placeholder="Senha" />
                </InputContainer>
                <Button type="submit">Criar minha conta</Button>
            </FormContainer>
              <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</EsqueciText>
              <CriarText>Já tenho conta. Fazer login</CriarText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
