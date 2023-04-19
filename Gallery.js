import styled from "styled-components";
import GalleryImg from "./GalleryImg";
import imageArray from "./Photos";
import { useState, useEffect, useRef } from "react";
import Pagination from "./Paginate";

const Gallery = () => {
  const IMGWIDTH = 200;
  const MARGINS = 200;
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const area = windowSize.current[0] * windowSize.current[1];
  const onResize = () => {
    setImagesPerPage((windowSize.current[0] * windowSize.current[1]) / calc(IMGWIDTH + MARGINS));
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(Math.floor(area / calc(IMGWIDTH + MARGINS)));

  useEffect(() => {
    if (imageArray.length > 0) {
      setIsLoading(false);
    }
  }, [imageArray]);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageArray.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <StyledGallery>
        {currentImages.map((imageSrc) => (
          <GalleryImg src={imageSrc} key={imageSrc} />
        ))}
      </StyledGallery>
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={imageArray.length}
        paginate={paginate}
      />
    </>
  );
};

const StyledGallery = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 3rem;
  animation: galleryFade 1s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
  @keyframes galleryFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Gallery;
