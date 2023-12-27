document.addEventListener("DOMContentLoaded",()=>{
    window.onload = () => {
        if (document.referrer == '' && localStorage.getItem("isLogin") != "true") {
            self.location = 'public/html/login.html';
        }
    }
    
    
    
    
    const body = document.querySelector("#body");
    const acc = document.querySelector(".account");
    const logout = document.querySelector(".logout");
    const main = document.querySelector(".main");
    const backImg = ['../images/background1.jpg', '../images/background2.jpg', '../images/background3.jpg', '../images/background4.jpg', '../images/background5.jpg', '../images/background6.jpg', '../images/background7.jpg', '../images/background8.jpg', '../images/background9.jpg', '../images/background10.jpg'];
    const addBatch = document.querySelector(".addBatch");
    const addBatchPage = document.querySelector("#addBatches");
    const cancelAddB = document.querySelector(".addBatchCancel");
    const createBatch = document.querySelector("#addBatchBtn");
    const batchNo = document.querySelector("#number");
    const section = document.querySelector("#addBatchSec");
    const batchBox = document.querySelector(".batchCon");
    const delTitleBot = document.querySelector(".delTitleBot");
    const delBtn = document.querySelector("#delCon");
    const batchDel = document.querySelectorAll(".batchOpt");
    const delCancel = document.querySelector(".delCancel");
    const ConfirmDel = document.querySelector(".delConf");
    const batchInf = document.querySelectorAll(".batInf");
    const notify = document.querySelector(".notification");
    
    acc.addEventListener("click", () => {
        logout.classList.toggle("active");
    })
    main.addEventListener("click", () => {
        logout.classList.remove("active");
    })
    logout.addEventListener("click", () => {
        self.location = 'public/html/login.html';
        localStorage.removeItem("isLogin");
    })
    
    addBatch.addEventListener("click", () => {
        addBatchPage.classList.toggle("active");
    })
    cancelAddB.addEventListener("click", () => {
        addBatchPage.classList.remove("active");
    })
    
    let batchCount = 1;
    
    createBatch.addEventListener("click", () => {
        if (batchNo.value != '' && section.value != '') {
            batchCount++;
            let batN = document.createElement("div");
            batN.classList.add("batchNo");
            batN.innerText = batchNo.value;
            let batS = document.createElement("div");
            batS.classList.add("section");
            batS.innerText = "Section - " + section.value;
            let del = document.createElement("div");
            del.classList.add("batchOpt");
            let icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-trash");
            del.appendChild(icon);
            let mainbatch = document.createElement("div");
            mainbatch.classList.add("batch", "batch2");
            mainbatch.appendChild(batN);
            mainbatch.appendChild(batS);
            mainbatch.appendChild(del);
            batchBox.insertBefore(mainbatch, batchBox.firstChild);
            addBatchPage.classList.remove("active");
            let x = Math.round(Math.random() * 9);
            mainbatch.style.backgroundImage = 'url(' + backImg[x] + ')';
    
            notify.innerText = "Batch " + batchNo.value + " added successfully...";
            notify.classList.add("active");
            setTimeout(() => {
                notify.classList.remove("active");
            }, 4000);
    
            batchNo.value = "";
            section.value = "";
        } else {
            notify.innerText = "Please complete the form...";
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
        element.addEventListener("click", () => {
            delBtn.classList.add("active");
            delEle = element.parentElement;
        })
    });
    
    delCancel.addEventListener("click", () => {
        delBtn.classList.remove("active");
    })
    
    ConfirmDel.addEventListener("click", () => {
        delEle.remove();
        notify.innerText = "Batch delete successfully...";
        notify.classList.add("active");
        notify.classList.add("wrong");
        setTimeout(() => {
            notify.classList.remove("active");
            notify.classList.remove("wrong");
        }, 4000);
        delBtn.classList.remove("active");
    })
    
    
    document.addEventListener("DOMContentLoaded", () => {
        batches.forEach(element => {
            let x = Math.round(Math.random() * 9);
            element.style.backgroundImage = 'url(' + backImg[x] + ')';
        })
    })
    
    
    
    
    setInterval(loadPage, 3000);
    
    function loadPage() {
        body.classList.add("body");
    }
    
    
    
    // Send login data to the server
    
        const user = localStorage.getItem('user');
        fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
    })
        .then(response => response.json())
        .then((data) => {
            data.map(value => {
                let batch1 = document.createElement("a");
                batch1.href = 'public/html/batch.html';
                batch1.classList.add("batch", "batch"+`${value.id}`);
                let batch2 = document.createElement("div");
                batch2.classList.add("batInf");
                let batchNo = document.createElement("div");
                batchNo.classList.add("batchNo");
                batchNo.innerText = `${value.batchNo}`;
                let section = document.createElement("div");
                section.classList.add("section");
                section.innerText = "Section - " + ` ${value.section}`;
                batch2.appendChild(batchNo);
                batch2.appendChild(section);
                let del = document.createElement("div");
                del.classList.add("batchOpt");
                let icon = document.createElement("i");
                icon.classList.add("fa-solid", "fa-trash");
                del.appendChild(icon);
                batch1.appendChild(batch2);
                batch1.appendChild(del);
                batchBox.appendChild(batch1);
                batch1.style.backgroundImage = 'url('+`${value.bgImg}`+')';
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
})