

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
