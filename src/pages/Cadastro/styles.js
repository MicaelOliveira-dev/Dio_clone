import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h1`
    color: #FFF;
    font-family: 'Open Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 388px;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 350px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 15px;
    color: #e5e044;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e23dd7;
`


export const FormContainer = styled.form`
    width: 275px;
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 30px; 
    background:none;
    border:none;
    outline:none;
    border-bottom:1px solid #3B3450;
    padding-bottom: 15px;
    color:#FFF;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
`;

export const Button = styled.button`
    margin-top: 20px;
    width: 280px;
    height: 41px;
    background-color: #E4105D;
    border:none;
    border-radius: 20px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 20px;
`