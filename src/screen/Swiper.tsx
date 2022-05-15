import Swiper from '../component/Swiper'


export default () => {
    return(
        <main>
            <Swiper listArr={[{name: "name1", price: 10}, {name: "name2", price: 20}, {name: "name3", price: 30}]} autoPlayDelay={3000}/>
        </main>
    )
}