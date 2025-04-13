import React, { useState, useEffect } from 'react';
import { IconButton, Box, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { HOME_CONTENT } from "../../constants/content/home";
import * as Styled from "./styles";
import Carousel from 'react-material-ui-carousel';


const chunkImages = (images, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < images.length; i += chunkSize) {
      chunks.push(images.slice(i, i + chunkSize));
    }
    return chunks;
  };


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
  
    // 1 image on small screens, 2 on md+
    const groupedImages = chunkImages(images, isSmallScreen ? 1 : 2);

    return (<Box width="100%" height="100%">
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
          heigh: '100%',
          overflow: 'hidden',
        }}
      >
        <Carousel
      navButtonsAlwaysVisible
      animation="slide"
      indicators={true}
      autoPlay={true}
      interval={4000}
      width="100%"
      sx={{ width:"80%", height:"80%"}}
    >
      {groupedImages.map((group, index) => (
        <Grid
          key={index}
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ px: 2 }}
        >
          {group.map((img, i) => (
            <Grid item xs={12} sm={6} key={i}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                width: "100%",
                background: "red"
              }}
            >
              <GatsbyImage
                image={img.src}
                alt={img.alt || `Image ${i}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                imgStyle={{
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
      </Box></Box>
    );
  };

export default ImageCarousel;
