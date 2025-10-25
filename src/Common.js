export default{
    getStatusForActionFailed(status){
        if(status == 401){
            localStorage.clear();
            window.location.href = process.env.VUE_APP_WEB_URL;
        }
        else if(status == 400 || status == 500 || status == 503){
        }
        console.log('new common js file status code ',status)
        return status;
        // if(status == 400){
        //     alert('bad request in payload')
        // }
        
        
    },
    // getStatusForBadRequest(){
        
    // }
}
