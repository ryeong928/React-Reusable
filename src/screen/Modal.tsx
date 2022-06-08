import Modal from '../component/Modal'
import {useState} from 'react'


export default () => {
    const [modal1, setModal1] = useState<boolean>(false)
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", gap: 20}}>
            <section>
                <button onClick={()=>{setModal1(prev => !prev)}}>기본 모달1</button>
                {modal1 && (
                <Modal.Base1 isOpened={modal1} setIsOpened={setModal1}>
                    <main>
                        {Array.from({length: 20}, (v, i) => i).map(item => <div key={item}>선택 {item}</div>)}
                    </main>
                    <footer>
                        <button>선택</button>
                    </footer>
                </Modal.Base1>
                )}
            </section>
        </div>
    )
}