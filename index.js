let red = glm.vec3((255), (21), (47)).div((255.00)), yellow = glm.vec3((255), (198), (80)).div((255.00)), pink = glm.vec3((255), (159), (196)).div((255.00));
function sat(a)
{
return glm.clamp(a, (0.00), (1.00));
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
return glm.length(p).sub(r);
}
function patternBack(uv)
{
	let col = glm.vec3((0));
	let rep = (0.38);
	uv = uv.sub(glm.vec2((0.10)));
	let r = glm.abs(cir(glm.mod(uv, rep).sub(rep.mul((0.50))), (0.14))).sub((0.03));
	col = glm.mix(col, red.mul((0.50)).mul((1.00).sub(sat(uv.y.add((0.30))))), (1.00).sub(sat(r.mul((40.00)))));
	return col;
}
function spot(uv)
{
	let sz = (0.03);
	return glm.vec4(pink.mul((1.00).sub(sat(cir(uv.sub(glm.vec2(-sz.mul((0.10)))), sz.mul((0.80))).mul((40.00))))), cir(uv, sz));
}
function post(uv, rd)
{
	let col = rd, blue = glm.vec3((89), (151), (255)).div((255.00));
	col = col.add(blue.mul(glm.sin(uv.x.add(uv.y)).mul((0.50)).add((0.50))));
	let an = uv.x.add(uv.y.mul((0.50)));
	col = col.add(sat(uv.y).mul(blue).mul((0.50)).mul(sat(glm.sin(an.mul((25.00)).add(iTime)).mul((0.50)).add((0.50)).add(glm.sin(an.mul((5.00)).sub(iTime.mul((0.50)))).mul((0.50)).add((0.50))))));
	let n = texture(iChannel0, glm.vec2(glm.sin(uv.y.mul((5.00)).add(iTime).add(glm.sin(uv.y.mul((15.00))))).mul((0.05)).add(uv.x), uv.y.sub(iTime.mul((0.20))))).x;
	col = col.add(blue.mul(float(n > (0.85))).mul(glm.sin(uv.x.add(uv.y)).mul((0.50)).add((0.50))));
	return col;
}
function rdr(uv, shp)
{
	let col = patternBack(uv);
	col = (0.20).mul(post(uv.mul(-(1.00)), col));
	let uvt = glm.vec2(glm.abs(uv.x), uv.y.mul((0.70))).sub(glm.vec2((0.38), -(0.20)));
	let tent = glm.abs(cir(uvt, (0.25))).sub((0.12));
	col = glm.mix(col, red.mul((1.00).sub(sat(uvt.y))), (1.00).sub(sat(tent.mul(shp))));
	let head = cir(uv.sub(glm.vec2((0), (0.10))), (0.40));
	col = glm.mix(col, red, (1.00).sub(sat(head.mul(shp))));
	let uve = glm.vec2(glm.abs(uv.x), uv.y).sub(glm.vec2((0.25), (0)));
	let eye = cir(uve, (0.17));
	col = glm.mix(col, yellow, (1.00).sub(sat(eye.mul(shp))));
	let eyeb = cir(uve, (0.12));
	col = glm.mix(col, glm.vec3((0)), (1.00).sub(sat(eyeb.mul(shp))));
	let uvew = glm.vec2(glm.abs(uv.x.sub((0.07))), uv.y).sub(glm.vec2((0.25), (0.07)));
	let eyew = cir(uvew, (0.03));
	col = glm.mix(col, glm.vec3((1)), (1.00).sub(sat(eyew.mul(shp))));
	let uver = glm.vec2(glm.abs(uv.x.sub((0.15))), uv.y).sub(glm.vec2((0.27), -(0.15)));
	let eyer = cir(uver, (0.15));
	col = glm.mix(col, glm.mix(col, glm.vec3((1)), (0.30)), (1.00).sub(sat(glm.max(eyer, eye).mul(shp))));
	let i = (0);
	let uvss = glm.vec2(glm.abs(uv.x), uv.y).sub(glm.vec2((0.37), (0)));
	for (;i < (5);)
	{
		let an = float(i.sub((2))).mul((0.50));
		let uvs = uvss.add(glm.vec2(glm.sin(an), glm.cos(an).mul((2.00))).mul((0.23)));
		let spt = spot(uvs);
		col = glm.mix(col, spt.xyz, (1.00).sub(sat(spt.w.mul(shp))));
		++i;
	}
	return col;
}
function mainImage(fragCoord)
{
	let __var = iResolution.xx;
	let uv = fragCoord.xy.sub((0.50).mul(iResolution.xy)).div(iResolution.xx);
	uv = uv.mul((2.00));
	let col = rdr(uv, glm.mix((40.00), (400.00), glm.sin(uv.x.add(uv.y).mul((15.00)).sub(iTime)).mul((0.50)).add((0.50))));
	col = post(uv, col);
	return glm.vec4(col, (1));
}

console.log(mainImage(glm.vec2(1,1)));