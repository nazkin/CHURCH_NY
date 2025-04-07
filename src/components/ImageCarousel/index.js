import React, { useState, useEffect } from 'react';
import { IconButton, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HOME_CONTENT } from "../../constants/content/home";
import * as Styled from "./styles";


const ImageCarousel = ({language}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" }, name: { regex: "/^image/" }  }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(width: 500, height: 400, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes.map((node) => ({
    src: getImage(node.childImageSharp),
    desc: `This is ${node.base.split('.')[0]}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Handle automatic rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual rotation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (<>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography sx={Styled.homeCarouselText}>
            {HOME_CONTENT[language].ourChurch}
        </Typography>
    </Box>
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* "Back" button outside the images */}
      <IconButton
        onClick={prevImage}
        sx={{
          position: 'absolute',
          left: 12,
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Show one image at a time on small screens */}
        {/* For medium and larger screens, show two images side by side */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            width: isSmallScreen ? '100%' : isMediumScreen ? '200%' : '200%',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {/* First Image */}
          <Box
            sx={{
              width: isSmallScreen ? '100%' : isMediumScreen ? '50%' : '50%',
              position: 'relative',
              padding: 1,
              transition: 'transform 1s ease-in-out', // Fade effect for the first image
            }}
          >
            <GatsbyImage
              image={images[currentIndex % images.length].src}
              alt={`Image ${currentIndex + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Second Image (only shown on medium and large screens) */}
          {!isSmallScreen && (
            <Box
              sx={{
                width: isMediumScreen ? '50%' : '50%',
                padding: 1,
                position: 'relative',
                transition: 'transform 1s ease-in-out', // Fade effect for the second image
              }}
            >
              <GatsbyImage
                image={images[(currentIndex + 1) % images.length].src}
                alt={`Image ${currentIndex + 2}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}
        </Box>
      </Box>

      {/* "Next" button outside the images */}
      <IconButton
        onClick={nextImage}
        sx={{
          position: 'absolute',
          right: 12,
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box></>
  );
};

export default ImageCarousel;
