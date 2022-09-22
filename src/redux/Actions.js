export const Add = (amount) => {
    return {
        type: "ADD",
    payload: amount
    }
}
export const Delete = (amount) => {
    return {
        type: "DELETE",
    payload: amount
    }
}