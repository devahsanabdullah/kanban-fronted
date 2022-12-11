
export type InitialProps={
    email:string
    password:string

    openNav:boolean
    change:boolean
 
    totalAmount:Number
}

const initialState:InitialProps= {
        email:'',
        password:'',
        openNav:true,
        change:false,
      
        totalAmount:0
  }
  
  const rootReducer = (state:InitialProps = initialState, action:any) => {
    switch(action.type){
   
        case "VIEW_COMMENT":
            return {
                ...state,

                commentView:action.payload.commentView
            
            }
            case "NAV_OPEN":
                return {
                    ...state,
    
                     openNav:action.payload.openNav,
                    
                
                } 
                case "CHANGE_ITEM":
                return {
                    ...state,
    
                     change:action.payload.change,
                   
                
                }  
                case "BUYER_DATA":
                    return {
                        ...state,
        
                        buyerData:action.payload.buyerData,
                       
                    
                    }  
                    case "TOTAL_AMOUNT":
                    return {
                        ...state,
        
                        totalAmount:action.payload.totalAmount,
                       
                    
                    }  
               
             
        default:
            return state
    }
 }
 export default rootReducer;