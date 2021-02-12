"use strict";
var silvester;
(function (silvester) {
    console.log("main here, how're you doing?");
    let form;
    let url = "https://evion.herokuapp.com/";
    // let url: string = "http://localhost:5005";
    window.addEventListener("load", handleLoad);
    let canvas;
    let fireworks = [];
    // let savedArray: FormData [] = [];
    let fps = 100;
    //Load
    async function handleLoad(_event) {
        console.log("Load");
        form = document.querySelector("form");
        canvas = document.querySelector("canvas");
        silvester.crc2 = canvas.getContext("2d");
        let btnSubmit = document.getElementById("submit");
        canvas.addEventListener("click", handleCanvasClick);
        btnSubmit.addEventListener("click", sendFireWork);
        silvester.crc2.fillStyle = "black";
        silvester.crc2.fillRect(0, 0, canvas.width, canvas.height);
        silvester.crc2.fill;
        window.setInterval(update, 1000 / fps);
    }
    //Canvas
    function handleCanvasClick(_event) {
        let tempPosition = new silvester.Vector(_event.offsetX, _event.offsetY);
        createFirework(tempPosition);
    }
    function createFirework(tempPosition) {
        console.log("create firework");
        let sound = document.querySelector("audio");
        sound.play();
        let typeTarget = document.getElementById("type");
        let typeValue = typeTarget.value;
        let colorTarget = document.getElementById("colour");
        let colorValue = colorTarget.value;
        let speedTarget = document.getElementById("speed");
        let speedValue = speedTarget.value;
        let amountTarget = document.getElementById("amount");
        let amountValue = amountTarget.value;
        let particleTarget = document.getElementById("pSize");
        let particleValue = particleTarget.value;
        let lifeTimeTarget = document.getElementById("lifetime");
        let lifeTimeValue = lifeTimeTarget.value;
        let firework = new silvester.Firework(tempPosition, typeValue, colorValue, speedValue, amountValue, particleValue, lifeTimeValue * fps);
        fireworks.push(firework);
    }
    function update() {
        silvester.crc2.globalAlpha = 0.05;
        silvester.crc2.fillStyle = "black";
        silvester.crc2.fillRect(0, 0, canvas.width, canvas.height);
        silvester.crc2.fill;
        silvester.crc2.globalAlpha = 1;
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].draw();
            fireworks[i].update();
            if (!fireworks[i].isAlive()) {
                fireworks.splice(i, 1);
            }
        }
    }
    //Server & Database
    async function sendFireWork(_event) {
        console.log("submit fire work");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    silvester.sendFireWork = sendFireWork;
    // async function retrieveFireworks(): Promise<void> {
    //     let response : Response = await fetch(url + "?" + "command=retrieve");
    //     let responseText : string = await response.text();
    //     savedArray.push(responseText.replace(/<br>/g, " "));
    // }
    // async function getSelect(){
    //     console.log(savedArray.length);
    //     let select = <HTMLSelectElement>document.getElementById("save");
    //     for (let i: number = 0; i < savedArray.length; i++){
    //         let options = savedArray[i];
    //         let element = document.createElement("option");
    //         element.textContent = options.name;
    //         select.appendChild(element);
    //         element.addEventListener("click", recreateFirework);
    //     } 
    // }
    // function recreateFirework(_event: MouseEvent){
    //     // let g = <HTMLSelectElement>document.getElementById("saved");
    //     for (let i: number = 0;i< savedArray.length; i++){
    //         let g = savedArray[i];
    //         if (g.click){
    //         let typeTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("type");
    //         typeTarget.value = g.fireworktype;
    //         let colorTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("colour");
    //         colorTarget.value = g.firworkcolor;
    //         let speedTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("speed");
    //         speedTarget.value = g.fireworkspeed;
    //         let amountTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
    //         amountTarget = g.fireworkamount;
    //         let particleTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("pSize");
    //         particleTarget = g.fireworkparticle;
    //         let lifeTimeTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("lifetime");
    //         lifeTimeTarget = g.fireworklifetime;
    //         }
    //         else {
    //             return;
    //         }
    //     }
    // }
})(silvester || (silvester = {}));
//# sourceMappingURL=main.js.map