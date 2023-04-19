glm.vec2(1,1);

// TODO need to look into it
// glm.vec2.prototype = funtion() { return glm.vec2(parseFloat(this.x.toString())); }

Number.prototype.sub = function(rhs) {
        if (rhs.hasOwnProperty('w')) { // vec4
            return glm.vec4(parseFloat(this.toString())).sub(rhs);
        } 
        else if (rhs.hasOwnProperty('z')) {// vec3
            return glm.vec3(parseFloat(this.toString())).sub(rhs);
        }
        else if (rhs.hasOwnProperty('y')) { // vec2
            return glm.vec2(parseFloat(this.toString())).sub(rhs);
        }
        return parseFloat(this.toString())-rhs;
}
Number.prototype.add = function(rhs) {
    if (rhs.hasOwnProperty('w')) { // vec4
        return glm.vec4(parseFloat(this.toString())).add(rhs);
    } 
    else if (rhs.hasOwnProperty('z')) {// vec3
        return glm.vec3(parseFloat(this.toString())).add(rhs);
    }
    else if (rhs.hasOwnProperty('y')) { // vec2
        return glm.vec2(parseFloat(this.toString())).add(rhs);
    }
    return parseFloat(this.toString())+rhs;
}
Number.prototype.mul = function(rhs) {
    console.log(rhs.w !== undefined); 
    if (rhs.w !== undefined) { // vec4
        return glm.vec4(parseFloat(this.toString())).mul(rhs);
    } 
    else if (rhs.z !== undefined) {// vec3
        return glm.vec3(parseFloat(this.toString())).mul(rhs);
    }
    else if (rhs.y !== undefined) { // vec2
        return glm.vec2(parseFloat(this.toString())).mul(rhs);
    }
    return parseFloat(this.toString())*rhs;
}
Number.prototype.div = function(rhs) {
    if (rhs.hasOwnProperty('w')) { // vec4
        return glm.vec4(parseFloat(this.toString())).div(rhs);
    } 
    else if (rhs.hasOwnProperty('z')) {// vec3
        return glm.vec3(parseFloat(this.toString())).div(rhs);
    }
    else if (rhs.hasOwnProperty('y')) { // vec2
        return glm.vec2(parseFloat(this.toString())).div(rhs);
    }
    return parseFloat(this.toString())/rhs;

}

let iResolution = glm.vec2(10.,10.);


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

