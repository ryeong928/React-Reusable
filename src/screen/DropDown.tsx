import { useState } from 'react';
import Calendar from '../component/Calendar'
import DropDown from '../component/DropDown';

const list_dropdown = ["아이템1", "아이템2", "아이템3", "아이템4", "아이템5", "아이템6", "아이템8", ];

export default () => {
  const [value1, set_value1] = useState<string>("")
  const [main, setMain] = useState<string>("")
    return(
        <main>
            <DropDown.Basic list={list_dropdown} placeholder="아이템을 선택해주세요" value={value1} setValue={set_value1} count={4}/>
            <section>
              <DropDown.Main list={list_dropdown} item={main} setItem={setMain} />
            </section>
        </main>
    )
}