import employee from "../employee"

export default {
  name: 'office',
  components: {
    employee
  },
  props: [
    'office',
    'canBeBought'
  ]
}


