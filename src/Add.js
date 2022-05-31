import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.

import { 
    // createAdd,
     addAddFB } from "./redux/modules/add";




const Add = (props) => {

    const dispatch = useDispatch();
    let history = useHistory();

    const word = React.useRef(null);
    const explain = React.useRef(null);
    const example = React.useRef(null);

    const addAddList = () => {
    //리덕스
    //   dispatch(createAdd(word.current.value));
    //   dispatch(createAdd(explan.current.value));
    //   dispatch(createAdd(example.current.value));

      dispatch(addAddFB({ 
        word: word.current.value,
        explan: explain.current.value,
        example: example.current.value
    }));

      console.log(addAddList)
      
    };



    return (
        <>
        <Title>단어 추가하기</Title>
        <Card>
            <Word>
            <p>단어</p>
            <input type="text" ref={word}></input>
            </Word>
        </Card>
        <Card>
            <Word>
            <p>설명</p>
            <input type="text" ref={explain}></input>
            </Word>
        </Card>
        <Card>
            <Word>
            <p>예시</p>
            <input type="text" ref={example}></input>
            </Word>
        </Card>
        
        <Button onClick={() => {
            dispatch(addAddList);
            history.push("/");
        }}>추가하기</Button>
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

const Button = styled.div`
background : blue;
color: white;
text-align: center;
width: 230px;
height: 35px;
margin : auto;
padding-top: 10px;
`

export default Add;