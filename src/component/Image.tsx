import React, { ChangeEvent, ProgressHTMLAttributes } from "react";
import { BoardFileInput } from "../lib/Interface";

// FileReader 객체 : 비동기적으로 파일의 내용을 읽어들이는데 사용된다
// 속성 : error, readyState, result
// 이벤트 : on + load(읽기 성공), error, abort, loadstart, loadend, progress
// 메소드 : abort(읽기 중단), readAsDataURL(바이너리 파일을 Base64 Encode 문자열로 반환), readAsText(텍스트 파일을 읽어들임)
// File 객체는 input 태그를 통하여 유저가 선택한 파일들의 결과로 반환된 FileList 객체
interface ImageUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  // 이미지 등록 갯수
  howMany: number;
  images: BoardFileInput[] | undefined;
  setImages: React.Dispatch<React.SetStateAction<BoardFileInput[] | undefined>>;
}
const Uploader = (props: ImageUploadProps) => {
  const selectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const inputTag = e.currentTarget;
    const files = inputTag.files as FileList;
    // 선택된 이미지 갯수만큼 등록하기
    for (let i = 0; i < files.length; i++) {
      const fileName = files[i].name;
      // FileReader 객체 생성
      const fileReader = new FileReader();
      // 파일 읽기 성공시, 실행할 함수 등록
      fileReader.onload = (event: any) => {
        const newImage: BoardFileInput = {
          fileName,
          fileData: event.currentTarget.result,
        };
        // 하나만 등록 | 여러개 등록
        if (props.howMany === 1) {
          props.setImages([newImage]);
        } else if (props.howMany > 1) {
          props.setImages((prev: BoardFileInput[] | undefined) => {
            if (prev === undefined) return [newImage];
            else {
              // 설정한 갯수와 같을 경우
              if (prev.length === props.howMany) {
                prev.pop();
              }
              return [newImage, ...prev];
            }
          });
        } else {
          return alert("input.props.howMany는 1 이상이어야 합니다");
        }
        // 등록 후 input value 초기화
        inputTag.value = "";
      };
      // 파일 읽기 요청
      fileReader.readAsDataURL(files[i]);
    }
  };
  return (
    <input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={selectImage}
      multiple={props.howMany === 1 ? false : true}
    />
  );
};
export default {
  Uploader,
};
