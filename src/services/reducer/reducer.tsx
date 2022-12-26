export type InitialProps = {
  openNav: boolean;
  createBoard: boolean;
  boardData: [];
};

const initialState: InitialProps = {
  openNav: true,
  createBoard: false,
  boardData: [],
};

const rootReducer = (state: InitialProps = initialState, action: any) => {
  switch (action.type) {
    case "NAV_OPEN":
      return {
        ...state,

        openNav: action.payload.openNav,
      };
    case "CREATEBOARD_OPEN":
      return {
        ...state,

        createBoard: action.payload.createBoard,
      };
      case "BOARD_DATA":
      return {
        ...state,
        boardData: action.payload.boardData,
      };

    default:
      return state;
  }
};
export default rootReducer;
