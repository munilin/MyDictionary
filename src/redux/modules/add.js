// add.js
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

// Actions
const LOAD = 'add/LOAD';
const CREATE = 'add/CREATE';

// Action Creators
export const loadAdd = (add_list) => {
    return { type: LOAD, add_list };
};

export const createAdd = (add) => {
    return { type: CREATE, add };
};

// 초기 상태값을 만들어줍니다.
const initialState = { list: [] };

//middlewares
export const loadAddFB = () => {
    return async function (dispatch) {
        //비동기 통신이여서 async 붙이기
        const add_data = await getDocs(collection(db, "mydictionary"));
        // firebase에서 받아 올때까지 기다려주고          db에서 "만든 폴더"
        let add_list = [];
        //받은 정보 넣어줄 배열 만들어주고
        add_data.forEach((b) => {
            //forEach로 데이터 가져옴
            add_list.push({ id: b.id, ...b.data() });
            //가져온거 넣어주기, id도 같이 나중에 수정하고 할 때 필요!
        });
        console.log(add_list);
        dispatch(loadAdd(add_list));
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "add/LOAD":
            return { list: action.add_list };

        case "add/CREATE":
            const new_add_list = [...state.list, action.add];
            return { list: new_add_list };

        default: return state;
    }
}
