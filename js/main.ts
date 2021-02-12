namespace silvester {
    
    console.log("main here, how're you doing?");
    export let crc2: CanvasRenderingContext2D;
    let form: HTMLFormElement;
    let url: string = "https://evion.herokuapp.com/";
    // let url: string = "http://localhost:5005";

    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;

    let fireworks: Firework [] = [];
    // let savedArray: FormData [] = [];
    let fps: number = 100;

    //Load
    async function handleLoad(_event: Event):Promise<void> {
        console.log("Load");

        form = <HTMLFormElement>document.querySelector("form");
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let btnSubmit: HTMLElement = <HTMLElement>document.getElementById("submit");

        canvas.addEventListener("click", handleCanvasClick);
        btnSubmit.addEventListener("click", sendFireWork);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill

        window.setInterval(update, 1000/fps);
    }
    //Canvas
    function handleCanvasClick(_event: MouseEvent): void {

        let tempPosition: Vector = new Vector(_event.offsetX, _event.offsetY);
        createFirework(tempPosition);

    }
    function createFirework (tempPosition: Vector){
        console.log("create firework");

        let sound = <HTMLAudioElement>document.querySelector("audio");
        sound.play();

        let typeTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("type");
        let typeValue: string = typeTarget.value;

        let colorTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("colour");
        let colorValue: string = colorTarget.value;

        let speedTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("speed");
        let speedValue: any = speedTarget.value; 

        let amountTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
        let amountValue: any = amountTarget.value;

        let particleTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("pSize");
        let particleValue: any = particleTarget.value;

        let lifeTimeTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("lifetime");
        let lifeTimeValue: any = lifeTimeTarget.value;
        
        let firework: Firework = new Firework(tempPosition, typeValue, colorValue, speedValue, amountValue, particleValue, lifeTimeValue*fps);
        fireworks.push(firework);
    }
    
    function update (){
        crc2.globalAlpha = 0.05;
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill
        crc2.globalAlpha = 1;
        

        for (let i: number = fireworks.length -1; i >= 0; i--){
            fireworks[i].draw();
            fireworks[i].update();
            if(!fireworks[i].isAlive()){
                fireworks.splice(i,1);
            }
        }
    }
    //Server & Database
    export async function sendFireWork(_event: MouseEvent):Promise<void> {
        console.log("submit fire work");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }
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
    //     let g = <HTMLSelectElement>document.getElementById("saved");
    //     for (let i: number = 0;len = g.savedArray.length; i++){

    //         let typeTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("type");
    //         typeTarget.value = savedArray[i].fireworktype;

    //         let colorTarget: HTMLSelectElement = <HTMLSelectElement>document.getElementById("colour");
    //         colorTarget.value = savedArray[i].firworkcolor;

    //         let speedTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("speed");
    //         speedTarget.value = savedArray[i].fireworkspeed;

    //         let amountTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
    //         amountTarget = savedArray[i].fireworkamount;

    //         let particleTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("pSize");
    //         particleTarget = savedArray[i].fireworkparticle;

    //         let lifeTimeTarget: HTMLInputElement = <HTMLInputElement>document.getElementById("lifetime");
    //         lifeTimeTarget = savedArray[i].fireworklifetime;
    //     }
        
        
    // }

}
