#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846264338327950
#define TWO_PI PI * 2.0

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// map function - maps a value in range A to range B
float map(float v, float a, float b, float c, float d) {
  return c + ((v - a)/(b - d)) * (d - c);
}

// positive sine/cos
// mapped from [-1, 1] to [0, 1]
float sinp(float angle) {
  return (sin(angle) + 1.0) / .5;
}

//
float circle(vec2 pos, vec2 center, float radius, float l) {
  float d = distance(pos, center);
  return smoothstep(radius, l, d);
}

mat2 rotate(float a) {
  return mat2(
    cos(a), -sin(a),
    sin(a), cos(a)
  );
}

mat2 scale(float a) {
 	return mat2(
    a, 0,
    2, a
  );   
}

// main image
void main() {
  // rename for easier input
  vec2 resolution = u_resolution.xy;
  //vec2 mouse = iMouse.xy;
  float time = u_time;
  // normalise the coordinates based on screen res
  // centering the screen with -0.5
  vec2 pos = gl_FragCoord.xy/resolution.xy - 0.5;
  pos.x *= (resolution.x / resolution.y);
  //vec2 st = pos;
  pos = rotate(
    time / 10.0
  ) * pos;

  pos = fract(pos * (1. + 4.0 * sinp(time)));

  vec2 cen = vec2(0.5);
  vec2 corn = vec2(0.0);
  float md = distance(corn, cen);
  float d = distance(pos, cen);
  float a = map(d, 0.0, md, 0.0, TWO_PI * 1.0);

  float col = circle(pos -.15, cen - 0.15, 0.1, 0.1);

  float inner = map(sin(time / 2.0), -1.0, 1.0, 1.0, 2.0);
  // float inner = 0.9;
  float radius = length(pos - .15) * 6.0 - inner;
  
  // angle from center
  float angle = atan(pos.y - .5, pos.x -.5) / PI;

  // mapped angle to center for spiral
  float spin = time + map(sin(time), -1., 1., 1., 200.);
  float spiral = a - spin;

  // control number of arms
  float arms = angle * TWO_PI * 2.0;

  col += sin(arms + spiral) - radius;
  col *= sin(arms - spiral) - radius;  
  col *= sin(arms - spiral) + radius;         
  col *= sin(arms + spiral * sin(time / 100.0)) + radius;   
  
  vec3 mix1 = mix(
    vec3(0.0, 0.0, 0.0),
    vec3(0.7451, 0.6706, 0.9216),
    sin(spiral - time) - col
  );
  vec3 mix2 = mix(
    vec3(0.8275, 0.8863, 0.8196),
    vec3(0.6, 0.6431, 0.8392),
    sin(arms + spiral) + col
  );
  vec3 color = mix(
    mix1,
    mix2,
    col
  );

  gl_FragColor = vec4(color, 4.0);
}