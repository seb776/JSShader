

// TODO need to look into it
// glm.vec2.prototype = funtion() { return glm.vec2(parseFloat(this.x.toString())); }

Number.prototype.sub = function (rhs) {
    if (rhs.elements == undefined)
        return parseFloat(this.toString()) - rhs;
    if (rhs.elements.length == 4) { // vec4
        return glm.vec4(parseFloat(this.toString())).sub(rhs);
    }
    else if (rhs.elements.length == 3) {// vec3
        return glm.vec3(parseFloat(this.toString())).sub(rhs);
    }
    else if (rhs.elements.length == 2) { // vec2
        return glm.vec2(parseFloat(this.toString())).sub(rhs);
    }
    console.logerror("BLABLABLA");
}
Number.prototype.add = function (rhs) {
    if (rhs.elements == undefined)
        return parseFloat(this.toString()) + rhs;

    if (rhs.elements.length == 4) { // vec4
        return glm.vec4(parseFloat(this.toString())).add(rhs);
    }
    else if (rhs.elements.length == 3) {// vec3
        return glm.vec3(parseFloat(this.toString())).add(rhs);
    }
    else if (rhs.elements.length == 2) { // vec2
        return glm.vec2(parseFloat(this.toString())).add(rhs);
    }
    console.logerror("BLABLABLA");
}
Number.prototype.mul = function (rhs) {
    if (rhs.elements == undefined)
        return parseFloat(this.toString()) * rhs;
    if (rhs.elements.length == 4) { // vec4
        return glm.vec4(parseFloat(this.toString())).mul(rhs);
    }
    else if (rhs.elements.length == 3) {// vec3
        return glm.vec3(parseFloat(this.toString())).mul(rhs);
    }
    else if (rhs.elements.length == 2) { // vec2
        return glm.vec2(parseFloat(this.toString())).mul(rhs);
    }
    console.logerror("BLABLABLA");
}
Number.prototype.div = function (rhs) {
    if (rhs.elements == undefined)
        return parseFloat(this.toString()) / rhs;
    if (rhs.elements.length == 4) { // vec4
        return glm.vec4(parseFloat(this.toString())).div(rhs);
    }
    else if (rhs.elements.length == 3) {// vec3
        return glm.vec3(parseFloat(this.toString())).div(rhs);
    }
    else if (rhs.elements.length == 2) { // vec2
        return glm.vec2(parseFloat(this.toString())).div(rhs);
    }
    console.logerror("BLABLABLA");
}

let iResolution = glm.vec2(100., 100.);
let iTime = 0.0;
let iChannel0 = 0;

function texture(tex, uv) {
    return 0.0;
}

function float(v) {
    if (typeof v == 'boolean')
        return (v ? 1. : 0.);
    return v;
}

// class vec2 {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sub(rhs) {
//         if (rhs.hasOwnProperty('w')) { // vec4
//             throw "INVALID";
//         } 
//         else if (rhs.hasOwnProperty('z')) {// vec3
//             throw "INVALID";
//         }
//         else if (rhs.hasOwnProperty('y')) { // vec2
//             return new vec2(this.x - rhs.x, this.y-rhs.y);
//         }
//         else if (typeof rhs == 'number') { // float
//             return new vec2(this.x - rhs, this.y-rhs);
//         }
//     }
// }

// class vec3 {
//     constructor(x, y, z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
// }

// class vec4 {
//     constructor(x, y, z, w) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//         this.w = w;
//     }
// }

