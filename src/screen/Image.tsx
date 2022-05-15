import React, {useState} from 'react'
import styled from 'styled-components'
import Image from '../component/Image'
import {BoardFileInput} from '../lib/Interface'
import PlusPink from '../resource/PlusPink.svg'
import CloseCircleGray from '../resource/CloseCircleGray.svg'

export default () => {
    const [image1, setImage1] = useState<BoardFileInput[] | undefined>()
    const [image3, setImage3] = useState<BoardFileInput[] | undefined>()
    const [styled1, setStyled1] = useState<BoardFileInput[] | undefined>()
    const [styled3, setStyled3] = useState<BoardFileInput[] | undefined>()
    const [styled4, setStyled4] = useState<BoardFileInput[] | undefined>()
    console.log(styled4)
    const imageList = (images: BoardFileInput[] | undefined) => {
        return (
            <div style={{display: "flex", gap: 10, backgroundColor: "pink", padding: 10}}>
                {images?.map((image, idx) => (<img src={image.fileData} onClick={deleteImage} key={image.fileName + idx} style={{width: 100, aspectRatio: "1/1"}}/>))}
            </div>)
    }
    const styledImageList1 = (images: BoardFileInput[] | undefined) => {
        return (
            <main>
                {images?.map((image, idx) => (<img src={image.fileData} onClick={deleteImage} key={image.fileName + idx}/>))}
                <img src={CloseCircleGray} onClick={()=>{setStyled1(prev => undefined)}}/>
            </main>)
    }
    const deleteImage = (e: React.MouseEvent<HTMLElement>) => {
        const index = e.currentTarget.dataset.idx as string
        setStyled4(prev => prev ? [...prev.filter((item, idx) => String(idx) !== index)] : undefined)
    }
    const styledImageList2 = (images: BoardFileInput[]) => {
        return (images?.map((image, idx) => (
                    <div key={image.fileName + idx} data-idx={idx} onClick={deleteImage}>
                        <img src={image.fileData}/>
                        <img src={CloseCircleGray}/>
                    </div>
                )))
    }
    return(
        <main>
            <section>
                <p>이미지 업로더 : 1개</p>
                <Image.Uploader howMany={1} images={image1} setImages={setImage1}/>
                {image1 && imageList(image1)}
            </section>
            <section>
                <p>이미지 업로더 : 3개</p>
                <Image.Uploader howMany={3} images={image3} setImages={setImage3}/>
                {image3 && imageList(image3)}
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
                <div style={{display: "flex", gap: 20}}>
                    {Array.from({length: 3}).map((item, idx) => (
                        <ImageUploader1 key={idx}>
                            <img src={PlusPink} />
                            <Image.Uploader howMany={1} images={styled3} setImages={setStyled3} />
                            {styled3 && styledImageList2(styled3)}
                        </ImageUploader1>
                    ))}
                </div>
            </section>
            <section>
                <p>스타일드 이미지 업로더 : 4개</p>
                <ImageUploader2>
                    <section>
                        <img src={PlusPink} />
                        <Image.Uploader howMany={4} images={styled4} setImages={setStyled4} />
                    </section>
                    {styled4 && styledImageList2(styled4)}
                </ImageUploader2>
            </section>
        </main>
    )
}
const ImageUploader1 = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid pink;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & input{
        position: absolute;
        z-index: 2;
        opacity: 0;
        width: 100%;
        height: 100%;
    }
    & main{
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        & img{
            width: 100%;
            border-radius: 10px;
            aspect-ratio: 1/1;
        }
        & img:last-child{
            width: 18px;
            position: absolute;
            top: -7px;
            right: -7px;
        }
    }
`
const ImageUploader2 = styled.div`
    height: 100px;
    display: flex;
    gap: 10px;
    & section{
        position: relative;
        height: 100%;
        aspect-ratio: 1/1;
        border: 1px solid pink;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        & input{
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
        }
    } 
    & > div{
        position: relative;
        height: 100%;
        aspect-ratio: 1/1;
        & img:first-child{
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: 10px;
        }
        & img:last-child{
            position: absolute;
            width: 18px;
            top: -7px;
            right: -7px;
        }
    }
`