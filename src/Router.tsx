import {Route, Routes, useLocation} from 'react-router-dom';
import Origin from './screen/Origin'

export default () => {
    const location = useLocation()
    return(
        <Routes location={location}>
            <Route path="/*" element={<Origin />} />
        </Routes>
    )
}