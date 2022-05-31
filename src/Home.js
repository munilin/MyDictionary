import React from "react";
import styled from "styled-components";
// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadAddFB } from "./redux/modules/add"

const Home = (props) => {
   
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        dispatch(loadAddFB());
      }, [dispatch]);

    const add_list = useSelector((state) => state.add.list);

    return (
        <>
            <Title>MY DICTIONARY</Title>
            <Word>
                {
                add_list.map((list, index) => {
                    return (
                        <Card
                            key={index}
                            onClick={() => {
                                history.push("/detail"+index);
                            }}
                        >
                           <p>단어</p> {list.word}
                           <p>예시</p> {list.explan}
                           <p>설명</p> {list.example}
                        </Card>
                    );
                })}
            </Word>

            <button onClick={() =>
                history.push("/add")}>+</button>
        </>
    )
}
const Title = styled.h5`
text-align: left;
margin-top: 5px; 
`
const Card = styled.div`
max-width: 250px;
max-height: 15vh;
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

export default Home;