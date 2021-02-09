var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var silvester;
(function (silvester) {
    console.log("main here, how're you doing?");
    let form;
    let url = "https://ikaja.herokuapp.com/";
    window.addEventListener("load", handleLoad);
    let canvas;
    let fireworks = [];
    // let savedArray: FormData [] = [];
    let fps = 100;
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
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
            // generateContent(saved[]);
        });
    }
    function handleCanvasClick(_event) {
        let tempPosition = new silvester.Vector(_event.offsetX, _event.offsetY);
        createFirework(tempPosition);
    }
    function sendFireWork(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("submit fire work");
            let formData = new FormData(form);
            let query = new URLSearchParams(formData);
            let response = yield fetch(url + "?" + query.toString());
            let responseText = yield response.text();
            // savedArray.push();
            alert(responseText);
        });
    }
    silvester.sendFireWork = sendFireWork;
    function createFirework(tempPosition) {
        console.log("create firework");
        let sound = document.querySelector("audio");
        sound.play();
        let typeTarget = document.getElementById("type");
        let typeValue = typeTarget.value;
        let colorTarget = document.getElementById("colour");
        let colorValue = colorTarget.value;
        let radiusTarget = document.getElementById("size");
        let radiusValue = radiusTarget.value;
        let amountTarget = document.getElementById("amount");
        let amountValue = amountTarget.value;
        let particleTarget = document.getElementById("pSize");
        let particleValue = particleTarget.value;
        let lifeTimeTarget = document.getElementById("lifetime");
        let lifeTimeValue = lifeTimeTarget.value;
        let firework = new silvester.Firework(tempPosition, typeValue, colorValue, radiusValue, amountValue, particleValue, lifeTimeValue * fps);
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
})(silvester || (silvester = {}));
//# sourceMappingURL=main.js.map