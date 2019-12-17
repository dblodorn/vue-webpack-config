#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define ITER 28

mat2 rot(float a) {
  float s=sin(a), c=cos(a);
  return mat2(c,s,-s,c);
}

float box(vec3 p, float r){
  return length(max(abs(p)-r,0.));
}

float map(vec3 p) {   
  float s = sin( u_time + .6 * p.z )/4.;
  p.xy *= rot( s );
  p.xy += .5 + vec2( -s, s );
  vec3 q = abs( p-floor(p) );
  float d = min(min(length(q.xy), length(q.xz)), length(q.yz)) - .01;
  d = min(d, box(q, .05));
  q = vec3(.0, ( p.xy - vec2(2.5, 0.5) ) * rot( p.z+u_time ) );
  d = min(d, box(q, .25));
  return d;
}

void main() {
	vec3 R = u_resolution.xyy,
  rd = normalize(vec3(u_resolution-.5*R.xy, R.y)),
	ro = vec2(.0, u_time).xxy;
  rd.xz *= rot(.6);
    
  float t = .0, m;
  
  for (int i = 0; i <= 99; i++) {
    t += map(ro+rd*t)/2.;
  }
    
  gl_FragColor = vec4( 
    cos(t*rd.z + u_time - .5),
    exp(-t/6.),
    1.-exp(-t/4.), 
    1
  );
}
