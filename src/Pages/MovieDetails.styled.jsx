import styled from 'styled-components';
import propTypes from 'prop-types';



export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 30px;
`;

export const Image = styled.img`
  max-height: 500px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  align-self: flex-start;
`;

export const Description = styled.div`
  flex: 1 1 auto;
`;

export const ProdCompany = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10px;
`;

Container.propTypes = {
  backdrop: propTypes.string,
};
