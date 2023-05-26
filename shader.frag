#ifdef GL_ES

precision mediump float;

#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color;

    if((st.x - 0.5) * (st.x - 0.5) + (st.y - 0.5) * (st.y - 0.5) < 0.5 * 0.5 * u_time){
        color = vec3(0.0, st.y, st.x);

    }else{
        color = vec3(0.0, 1.0-st.x, 1.0-st.x);
    }


    gl_FragColor = vec4(color, 1.0);

}