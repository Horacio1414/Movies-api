const increment = (n)=>{
    return {
        type: "INCREMENT",
        payload: n
    }
}

const decrement = (n)=>{
    return {
        type:"DECREMENT",
        payload:n
    }
}

module.exports = {increment,decrement}