#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define M_PI 3.14159265358979323846

vec3 colormap(float v,float t) {
  if (t > 160.0) {
    t = mod(t,160.0);
  }
  if (t < 15.0) {
    t = 15.0;
  }
  float tt = (t * 10.0);
  float r = ( .5 + .5 * sin(M_PI * v + tt/(v+3.0)));
  float g = ( .5 + .5 * sin(M_PI * v + M_PI*2.0/(sin(12.5) * t+v)));
  float b = ( .5 + .5 * sin(M_PI * v + M_PI*4.0/(sin(15.25) + v)));
  return vec3(r,g,b);
}


float calc (float x, float y, float t) {
  float v = 0.0;
  float ar = u_resolution.x / u_resolution.y;
  float xx = ar* x / (u_resolution.x)-ar/2.0;
  float yy = y / u_resolution.y - .5;
  float tt = t / 1.0;

  float cx = xx + 0.15 * sin(tt / 2.0);
  float cy = yy + 0.5 * cos(tt / 1.0);
  
  float v0 = sin((xx * 10.0) + tt);
  float v1 = sin(10.0 * ( xx * sin(tt / 2.0) + yy * cos(tt / 3.0)));
  float v2 = sin(sqrt(100.0*((cx*cx)+(cy*cy)))+1.0+tt);

  v = ((v0 + v1 + v2) + cos(v2 + yy + tt)) / 2.0;

  return v;
}

void main() {
  
  float v = calc(
    gl_FragCoord.x,
    gl_FragCoord.y,
    u_time
  );
	
  gl_FragColor = vec4(
    colormap(v, u_time),
    1.0
  );
}
