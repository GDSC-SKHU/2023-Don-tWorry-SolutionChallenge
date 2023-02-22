import React from 'react';
import ImageFOL from 'src/components/ImageFOL';
import styled from 'styled-components';
import Nav from 'src/components/Nav';

function ImageFolder() {
    return (
        <>
            <Nav />
            <StyledImageFolder>
                <ImageFOL month="1월" quantity={13} />
                <ImageFOL month="1월" quantity={13} />
                <ImageFOL month="1월" quantity={13} />
                <ImageFOL month="1월" quantity={13} />
                <ImageFOL month="1월" quantity={13} />
            </StyledImageFolder>
        </>
    );
}

export default ImageFolder;

const StyledImageFolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`;