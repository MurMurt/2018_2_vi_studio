import Component from "../Component.js";

export default class Game extends Component {
    constructor(props) {
        super(props);
    }

    getHTML() {
        return `<div class="interface">
                    <div class="players">
                    <ul type="square">
                        <li id="player1"></li>
                        <li id="player2"></li>
                    </ul>
                    </div>
                    <div class="tile_select_block">
                        <canvas id="mini-canvas" width=400 height=400></canvas>
                        <button type="button" id="rotate" style="height: 40px; width: 100px; background-color: aquamarine">Rotate</button>
                        <button type="button" id="submit" style="height: 40px; width: 100px; background-color: green">submit</button>
                    </div>
                </div>`;
    }
}