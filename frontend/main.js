window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApi = '';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApi).then(respose => {
        return respose.json()
    }).then(respose => {
        console.log("Website called function API")
        count = respose.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}