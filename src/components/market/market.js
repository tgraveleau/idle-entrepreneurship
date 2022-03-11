import { Office } from "../../model/Office"
import office from "../office"
import company from "../company"

export default {
  name: 'market',
  components: {
    office,
    company
  },
  props: [
    'game'
  ],
  data () {
    return {
      offices : [
        new Office("Petit espace de coworking", 1),
        new Office("Des bureaux de putes", 5)
      ],
    }
  },
}


