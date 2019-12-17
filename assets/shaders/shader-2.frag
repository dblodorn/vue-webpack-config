#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv = uv + vec2(0.15 - cos(uv.x * 2.0), 55.0) * (sin(u_time) * 0.01);
  float cb = floor(uv.x * 1.5) + floor(uv.y * 15.);
  gl_FragColor = vec4(0.0, 0.0, 0.0,mod(cb, 2.0));
}
