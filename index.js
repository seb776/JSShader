import 'jssjadertools.mjs'

let red = new vec3(255, 21, 47).div(255), yellow = new vec3(255, 198, 80).div(255), pink = new vec3(255, 159, 196).div(255);
function sat(a)
{
return clamp(a, 0, 1);
}
class teststruct
{
	constructor(test, variable)
	{
		this.test = test;
		this.variable = variable;
	}
}
function cir(p, r)
{
return length(p).sub(r);
}
function patternBack(uv)
{
	let col;
	let rep = 0.38;
	uv = uv.sub(new vec2(0.1));
	let r = abs(cir(mod(uv, rep).sub(rep.mul(0.5)), 0.14)).sub(0.03);
	col = mix(col, red.mul(0.5).mul(1.sub(sat(uv.y.add(0.3)))), 1.sub(sat(r.mul(40))));
	return col;
}
function spot(uv)
{
	let sz = 0.03;
	return new vec4(pink.mul(1.sub(sat(cir(uv.sub(new vec2(-sz.mul(0.1))), sz.mul(0.8)).mul(40)))), cir(uv, sz));
}
function post(uv, rd)
{
	let col = rd, blue = new vec3(89, 151, 255).div(255);
	col = col.add(blue.mul(sin(uv.x.add(uv.y)).mul(0.5).add(0.5)));
	let an = uv.x.add(uv.y.mul(0.5));
	col = col.add(sat(uv.y).mul(blue).mul(0.5).mul(sat(sin(an.mul(25).add(iTime)).mul(0.5).add(0.5).add(sin(an.mul(5).sub(iTime.mul(0.5))).mul(0.5).add(0.5)))));
	let n = texture(iChannel0, new vec2(sin(uv.y.mul(5).add(iTime).add(sin(uv.y.mul(15)))).mul(0.05).add(uv.x), uv.y.sub(iTime.mul(0.2)))).x;
	col = col.add(blue.mul(float(n > 0.85)).mul(sin(uv.x.add(uv.y)).mul(0.5).add(0.5)));
	return col;
}
function rdr(uv, shp)
{
	let col = patternBack(uv);
	col = 0.2.mul(post(uv.mul(-1), col));
	let uvt = new vec2(abs(uv.x), uv.y.mul(0.7)).sub(new vec2(0.38, -0.2));
	let tent = abs(cir(uvt, 0.25)).sub(0.12);
	col = mix(col, red.mul(1.sub(sat(uvt.y))), 1.sub(sat(tent.mul(shp))));
	let head = cir(uv.sub(new vec2(0, 0.1)), 0.4);
	col = mix(col, red, 1.sub(sat(head.mul(shp))));
	let uve = new vec2(abs(uv.x), uv.y).sub(new vec2(0.25, 0));
	let eye = cir(uve, 0.17);
	col = mix(col, yellow, 1.sub(sat(eye.mul(shp))));
	let eyeb = cir(uve, 0.12);
	col = mix(col, new vec3(0), 1.sub(sat(eyeb.mul(shp))));
	let uvew = new vec2(abs(uv.x.sub(0.07)), uv.y).sub(new vec2(0.25, 0.07));
	let eyew = cir(uvew, 0.03);
	col = mix(col, new vec3(1), 1.sub(sat(eyew.mul(shp))));
	let uver = new vec2(abs(uv.x.sub(0.15)), uv.y).sub(new vec2(0.27, -0.15));
	let eyer = cir(uver, 0.15);
	col = mix(col, mix(col, new vec3(1), 0.3), 1.sub(sat(max(eyer, eye).mul(shp))));
	let i = 0;
	let uvss = new vec2(abs(uv.x), uv.y).sub(new vec2(0.37, 0));
	for (;i < 5;)
	{
		let an = float(i.sub(2)).mul(0.5);
		let uvs = uvss.add(new vec2(sin(an), cos(an).mul(2)).mul(0.23));
		let spt = spot(uvs);
		col = mix(col, spt.xyz, 1.sub(sat(spt.w.mul(shp))));
		++i;
	}
	return col;
}
function mainImage(fragCoord)
{
	let uv = fragCoord.xy.sub(0.5.mul(iResolution.xy)).div(iResolution.xx);
	uv = uv.mul(2);
	let col = rdr(uv, mix(40, 400, sin(uv.x.add(uv.y).mul(15).sub(iTime)).mul(0.5).add(0.5)));
	col = post(uv, col);
	return new vec4(col, 1);
}

console.log(mainImage(new vec2(0,0)).toString());
