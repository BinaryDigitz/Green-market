
function failFn(  message, statusCode=400,){

    return { success:false, statusCode, message}
}
function successFn(message, statusCode=200, user=null){
    return { success: true, statusCode, message, user}
}

export { failFn, successFn}