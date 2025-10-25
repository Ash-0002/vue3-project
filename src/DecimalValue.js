import Api from './Api'
export default{
    getUnitsForQty(){
        const data = {
            requestFrom: "WEB",
            company_id: localStorage.getItem('companyId'),
            _userId: localStorage.getItem('customerId'),
            startLimit: 0,
            endLimit: 100

        };
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "token": localStorage.getItem('webAuthToken')
        };
       return Api.getUnitsByCompanyIdGo(data, headers)
        .then((response)=>{
            let responseData = response.data.data.list
            const unitsData = responseData.map((value) => ({
                decimalPlace: value.decimalPlaces,
                unitName: value.name
            }));
                return unitsData;
            })
        .catch((err)=>{
            return []
        })
    }
}