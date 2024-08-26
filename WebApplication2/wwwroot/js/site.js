// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


//class Point {
//    constructor(x, y) {
//        this.x = x;
//        this.y = y;
//    }
//}

//function rotate(point, pointOrigin, angle) {
//    let x2 = x - ox;
//    let y2 = y - oy;
//    let sina = Math.sin(angle);
//    let cosa = Math.cos(angle);
//    let xp = x2 * cosa - y2 * sina + ox;
//    let yp = x2 * sina + y2 * cosa + oy;
//    return [xp, yp];
//}

//let bgDiv = document.getElementsByClassName("main-bg");

//class Star {
//    constructor(pos, radius, speedx, speedy) {
//        this.rectPos = pos;
//        this.originalPos = pos;
//        this.pos = pos;
//        this.radius = radius;
//        this.diameter = radius * 2;
//        this.speedx = speedx;
//        this.speedy = speedy;

//        this.elm = document.createElement("div");
//        this.elm.style = `top: 0px;left:0px;width: ${this.diameter}px;height: ${this.diameter}px;background: red;-webkit-border-radius: ${radius}px;-moz-border-radius: ${radius}px; border-radius: ${radius}px;`

//        bgDiv.innerHTML = "hi bg";
//    }

//    move(dt) {
//        this.originalPos.x += this.speedx * dt;
//        this.originalPos.y += this.speedy * dt;

//        let dx = this.originalPos.x - this.pos.x;
//        let dy = this.originalPos.y - this.pos.y;

//        this.pos.x += dx * dt;
//        this.pos.x += dy * dt;

//        this.rectPos.x = this.pos.x;
//        this.rectPos.y = this.pos.y;
//    }
//}

//class BG {
//    constructor() {

//    }

//    run() {
//        let oldF = 0;
//        let newF = Date.now();
//        let dt = 0;

//        let star = new Star(new Point(100, 100), 20, 1, 1);

//        let isRunning = true;
//        //while (isRunning) {
//        //    oldF = newF;
//        //    newF = Date.now();
//        //    dt = newF - oldF;
//        //}
//    }
//}

//bg = new BG();
//bg.run();

//function Edit(id) {
//    $.get()
//}
