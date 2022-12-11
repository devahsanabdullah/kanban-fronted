

export const openNavbar=(prop:boolean)=>{
    
    return {
        type:"NAV_OPEN",
        payload:{
           openNav:prop
           
        }
    }
}
