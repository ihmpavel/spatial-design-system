import '../components/infowindow.js'
import * as AFRAME from 'aframe'

AFRAME.registerPrimitive('a-ar-infowindow', {
  defaultComponents: {
    infowindow: {},
  },
  mappings: {
    isVisible: 'infowindow.isVisible',
    content: 'infowindow.content',
    startposition: 'infowindow.startposition',
    targetposition: 'infowindow.targetposition',
    duration: 'infowindow.duration',
    height: 'infowindow.height',
    width: 'infowindow.width',
    textcolor: 'infowindow.textcolor',
    primary: 'infowindow.primary',
  },
})
