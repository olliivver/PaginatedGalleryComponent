import styled from "styled-components";
import { useState } from "react";

const GalleryImg = ({ src }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedImg, setExpandedImg] = useState(null);

  const handleClick = () => {
    setExpanded(!expanded);
    setExpandedImg(src);
  };
  const deClick = () =>{
    setExpanded(!expanded);
    setExpandedImg(null);
  }

  if (!src) {
    return <h2>...</h2>;
  } else
    return (
      <>
      <StyledImage onClick={handleClick} expanded={expanded}>
        <img
          src={src}
          alt="Gallery of GCBuild construction site work, including beautiful decks, framing, interiors and foundations."
        />
      </StyledImage>
      <ExpandedDiv expanded={expanded} onClick={deClick}>
        <button></button>
        <img src={expandedImg}></img>
        <button></button>
      </ExpandedDiv>
      </>
    );
};

const ExpandedDiv = styled.div`
display: flex;
justify-content: center;
  width: ${(props) => (props.expanded ? "100%" : "null")};
  height: ${(props) => (props.expanded ? "100vh" : "null")};
  z-index: ${(props) => (props.expanded ? "9999" : "null")};
  position: ${(props) => (props.expanded ? "fixed" : "null")};
  img{
    width: ${(props) => (props.expanded ? "auto" : "null")};
    height: ${(props) => (props.expanded ? "80%" : "null")};
    object-fit:  ${(props) => (props.expanded ? "cover" : "null")};
  }
`

const StyledImage = styled.div`
  transition: all 0.2s ease;
  margin: 2rem;
  cursor: pointer;
  position: static;
  img {
    object-fit: cover;
    height: 20rem;
    width: 30rem;
  }
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px){
    margin: 1rem;
  }
  @media (max-width: 550px){
    margin: 0.2rem;
  }
`;

export default GalleryImg;
