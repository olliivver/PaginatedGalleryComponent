import styled from "styled-components";

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationButton key={number} onClick={() => paginate(number)}>
          {number}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const PaginationButton = styled.button`
  margin: 0 3rem;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1501;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 100px;

  &:hover {
    transform: translateY(-3px);
  }
  @media (max-width: 768px){
    margin: 0 0.2rem;
  }
  @media (max-width: 550px){
    margin: 0 ;
    font-size: 1.2rem;
    padding: .5rem 1rem;
  }
`;
export default Pagination;
