// add.js
import {firestore} from "../../firebase";

// Actions
const LOAD = 'add/LOAD';
const CREATE = 'add/CREATE';

// Action Creators
export const loadAdd = (add) => {
    return { type: LOAD, add };
};

export const createAdd = (add) => {
    return { type: CREATE, add };
};

// 초기 상태값을 만들어줍니다.
const initialState = {
    word: ["ㅎ1ㅎ1", "ㅂ2ㅂ2"],
    explan: ["히히를 변형한 단어. 숫자1을 'ㅣ' 로 쓴다", "배고픈데"],
    example: ["저 친구가 초콜릿을 줬어. ㅎ1ㅎ1","허허허ㅓ"]

};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "add/LOAD":
            return state;

        case "add/CREATE":
            const new_add_list = [...state.list, action.add];
            return { list: new_add_list };

        default: return state;
    }
}
