var AI = {
    name: 'AI',
    logic: (game) => {
        
        // Always prevent player to win
        var player_moves = 0
        var pos = 0
        var possible_moves = null
        var possible_rows = 0
        var move_made = false
        //Checks rows
        for(var row = 0; row <= 2; row++) {
            for(var space = 0; space <= 2; space++){
                pos = space + 3*row
                if(game.state[pos] == "X") {
                    player_moves++
                    possible_rows = row
                } else if(game.state[pos] == "") {
                    possible_moves = pos
                }
                
                if(player_moves == 2) {
                    if(possible_moves == null) {
                        for(var get = 0; get <=2; get++) {
                            pos = get + 3*row
                            if(game.state[pos] == ''){
                                game.makeMove(pos)
                                return;
                            }
                        }
                    }
                    game.makeMove(possible_moves)
                    // move_made = true
                    return;
                }
            }
        }
        console.log(possible_moves)
        console.log(player_moves)
        console.log(pos)

        
        /*
        //Random AI
        var played = false
        function random_position() {
            number = Math.random()
            if (number <= 0.1) {
                position = 0
            } else if (number <= 0.2) {
                position = 1
            } else if (number <= 0.3) {
                position = 2
            } else if (number <= 0.4) {
                postion = 3
            } else if (number <= 0.5) {
                position = 4
            } else if (number <= 0.6) {
                position = 5
            } else if (number <= 0.7) {
                position = 6
            } else if (number <= 0.8) {
                postion = 7
            } else if (number > 0.8) {
                position = 8
            }
            return position
        }

        while (!played) {
            var x = random_position()
            if(game.state[x] == ''){
                game.makeMove(x)
                played = true
            } 
        }

        */

        // Original AI

        if(game.state[6] == '') {
            game.makeMove(6)
        } else if(game.state[7] == '') {
            game.makeMove(7)
        } else if(game.state[8] == '') {
            game.makeMove(8)
        }

    }
}