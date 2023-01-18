export type InitialProps = {
  openNav: boolean;
  createBoard: boolean;
  newTask:boolean
  boardData: [];
  change:boolean;
  boardEdit:[],
  boardEditOpen:boolean
  boardDeleteOpen:boolean
  cardModelOpen:boolean
  cardShowData:[]
  cardEditModel:boolean
  cardDeleteOpen:boolean
};

const initialState: InitialProps = {
  openNav: true,
  createBoard: false,
  newTask:false,
  boardData: [],
  change:false,
  boardEdit:[],
  boardEditOpen:false,
  boardDeleteOpen:false,
  cardModelOpen:false,
  cardShowData:[],
  cardEditModel:false,
  cardDeleteOpen:false
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
      case "BOARD_EDIT":
      return {
        ...state,
       
        boardEditOpen:action.payload.boardEditOpen
      };
      case "BOARD_DELETE":
      return {
        ...state,
       
        boardDeleteOpen:action.payload.boardDeleteOpen
      };
      case "CARD_DELETE":
      return {
        ...state,
       
        cardDeleteOpen:action.payload.cardDeleteOpen
      };
      case "CARD_mODEL_OPEN":
      return {
        ...state,
       
        cardModelOpen:action.payload.cardModelOpen
      };
      case "CARD_SHOW_DATA":
      return {
        ...state,
       
        cardShowData:action.payload.cardShowData
      };
      case "CARD_EDIT_MODEL":
      return {
        ...state,
       
        cardEditModel:action.payload.cardEditModel
      };


    default:
      return state;
  }
};
export default rootReducer;
