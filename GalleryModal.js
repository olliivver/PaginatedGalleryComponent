import Gallery from "./Gallery";
import styled from "styled-components";
import close from "./assets/close.png";

const GalleryModal = ({ onClose }) => {
  return (
    <GalleryModalDiv>
      <GalleryModalContent>
        <Gallery />
      </GalleryModalContent>
      <GalleryModalClose onClick={onClose}>
        <img src={close} alt="close the gallery" />
      </GalleryModalClose>
    </GalleryModalDiv>
  );
};
const GalleryModalDiv = styled.div`
  position: fixed;
  z-index: 115;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(176, 176, 176, 1) 50%,
    rgba(176, 176, 176, 1) 100%
  );
  animation: swipe 1s ease-out;
  @keyframes swipe {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const GalleryModalContent = styled.div`
  max-width: 100%;
  max-height: 100%;
`;
const GalleryModalClose = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  img {
    height: 5rem;
  }
`;

export default GalleryModal;
