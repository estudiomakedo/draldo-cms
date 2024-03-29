import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import GoogleFontLoader from '../components/modified/GoogleFontLoader';

import Theme from '../../config/theme';

const Box = styled.div`
  background-color: ${Theme.colors.primary.lighter};
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.maxWidth};

  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: auto 3fr;
  grid-gap: 20px;
  padding: 2rem 1rem 3rem;

  @media screen and (min-width: ${Theme.breakpoints.m}) {
    padding: 2rem 4rem 3rem;
  }

  @media screen and (max-width: ${Theme.breakpoints.l}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  grid-column: 1/-1;
  font-size: 50px;
  color: ${Theme.colors.white.darkGrey};
`;

const Text = styled.p`
  font-size: 20px;
  color: ${Theme.colors.white.dark};
  margin-bottom: 20px;
`;

const TheMethodSection = ({ children, title, date }) => {
  return(
  <Box>
    <Wrapper>
      <GoogleFontLoader
            fonts={[
                {
                    font: 'Poppins',
                    weights: [300, 400, 600],
                },
            ]}
          />
      
      <Title>Conheça o método Aldo Grisi</Title>
      <div>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </div> 

      <iframe style={{margin: "0 auto"}
    } width="100%" height="315" src="https://www.youtube.com/embed/9d2x_hYSx2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Wrapper>
  </Box>
)};

export default TheMethodSection;

TheMethodSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

TheMethodSection.defaultProps = {
  children: false,
  date: false,
  title: false,
};
