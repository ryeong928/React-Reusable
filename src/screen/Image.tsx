import React, { useState } from "react";
import styled from "styled-components";
import Image from "../component/Image";
import Button from "../component/Button";
import { BoardFileInput } from "../lib/Interface";
import PlusPink from "../resource/PlusPink.svg";
import CloseCircleGray from "../resource/CloseCircleGray.svg";

export default () => {
  const [image1, setImage1] = useState<BoardFileInput[] | undefined>();
  const [image3, setImage3] = useState<BoardFileInput[] | undefined>();
  const [profile1, setProfile1] = useState<BoardFileInput[] | undefined>();
  const [styled1, setStyled1] = useState<BoardFileInput[] | undefined>();
  const [styled3, setStyled3] = useState<BoardFileInput[] | undefined>();
  const [styled4, setStyled4] = useState<BoardFileInput[] | undefined>();
  const [allocated, set_allocated] = useState<boolean>(false);
  const imageList = (images: BoardFileInput[] | undefined) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 10,
          backgroundColor: "pink",
          padding: 10,
        }}
      >
        {images?.map((image, idx) => (
          <img
            src={image.fileData}
            onClick={deleteImage}
            key={image.fileName + idx}
            style={{ width: 100, aspectRatio: "1/1" }}
          />
        ))}
      </div>
    );
  };
  const styledImageList1 = (images: BoardFileInput[] | undefined) => {
    return (
      <main>
        {images?.map((image, idx) => (
          <img
          key={image.fileName + idx}
          src={image.fileData}
            // 미리보기 사진을 눌러 삭제하기 기능
            onClick={deleteImage}
          />
        ))}
        <img
          src={CloseCircleGray}
          onClick={() => {
            setStyled1((prev) => undefined);
          }}
        />
      </main>
    );
  };
  // 삭제
  const deleteImage = (e: React.MouseEvent<HTMLElement>) => {
    const index = e.currentTarget.dataset.idx as string;
    setStyled4((prev) =>
      prev ? [...prev.filter((item, idx) => String(idx) !== index)] : undefined
    );
  };
  // 선택한 이미지 미리보기
  const previewImages = (images: BoardFileInput[]) => {
    return images?.map((image, idx) => (
      <section key={image.fileName + idx} data-idx={idx} onClick={deleteImage}>
        <img src={image.fileData} />
        <img src={CloseCircleGray} />
      </section>
    ));
  };
  return (
    <main>
      <section>
        <p>이미지 업로더 : 1개</p>
        <Image.Uploader howMany={1} images={image1} setImages={setImage1} />
        {image1 && imageList(image1)}
      </section>
      <section>
        <p>이미지 업로더 : 3개</p>
        <Image.Uploader howMany={3} images={image3} setImages={setImage3} />
        {image3 && imageList(image3)}
      </section>
      <section>
        <p>프로필 이미지</p>
        <ProfileUploader>
        <Image.Uploader howMany={1} images={profile1} setImages={setProfile1} />
        {profile1 && styledImageList1(profile1)}
        </ProfileUploader>
      </section>
      <section>
        <p>스타일드 이미지 업로더 : 1개</p>
        <ImageUploader1>
          <img src={PlusPink} />
          <Image.Uploader howMany={1} images={styled1} setImages={setStyled1} />
          {styled1 && styledImageList1(styled1)}
        </ImageUploader1>
      </section>
      <section>
        <p>스타일드 이미지 업로더 : 1개가 총 3개</p>
        <div style={{ display: "flex", gap: 20 }}>
          {Array.from({ length: 3 }).map((item, idx) => (
            <ImageUploader1 key={idx}>
              <img src={PlusPink} />
              <Image.Uploader
                howMany={1}
                images={styled3}
                setImages={setStyled3}
              />
              {styled3 && previewImages(styled3)}
            </ImageUploader1>
          ))}
        </div>
      </section>
      <section style={{ width: 375, backgroundColor: "gray" }}>
        <p>스타일드 이미지 업로더 : 4개</p>
        <ImageUploader2 howMany={4} gap={8}>
          <section>
            <img src={PlusPink} />
            <Image.Uploader
              howMany={4}
              images={styled4}
              setImages={setStyled4}
            />
          </section>
          {styled4 && previewImages(styled4)}
        </ImageUploader2>
      </section>
      <section>
        <p>SVG 컬러링</p>
        <Image.ColoredSVG />
      </section>
      <section>
        <p>SVG 컬러링2</p>
        <Image.ColoredSVG2 />
      </section>
      <section>
        <Button.OnOff value={allocated} setValue={set_allocated} />
      </section>
    </main>
  );
};
const ProfileUploader = styled.div`
position: relative;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid pink;
border-radius: 50%;
& input {
  position: absolute;
  z-index: 1;
  opacity: 0;
  width: 100%;
  height: 100%;
}
  & > main{
    position: relative;
    z-index: 2;
    width: 100%;
    aspect-ratio: 1/1;
    & img:first-child{
      display: block;
      width: 100%;
      aspect-ratio: 1/1;
      overflow: hidden;
      object-fit: cover;
      border-radius: 50%;
    }
    & img:last-child {
      position: absolute;
      z-index: 4;
      width: 18px;
      top: 0;
      right: 0;
    }
  }
`
const ImageUploader1 = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid pink;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    position: absolute;
    z-index: 2;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  & main {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    & img {
      width: 100%;
      border-radius: 10px;
      aspect-ratio: 1/1;
    }
    & img:last-child {
      width: 18px;
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
`;
interface ImageUploader2Props extends React.HTMLAttributes<HTMLDivElement> {
  howMany?: number;
  gap?: number;
}
const ImageUploader2 = styled.div<ImageUploader2Props>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.howMany ? props.howMany + 1 : 2)},
    1fr
  );
  gap: ${(props) => props.gap || 10}px;
  & > section {
    position: relative;
    width: calc(
      (
          100% -
            (
              ${(props) => props.gap || 10} *
                ${(props) => (props.howMany ? props.howMany + 1 : 2)}
            )
            px
        ) / ${(props) => (props.howMany ? props.howMany + 1 : 2)}
    );
    aspect-ratio: 1/1;
  }
  & > section:nth-of-type(1) {
    border: 1px solid pink;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
  & > section:nth-of-type(1) ~ section {
    & img:first-child {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 10px;
    }
    & img:last-child {
      position: absolute;
      width: 18px;
      top: -7px;
      right: -7px;
    }
  }
`;
