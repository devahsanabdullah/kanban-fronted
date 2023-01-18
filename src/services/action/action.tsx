

export const openNavbar=(prop:boolean)=>{
    
    return {
        type:"NAV_OPEN",
        payload:{
           openNav:prop
           
        }
    }
}
export const reload=(prop:boolean)=>{
    
    return {
        type:"CHANGE",
        payload:{
          change:prop
           
        }
    }
}
export const openCreateBoard=(prop:boolean)=>{
    
    return {
        type:"CREATEBOARD_OPEN",
        payload:{
            createBoard:prop
        }
    }
}
export const openNewTask=(prop:boolean)=>{
    
    return {
        type:"NEWTASK_OPEN",
        payload:{
            newTask:prop
        }
    }
}
export const allboardData=(prop:any)=>{
    
    return {
        type:"BOARD_DATA",
        payload:{
            boardData:prop
           
        }
    }
}

export const allboardEdit=(prop:any)=>{
    
    return {
        type:"BOARD_EDIT",
        payload:{
            boardEditOpen:prop,
            
           
        }
    }
}
export const cardModelFun=(prop:any)=>{
    
    return {
        type:"CARD_mODEL_OPEN",
        payload:{
            cardModelOpen:prop,
            
           
        }
    }
}
export const OneCardShowData=(prop:any)=>{
    
    return {
        type:"CARD_SHOW_DATA",
        payload:{
            cardShowData:prop,
            
           
        }
    }
}
export const cardEditModelOpen=(prop:boolean)=>{
    
    return {
        type:"CARD_EDIT_MODEL",
        payload:{
            cardEditModel:prop,
            
           
        }
    }
}
export const boardDelete=(prop:any)=>{
    
    return {
        type:"BOARD_DELETE",
        payload:{
            boardDeleteOpen:prop,
            
           
        }
    }
}

export const CardDelete=(prop:boolean)=>{
    
    return {
        type:"CARD_DELETE",
        payload:{
            cardDeleteOpen:prop,
            
           
        }
    }
}