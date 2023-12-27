document.querySelector(".homeNav").addEventListener("click", () => {
    self.location = "../../index.html";
})

const no = document.querySelector(".batNo");
const sec = document.querySelector(".secNo");

window.onload = () => {
    no.innerText = localStorage.getItem("batch");
    sec.innerText = localStorage.getItem("section");
    if (document.referrer == '') {
        if (localStorage.getItem("isLogin") == "true") {
            self.location = '../../index.html';
        } else {
            self.location = 'login.html';
        }
    }
}



const homeNav = document.querySelector(".homeNav");
const main = document.querySelector(".main");
const backImg = ['../images/background1.jpg','../images/background2.jpg','../images/background3.jpg','../images/background4.jpg','../images/background5.jpg','../images/background6.jpg','../images/background7.jpg','../images/background8.jpg','../images/background9.jpg','../images/background10.jpg'];
const batches = document.querySelectorAll(".batch");
const addBatch = document.querySelector(".addBatch");
const addBatchPage = document.querySelector("#addBatches");
const cancelAddB = document.querySelector(".addBatchCancel");
const createCourse = document.querySelector("#addCourseBtn");
const CourseCode = document.querySelector("#code");
const section = document.querySelector("#addBatchSec");
const batchBox = document.querySelector(".batchCon");
const delTitleBot = document.querySelector(".delTitleBot");
const delBtn = document.querySelector("#delCon");
const batchDel = document.querySelectorAll(".batchOpt");
const delCancel = document.querySelector(".delCancel");
const ConfirmDel = document.querySelector(".delConf");
const courseInfo = document.querySelectorAll(".courseInfo");
const body = document.querySelector("#body");
const notify = document.querySelector(".notification");




homeNav.addEventListener("click",()=>{
    logout.classList.toggle("active");
})

addBatch.addEventListener("click",()=>{
    addBatchPage.classList.toggle("active");
})
cancelAddB.addEventListener("click",()=>{
    addBatchPage.classList.remove("active");
})

createCourse.addEventListener("click",()=>{
    if(CourseCode.value != '' && section.value != ''){
        let batN = document.createElement("div");
        batN.classList.add("CourseCode");
        batN.innerText = CourseCode.value;
        let batS = document.createElement("div");
        batS.classList.add("section");
        batS.innerText = section.value;
        let courseInfo = document.createElement("div");
        courseInfo.classList.add("courseInfo");
        courseInfo.appendChild(batN);
        courseInfo.appendChild(batS);
        let del = document.createElement("div");
        del.classList.add("batchOpt");
        let icon = document.createElement("i");
        icon.classList.add("fa-solid","fa-trash");
        del.appendChild(icon);
        let mainbatch = document.createElement("div");
        mainbatch.classList.add("batch","batch2");
        mainbatch.appendChild(courseInfo);
        mainbatch.appendChild(del);
        batchBox.insertBefore(mainbatch,batchBox.firstChild);
        addBatchPage.classList.remove("active");
        let x = Math.round(Math.random()*9);
        mainbatch.style.backgroundImage = 'url('+backImg[x]+')';
        notify.innerText = "Course " + CourseCode.value + " added successfully...";
        notify.classList.add("active");
        setTimeout(() => {
            notify.classList.remove("active");
        }, 4000);
        CourseCode.value = "";
        section.value = "";
    }else{
        notify.innerText = "Please add all info...";
        notify.classList.add("active");
        notify.classList.add("wrong");
        setTimeout(() => {
            notify.classList.remove("active");
            notify.classList.remove("wrong");
        }, 4000);
    }
})

let delEle;

batchDel.forEach(element => {
    element.addEventListener("click",()=>{
        delBtn.classList.add("active");
        delEle = element.parentElement;
    })
});

delCancel.addEventListener("click",()=>{
    delBtn.classList.remove("active");
})

ConfirmDel.addEventListener("click",()=>{
    notify.innerText = "Course deleted successfully...";
    notify.classList.add("active");
    notify.classList.add("wrong");
    setTimeout(() => {
        notify.classList.remove("active");
        notify.classList.remove("wrong");
    }, 4000);
    delEle.remove();
    delBtn.classList.remove("active");
})


document.addEventListener("DOMContentLoaded",()=>{
    batches.forEach(element =>{
        let x = Math.round(Math.random()*9);
        element.style.backgroundImage = 'url('+backImg[x]+')';
    })
})

courseInfo.forEach(element =>{
    element.addEventListener("click",()=>{
        self.location = 'course.html';
        localStorage.setItem("courseCode",element.children[0].innerText);
    })
})

setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}