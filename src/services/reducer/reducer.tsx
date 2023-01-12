export type InitialProps = {
  openNav: boolean;
  createBoard: boolean;
  newTask:boolean
  boardData: [];
  change:boolean;
};

const initialState: InitialProps = {
  openNav: true,
  createBoard: false,
  newTask:false,
  boardData: [],
  change:false
};

const rootReducer = (state: InitialProps = initialState, action: any) => {
  switch (action.type) {
    case "NAV_OPEN":
      return {
        ...state,

        openNav: action.payload.openNav,
      };
      case "CHANGE":
      return {
        ...state,
        change: action.payload.change,
      };
    case "CREATEBOARD_OPEN":
      return {
        ...state,
        createBoard: action.payload.createBoard,
      };
      case "NEWTASK_OPEN":
      return {
        ...state,
        newTask: action.payload.newTask,
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
