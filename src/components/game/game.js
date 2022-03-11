import { GameSaver } from "../../service/GameSaver"
import office from "../office"
import company from "../company"
import market from "../market"
import { Game } from "../../model/Game"

export default {
  name: 'game',
  components: {
    company,
    office,
    market
  },
  data() {
    return {
      game: new Game(),
      message: "Je me permets"
    }
  },
  created() {
    const gameSaver = new GameSaver()
    gameSaver.restore(this.game)
    console.log("before", this.game)
  },
  mounted() {
    console.log("mounted", this.game)
    setInterval(function() {
      this.game.earn()
    }.bind(this), 1000)
  }
}
