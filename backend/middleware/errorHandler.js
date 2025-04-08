
function errorHandler (error, req, res, next){

 const statusCode = error.statusCode || 500
 const message = error.message || 'Internal server error'
 
 console.log(statusCode, message)
 res.json({ success: false, statusCode, message})
}

export default errorHandler