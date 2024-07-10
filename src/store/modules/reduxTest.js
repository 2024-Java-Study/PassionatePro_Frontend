const REDUX_TEST = "reduxTest/REDUX_TEST";

export const test = (isClick) => ({ type: REDUX_TEST, isClick });

const init = {
  isClick: "초기 값",
};

export default function clickButton(state = init, action) {
  switch (init) {
    case true:
      return {
        ...state,
        info: "버튼이 눌렸습니다.",
      };
    case false:
      return {
        ...state,
        info: "버튼이 눌리지 않았습니다.",
      };
    default:
      return state;
  }
}
