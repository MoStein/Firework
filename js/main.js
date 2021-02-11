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
    function handleCanvasClick(_event) {
        let tempPosition = new silvester.Vector(_event.offsetX, _event.offsetY);
        createFirework(tempPosition);
    }
    async function sendFireWork(_event) {
        console.log("submit fire work");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        // savedArray.push();
        alert(responseText);
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