import React from "react";
import styled from "styled-components";

// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = (props) => {

    let history = useHistory();
    //   console.log(props);
    //   const my_lists = props.list;
    // 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
    // 우리는 그 중, bucket 안에 들어있는 list를 가져옵니다.
    const my_words = useSelector((state) => state.add.word);
    const my_explans = useSelector((state) => state.add.explan);
    const my_examples = useSelector((state) => state.add.example);

    console.log(my_words)


    return (
        <>
            <Title>MY DICTIONARY</Title>
            <Card>
                <Word>
                    <p>단어</p>
                    <div>{my_words}
                    </div>
                    <p>설명</p>
                    <div>{my_explans}
                    </div>
                    <p>예시</p>
                    <div style={{ color: "blue" }}>
                        {my_examples}
                    </div>
                </Word>
                <button onClick={() =>
                    history.push("/add")}>추가하기</button>

            </Card>


        </>
    )
}
const Title = styled.h5`
text-align: left;
margin-top: 5px; 
`;
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