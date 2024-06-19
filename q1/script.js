(async function(){
    const data = await fetch('./data.json');
    const res = await data.json();

    let employees = res;
    let selectedEmployeeId = employees[0].id; 
    let selectedEmployee = employees[0];

    const empList = document.querySelector(".employees--names-list");
    const empInfo = document.querySelector(".employees--single-list");

    //add emp logic 
    
    //select emp logic
    empList.addEventListener("click",(e)=>{
        if(e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id){
            selectedEmployeeId = e.target.id;
            renderEmp();
            renderSingleEmp();
        }
    })

    const renderEmp=()=>{
        empList.innerHTML = "";
        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("employees--names--item");

            if(parseInt(selectedEmployeeId,10)===emp.id){
                employee.classList.add("selected");
                selectedEmployee = emp;
                
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} <i class="employeeDelete">❌</i>` ;
            empList.append(employee);
        });
    }

    //render single emp
    const renderSingleEmp=()=>{

        empInfo.innerHTML=`
            <img src="${selectedEmployee.imageUrl}"/>
            <h3>
                ${selectedEmployee.firstName}, ${selectedEmployee.age}
            </h3>
            <span>Address: ${selectedEmployee.address}</span>
            <span>Contact: ${selectedEmployee.contactNumber}</span>`
    }

    if(selectedEmployee) renderSingleEmp();
    renderEmp();
})();