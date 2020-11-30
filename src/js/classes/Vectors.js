class Vec2{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	rotate(d){
		var rad = d/180*Math.PI;
		return new Vec2(Math.cos(rad)*this.x-Math.sin(rad)*this.y, Math.sin(rad)*this.x + Math.cos(rad)*this.y);
	}

	magnitude(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}

	normalize(){
		var l = this.magnitude();
		return new Vec2(this.x/l, this.y/l);
	}

	add(vec){
		return new Vec2(this.x+vec.y, this.y+vec.y);
	}

	sub(vec){
		return new Vec2(this.x-vec.x, this.y-vec.y);
	}

	multiply(n){
		return new Vec2(this.x*n, this.y*n);
	}

	angle(vec){
		return Math.acos(this.dot(vec)/(this.magnitude() * vec.magnitude()))*180/Math.PI;
	}

	dot(vec){
		return this.x*vec.x + this.y*vec.y;
	}

	perpDot(vec){
		return this.x * vec.y - this.y * vec.x;
	}

	distance(v){
		return Math.sqrt((this.x-v.x)*(this.x-v.x) + (this.y-v.y)*(this.y-v.y));
	}
}

class Vec3{
	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	}

	rotateByMatrix(mat){
		var m = mat.mat;
		return new Vec3(this.x*m[0][0] + this.y*m[1][0] + this.z*m[2][0], this.x*m[0][1] + this.y*m[1][1] + this.z*m[2][1], this.x*m[0][2] + this.y*m[1][2] + this.z*m[2][2]);
	}

	magnitude(){
		return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
	}

	normalize(){
		var l = this.magnitude();
		return new Vec3(this.x/l, this.y/l, this.z/l);
	}

	equals(v){
		if(this.x == v.x && this.y == v.y && this.z == v.z){
			return true;
		}
		return false;
	}
	//fuck you felo, why does scale behave differently, you dickhead!?
	scale(n){
		return new Vec3(this.x*=n, this.y*=n, this.z*=n);
	}

	add(v){
		return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
	}

	sub(v){
		return this.add(new Vec3(-v.x, -v.y, -v.z));
	}

	cross(v){
		return new Vec3(this.y*v.z - this.z*v.y, this.z*v.x - this.x*v.z, this.x*v.y - this.y*v.x);
	}

	dot(v){
		return this.x*v.x + this.y*v.y + this.z*v.z;
	}
}

exports {Vec2, Vec3};
