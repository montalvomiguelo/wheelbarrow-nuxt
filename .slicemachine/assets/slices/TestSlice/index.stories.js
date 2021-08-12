import MyComponent from './../../../../slices/TestSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TestSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"id":"_DefaultSlice","variation":"default-slice","name":"Default slice","docURL":"...","version":"sktwi1xtmkfgx8626","description":"Test Slice","primary":{"title":[{"type":"heading1","text":"This is where it all begins...","spans":[]}],"description":[{"type":"paragraph","text":"start by editing this slice from inside the SliceMachine builder!","spans":[]}]}}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
