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
    window.addEventListener("load", handleLoad);
    let canvas;
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Load");
            canvas = document.querySelector("canvas");
            silvester.crc2 = canvas.getContext("2d");
            let btnDone = document.getElementById("save");
            let btnSubmit = document.getElementById("submit");
            btnDone.addEventListener("click", createFireWork);
            btnSubmit.addEventListener("click", sendFireWork);
        });
    }
    function createFireWork(_event) {
        console.log("create fire work");
    }
    function sendFireWork(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("submit fire work");
        });
    }
})(silvester || (silvester = {}));
//# sourceMappingURL=main.js.map