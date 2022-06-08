import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000080;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        color: white;
        font-size: 2rem;
    }
`;
export default () => {
    return (
        <LoadingContainer
            className={'loading'}
            onClick={e => {
                e.preventDefault();
                e.stopPropagation();
            }}>
            <span>Loading...</span>
        </LoadingContainer>
    );
};
