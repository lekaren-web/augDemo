import './style.css'

const inner =`
<a-scene embedded arjs>
<a-marker type='pattern' url='pattern-marker.patt'>
  <a-image src="udemy.jpeg"
    position= "0 1 0"
    scale= "1 1 1"
    rotation="0 2 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"
  />
</a-marker>
<a-entity camera></a-entity>
</a-scene>
`
const augmented = document.querySelector('#app')
const button = document.querySelector('#but')
button.addEventListener("click", clicked )

function clicked(){
  augmented.innerHTML = inner
}
