import React, { useState, useEffect, useRef } from 'react';
import {ModalInsideContainer} from '../lib/Styled'
import CloseIcon from '../resource/CloseIcon.svg'

interface InsideProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const Inside = (props: InsideProps) => {
      // 모달 외부 클릭시 닫기
      const clickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        if (target.dataset.container) props.setIsOpened(false)
    };
    return (
      <ModalInsideContainer onClick={clickOutside} data-container={"true"}>
        <main style={props.style}>{props.children}</main>
      </ModalInsideContainer>
    )
}

export default {
    Inside
}

