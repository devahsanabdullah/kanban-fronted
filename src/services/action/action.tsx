

export const openNavbar=(prop:boolean)=>{
    
    return {
        type:"NAV_OPEN",
        payload:{
           openNav:prop
           
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
export const boardData=(prop:any)=>{
    
    return {
        type:"BOARD_DATA",
        payload:{
            boardData:prop
           
        }
    }
}
