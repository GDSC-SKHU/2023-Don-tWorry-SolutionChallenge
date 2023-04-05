import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import {
  defaultFadeInLeftVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import PhotoDetail from "src/pages/ImageFolder/Detail/PhotoDetail";
import styled, { css } from "styled-components";

interface IImageSrc {}

function ImageDetail({ imageSrc }: any) {
  const router = useRouter();
  function onClickImage() {
    router.push({
      pathname: "/ImageFolder/Detail/PhotoDetail",
      query: {
        imageSrc: imageSrc.storeFileName,
        downloadSrc: imageSrc.uploadFileName,
      },
    });
  }
  return (
    <StyledImageDetail
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
      onClick={onClickImage}
    >
      <StyledImageWrapper>
        <Image src={imageSrc.storeFileName as string} alt="imageDetail" fill />
      </StyledImageWrapper>
      {/* 
      <StyledTestImage bgSrc={imageSrc} /> */}
    </StyledImageDetail>
  );
}

export default ImageDetail;

const StyledImageDetail = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0.125rem;
`;
const StyledImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
`;
