export interface DateCountState {
    count: number;
    step: number;
    
}

export type CountAction = 
    | {type: 'inc' | 'dec'| "RESET"}
    | {type: "SET_COUNT"; newCount: number}
    | {type: "SET_STEP"; newStep: number}
    
  

export function dateCountReducer(
    state: DateCountState,
    action: CountAction
): DateCountState {
    console.log("state", state)
    console.log("action", action)

    switch (action.type){
        case "inc":
            return {...state, count: state.count + state.step}
        case "dec":
            return {...state, count: state.count - state.step}
        case "SET_COUNT":
            return {...state, count: action.newCount}
        case "SET_STEP":
            return {...state, step : action.newStep}
        case "RESET":
            return {...state,count: 0, step: 1}
        default:
            return state;
    }
}