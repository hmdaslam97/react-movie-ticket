

export const incrementer = () => {
    return {
        type: "increment",
        payload: 50,
    }
}

export const onPayment = () => {
    return {
        type: "paymentDone",
    }
}
