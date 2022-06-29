import Modal from '../component/Modal'
import {useState} from 'react'


export default () => {
    const [modal1, setModal1] = useState<boolean>(false)
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", gap: 20}}>
            <section>
              <button onClick={()=>{setModal1(true)}}>기본 모달2</button>
              {modal1 && 
                <Modal.Inside isOpened={modal1} setIsOpened={setModal1}>
                    <div>안녕</div>
                    <button onClick={()=>{setModal1(false)}}>닫기</button>
                </Modal.Inside>
              }
            </section>
        </div>
    )
}