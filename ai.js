var Daniel = {
    name: 'AI',
    logic: (game) => {
        
        // Always prevent player to win
        console.log("hello")
        //Checks rows

        function checkRows() {
            var player_moves = 0
            var pos = 0
            var possible_moves = null
            var possible_row = null
            for(var x; x <= 2; x++) {
                player_moves = 0
                pos = 0
                possible_moves = null
                possible_rows = null
                for(var c; x <= 2; x++) {
                    pos = c + 3*x
                    if(game.state[pos] == 'X') {
                        player_moves++
                        possible_row = x
                    }
                }
            }
        }
        // for(var row = 0; row <= 2; row++) {
        //     player_moves = 0
        //     pos = 0
        //     possible_moves = null
        //     possible_rows = 0
        //     move_made = false
        //     for(var space = 0; space <= 2; space++){
        //         pos = space + 3*row
        //         if(game.state[pos] == "X") {
        //             player_moves++
        //             possible_rows = row
        //         } else if(game.state[pos] == "") {
        //             possible_moves = pos
        //         }
                
        //         if(player_moves == 2) {
        //             if(possible_moves == null) {
        //                 for(var get = 0; get <=2; get++) {
        //                     pos = get + 3*row
        //                     if(game.state[pos] == ''){
        //                         game.makeMove(pos)
        //                         return;
        //                     }
        //                 }
        //             }

        //             if(possible_moves == null) {
                        
        //             }
        //             game.makeMove(possible_moves)
        //             // move_made = true
        //             return;
        //         }
        //     }
        // }

        function checkColumns(){
            var player_moves = 0
            var pos = 0
            var possible_moves = null
            var posArray = [0,3,6]
            var possible_columns = null
            for(var x; x <= 2; x++){
                for(var c; c <= 2; c ++){
                    pos = posArray[c] + x
                    if(game.state[pos == 'X']) {
                        player_moves++
                        possible_columns = x
                    } else if(game.state[pos] == "") {
                        possible_moves = pos
                    }
                    
                }
                if(player_moves == 2 && possible_moves != null) {
                    game.makeMove(possible_moves)
                }
            }
        }

        console.log(possible_moves)
        console.log(player_moves)
        console.log(pos)

        

        //Random AI

        function play_random_position() {
            number = Math.random()
            played = false
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

            while (!played) {
            var x = random_position()
            if(game.state[x] == ''){
                game.makeMove(x)
                played = true
            } 
        }

        }

        



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