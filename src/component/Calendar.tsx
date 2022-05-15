import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Constants from '../lib/Constants';
import {
    FontSize13KM,
    FontSize14E,
    FontSize14K,
    FontSize18E,
    FontSize18KM,
    RowCenter,
} from '../lib/Styled';
import AppleOutline from '../resource/AppleOutline.svg';
import AppleFilled from '../resource/AppleFilled.svg';
import ArrowLeftBlack from '../resource/ArrowLeftBlack.svg';
import ArrowRightBlack from '../resource/ArrowRightBlack.svg';
import ArrowDownBlack from '../resource/ArrowDownBlack.svg';
import ArrowUpBlack from '../resource/ArrowUpBlack.svg';

type Colors = 'pink' | 'blue' | 'purple';
interface Coaching {
    pro: string;
    coaching: string[];
}
interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    list: Coaching[];
}
export default (props: CalendarProps) => {
    // 날짜 지정
    const [dateObj, setDateObj] = useState(new Date());
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth : 0 ~ 11 -> 1월 ~ 12월
    const date = dateObj.getDate();
    const day = dateObj.getDay(); // getDay : 0 ~ 6 -> 일 ~ 토
    // 저번달, 이번달 마지막 일수와 요일
    const prevDateObj = new Date(year, month - 1, 0);
    const currentDateObj = new Date(year, month, 0);
    const PLDate = prevDateObj.getDate();
    const PLDay = prevDateObj.getDay();
    const CLDate = currentDateObj.getDate();
    const CLDay = currentDateObj.getDay();
    // 달력 채우기 : 저번달 일수 배열, 이번달 일수 배열, 다음달 일수 배열
    const prevDates =
        PLDay !== 6
            ? [
                  ...Array.from({length: PLDay + 1}).map(
                      (item, idx) => PLDate - idx,
                  ),
              ].reverse()
            : [];
    const currentDates = [
        ...Array.from({length: CLDate}).map((item, idx) => idx + 1),
    ];
    const nextDates =
        CLDay !== 6
            ? [...Array.from({length: 6 - CLDay}).map((item, idx) => idx + 1)]
            : [];
    // 랜더링할 온전한 일수를 가진 배열, 현재달의 첫일과 마지막일
    const FullDates = prevDates.concat(currentDates, nextDates);
    const firstDateIdx = FullDates.indexOf(1);
    const lastDateidx = FullDates.lastIndexOf(CLDate);
    // 달(month) 이동
    const prevMonth = () => {
        setDateObj(
            prev =>
                new Date(
                    month === 1 ? year - 1 : year,
                    month === 1 ? 11 : month - 2,
                    1,
                ),
        );
    };
    const nextMonth = () => {
        setDateObj(
            prev =>
                new Date(
                    month === 12 ? year + 1 : year,
                    month === 12 ? 0 : month,
                    1,
                ),
        );
    };
    // 색상 선택창 isOpened true 상태에서, 아무거나 클릭시 DropDownList가 닫히는 로직
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        const handler = (e: any) => {
            setIsOpened(false);
        };
        if (isOpened) {
            document.addEventListener('click', handler);
        } else {
            document.removeEventListener('click', handler);
        }
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [isOpened]);

    // 전문가 선택 + 전문가의 코칭날짜 선택 + 색 변경
    const [coaching, setCoaching] = useState<Coaching>(props.list[0]);
    const when = coaching.coaching.filter(item => {
        const each = item.split(".")
        return each[0] == String(year) && each[1] == String(month)
    })
    const [color, setColor] = useState<Colors>("pink");
    const choosePro = (e: React.MouseEvent<HTMLDivElement>) => {
        const pro = e.currentTarget.textContent as string;
        setCoaching(prev => (props.list.find(coaching => coaching.pro === pro)) || prev);
        // props.list 담긴 순서에 따라 미리 정해진 색 할당
        const idx = props.list.findIndex(record => record.pro === pro);
        if (idx === 0) setColor("pink");
        if (idx === 1) setColor("blue");
        if (idx === 2) setColor("purple");
        if (idx === 3) setColor("pink");
        if (idx === 4) setColor("pink");
    };

    return (
        <Container color={color}>
            <header>
                <section>
                    <FontSize18KM className="calendar_color_title">{coaching.pro}</FontSize18KM>
                    <sub className="calendar_color_setting" 
                    onClick={() => {setIsOpened(prev => !prev);}}
                    >
                        {isOpened ? (<img src={ArrowUpBlack} />) : (<img src={ArrowDownBlack} />)}
                        {isOpened && (
                            <main>
                                {props.list.map((item, idx) => (
                                    <RowCenter key={item.pro} onClick={choosePro}>
                                        <div className={`point_color_setting_${idx}`}/>
                                        <FontSize14K style={{fontWeight: coaching.pro === item.pro ? 500 : 400}}>
                                            {item.pro}
                                        </FontSize14K>
                                    </RowCenter>
                                ))}
                            </main>
                        )}
                    </sub>
                </section>
                <section>
                    <sub onClick={prevMonth}>
                        <img src={ArrowLeftBlack} />
                    </sub>
                    <FontSize18E>{dateObj.toLocaleDateString()}</FontSize18E>
                    <sub onClick={nextMonth}>
                        <img src={ArrowRightBlack} />
                    </sub>
                </section>
            </header>
            <main>
                <section>
                    <FontSize13KM>일</FontSize13KM>
                    <FontSize13KM>월</FontSize13KM>
                    <FontSize13KM>화</FontSize13KM>
                    <FontSize13KM>수</FontSize13KM>
                    <FontSize13KM>목</FontSize13KM>
                    <FontSize13KM>금</FontSize13KM>
                    <FontSize13KM>토</FontSize13KM>
                </section>
                <section>
                    {FullDates.map((date, idx) => {
                        
                        const isRecord = when.find(item => {
                            return (item.split(".")[2] === String(date)) ? true : false
                        })
                        const isCurrent = (idx >= firstDateIdx && idx <= lastDateidx) ? '' : 'other';
                        return (
                            <div key={idx} className={isCurrent}>
                                {isRecord && <img src={AppleFilled} />}
                                <FontSize14E>{date}</FontSize14E>
                            </div>
                        );
                    })}
                </section>
            </main>
        </Container>
    );
};

const CalendarConstants = {
    colors: {
        pink_background: 'rgb(255, 249, 249)',
        pink_apple: 'rgb(239, 144, 167)',
        pink_border: 'rgb(252, 216, 224)',
        blue_background: 'rgb(243, 247, 255)',
        blue_apple: 'rgb(144, 169, 239)',
        blue_border: 'rgb(206, 219, 255)',
        purple_background: 'rgb(253, 242, 255)',
        purple_apple: 'rgb(211, 154, 225)',
        purple_border: 'rgb(235, 210, 240)',

        others: 'rgb(223, 223, 223)',
    },
};
interface ContainerProps {
    color: Colors
}
const Container = styled.div<ContainerProps>`
    width: 100%;
    text-align: center;
    & header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 10px;
        & section:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
            & .calendar_color_title::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 50%;
                transform: translateX(-50%);
                width: 110%;
                height: 3px;
                border-radius: 1.5px;
                background-color: ${props => {
                    switch (props.color) {
                        case "pink":
                            return CalendarConstants.colors.pink_apple;
                        case "blue":
                            return CalendarConstants.colors.blue_apple;
                        case "purple":
                            return CalendarConstants.colors.purple_apple;
                    }
                }};
            }
            & .calendar_color_setting {
                position: absolute;
                top: 5px;
                right: -30px;
                width: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                & > img {
                    width: 100%;
                }
                & main {
                    position: absolute;
                    top: 30px;
                    left: 0;
                    width: 90px;
                    z-index: 20;
                    overflow-x: hidden;
                    overflow-y: auto;
                    ::-webkit-scrollbar {
                        display: none;
                    }
                    background-color: white;
                    border: 1px solid
                        ${props => {
                            switch (props.color) {
                                case 'pink':
                                    return CalendarConstants.colors.pink_border;
                                case 'blue':
                                    return CalendarConstants.colors.blue_border;
                                case 'purple':
                                    return CalendarConstants.colors
                                        .purple_border;
                            }
                        }};
                    border-radius: 8px;
                    & > div {
                        position: relative;
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        text-align: start;
                        border-bottom: 1px solid rgb(245, 245, 245);
                        padding-left: 16px;
                        & > div:first-child{
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 0;
                            width: 2.5px;
                            height: 16px;
                            border-radius: 1.25px;
                            margin: 0 8px;
                        }
                        & > .point_color_setting_0{background-color: ${CalendarConstants.colors.pink_apple};}
                        & > .point_color_setting_1{background-color: ${CalendarConstants.colors.blue_apple};}
                        & > .point_color_setting_2{background-color: ${CalendarConstants.colors.purple_apple};}
                        & > .point_color_setting_3{background-color: ${CalendarConstants.colors.pink_apple};}
                        & > .point_color_setting_4{background-color: ${CalendarConstants.colors.pink_apple};}
                    }
                }
            }
        }
        & section:last-child {
            display: flex;
            justify-content: center;
            & sub {
                background-color: rgb(245, 245, 245);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                & img {
                    width: 6.4px;
                }
            }
            & div {
                margin: 0 40px;
            }
        }
    }
    & main {
        display: flex;
        flex-direction: column;
        & section:first-child {
            padding: 0 28px;
            height: 44px;
            background-color: ${props => {
                switch (props.color) {
                    case 'pink':
                        return CalendarConstants.colors.pink_background;
                    case 'blue':
                        return CalendarConstants.colors.blue_background;
                    case 'purple':
                        return CalendarConstants.colors.purple_background;
                }
            }};
            border-top: 1px solid
                ${props => {
                    switch (props.color) {
                        case 'pink':
                            return CalendarConstants.colors.pink_border;
                        case 'blue':
                            return CalendarConstants.colors.blue_border;
                        case 'purple':
                            return CalendarConstants.colors.purple_border;
                    }
                }};
            border-bottom: 1px solid
                ${props => {
                    switch (props.color) {
                        case 'pink':
                            return CalendarConstants.colors.pink_border;
                        case 'blue':
                            return CalendarConstants.colors.blue_border;
                        case 'purple':
                            return CalendarConstants.colors.purple_border;
                    }
                }};
            display: flex;
            align-items: center;
            & > div {
                width: calc(100% / 7);
            }
        }
        & section:last-child {
            padding: 5px 28px 20px;
            display: flex;
            flex-flow: row wrap;
            & > div {
                position: relative;
                width: calc(100% / 7);
                height: 44px;
                & img {
                    width: 28px;
                    position: absolute;
                    top: 2px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                & div {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            & > div.other {
                color: ${CalendarConstants.colors.others};
                & > img{
                    display: none;
                }
            }
        }
    }
`;