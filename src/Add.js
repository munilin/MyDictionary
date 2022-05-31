import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.

import { createAdd } from "./redux/modules/add";



const Add = (props) => {

    const text = React.useRef(null);
    const dispatch = useDispatch();
    let history = useHistory();

  
    const addAddList = () => {
      // 스프레드 문법! 기억하고 계신가요? :)
      // 원본 배열 list에 새로운 요소를 추가해주었습니다.
      // 여긴 이제 주석처리!
      // setList([...list, text.current.value]);
  
      dispatch(createAdd(text.current.value));
    };

    return (
        <>
        <Title>단어 추가하기</Title>
        <Card>
            <Word>
            <p>단어</p>
            <input type="text" ref={text}></input>
            </Word>
        </Card>
        <Card>
            <Word>
            <p>설명</p>
            <input type="text" ref={text}></input>
            </Word>
        </Card>
        <Card>
            <Word>
            <p>예시</p>
            <input type="text" ref={text}></input>
            </Word>
        </Card>
        
        <button onClick={() => {
            dispatch(addAddList);
            history.push("/");
        }}>추가하기</button>
        </>

    )
}

const Title = styled.h5`
text-align: left;
margin-top: 5px; 
`;
const Card = styled.div`
max-width: 250px;
max-height: 5vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
`
const Word = styled.h5`
display: column;
margin-top: 0px;
padding-top: 0px;
& p {
    font-size: 1px;
    text-decoration: underline;
}
`
export default Add;