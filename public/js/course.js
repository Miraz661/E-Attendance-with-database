const upDate = document.querySelector(".date");
const reset = document.querySelectorAll(".reset");
const home = document.querySelector(".homeNav");
const fullDetails = document.querySelectorAll(".fullDetails");
const body = document.querySelector("#body");
const addSt = document.querySelector(".addSt");
const addStudent = document.querySelector("#addStudents");
const titleSub = document.querySelector(".titleSub");
const titleHead = document.querySelector(".titleHead");
const cancelAddB = document.querySelector(".addStudentCancel");
const createCourse = document.querySelector("#addStudentBtn");
const batch = document.querySelector("#batch");
const stId = document.querySelector("#addStudentId");
const stName = document.querySelector("#addStudentName");
const table = document.querySelector("#table");
const notify = document.querySelector(".notification");
const delStud = document.querySelectorAll(".delSt");
const delBtn = document.querySelector("#delCon");
const delCancel = document.querySelector(".delCancel");
const ConfirmDel = document.querySelector(".delConf");






const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const fullDate = year + "-" + month + "-" + day;


window.onload = () => {
    upDate.value = fullDate;
    titleSub.innerText = localStorage.getItem("courseCode");
    titleHead.innerText = localStorage.getItem("batch") + "-" + localStorage.getItem("section");
}

reset.forEach(element => {
    element.addEventListener("click", () => {
        self.location = 'course.html';
    })
})

home.addEventListener("click", () => {
    self.location = '../../index.html';
})

fullDetails.forEach(element => {
    element.addEventListener("click", () => {
        self.location = 'details.html';
    })
})

setInterval(loadPage,3000);

function loadPage() {
    body.classList.add("body");
}

addSt.addEventListener("click", () => {
    addStudent.classList.toggle("active");
})


cancelAddB.addEventListener("click", () => {
    addStudent.classList.remove("active");
})




createCourse.addEventListener("click", () => {
    if (batch.value != '' && stId.value != '' && stName.value != '') {
        let batchNum = document.createElement("td");
        batchNum.innerText = batch.value;
        let id = document.createElement("td");
        id.innerText = stId.value;
        id.classList.add("fullDetails");
        let name = document.createElement("td");
        name.innerText = stName.value;
        let pre = document.createElement("input");
        pre.setAttribute("type", "radio");
        pre.setAttribute("name", stId.value);
        pre.classList.add("present");
        let present = document.createElement("td");
        present.appendChild(pre);
        let abs = document.createElement("input");
        abs.setAttribute("type", "radio");
        abs.setAttribute("name", stId.value);
        abs.classList.add("absent");
        let absent = document.createElement("td");
        absent.appendChild(abs);
        let del = document.createElement("i");
        del.classList.add("fa-trash", "fa-solid");
        let delSt = document.createElement("td");
        delSt.classList.add("delSt");
        delSt.appendChild(del);
        let strow = document.createElement("tr");
        strow.appendChild(batchNum);
        strow.appendChild(id);
        strow.appendChild(name);
        strow.appendChild(present);
        strow.appendChild(absent);
        strow.appendChild(delSt);
        table.appendChild(strow);
        addStudent.classList.remove("active");
        notify.classList.add("active");
        notify.innerText = stName.value + " added successfully...";
        setTimeout(() => {
            notify.classList.remove("active");
        }, 4000);
    } else {
        notify.innerText = "Something wrong!, Please try again";
        notify.classList.add("active");
        notify.classList.add("wrong");
        setTimeout(() => {
            notify.classList.remove("active");
            notify.classList.remove("wrong");
        }, 4000);
    }
})





delCancel.addEventListener("click", () => {
    delBtn.classList.remove("active");
})

let delEle;

delStud.forEach(element => {
    element.addEventListener("click", () => {
        delBtn.classList.add("active");
        delEle = element.parentElement;
    })
});
ConfirmDel.addEventListener("click", () => {
    delEle.remove();
    notify.innerText = "Student delete successfully...";
    notify.classList.add("active");
    notify.classList.add("wrong");
    setTimeout(() => {
        notify.classList.remove("active");
        notify.classList.remove("wrong");
    }, 4000);
    delBtn.classList.remove("active");
})