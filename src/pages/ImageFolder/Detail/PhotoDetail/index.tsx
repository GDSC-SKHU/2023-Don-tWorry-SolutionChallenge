import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import styled from "styled-components";

function PhotoDetail() {
  const [downloadUrl, setDownloadUrl] = useState<any>();

  useEffect(() => {
    async function download() {
      console.log(Router.query.imageSrc);
      const res = await fetch(Router.query.downloadSrc as string);
      const blob = await res.blob();
      setDownloadUrl(window.URL.createObjectURL(blob));
    }
    if (Router.isReady) {
      download();
    }
  }, []);

  return (
    <>
      <Nav />
      <StyledImageWrapper>
        <Image src={Router.query.imageSrc as string} alt="imageDetail" fill />
        <a href={downloadUrl} download>
          <StyledBtn>save as file</StyledBtn>
        </a>
      </StyledImageWrapper>
      <BottomNav selected="Images" />
    </>
  );
}
const StyledBtn = styled.button`
  position: fixed;
  margin: 1rem 1rem;
  padding: 0.3rem 0.8rem;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.color.blueGreen};
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
`;

const StyledImageWrapper = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  width: 100%;
`;

export default PhotoDetail;
