var Daniel = {
    name: 'AI',
    logic: (game) => {
        

        /*
            FUNCTIONS FOR WINNING
        */
       function checkRowsW() {
        var player_moves = 0
        var pos = 0
        var possible_move = null
        var possible_row = null
        for(var x = 0; x <= 2; x++) {
            player_moves = 0
            pos = 0
            possible_moves = null
            possible_rows = null
            for(var c = 0; c <= 2; c++) {
                pos = c + 3*x
                if(game.state[pos] == 'O') {
                    player_moves++
                    possible_row = x
                }
                if(game.state[pos] == '') {
                    possible_move = pos
                }
            }

            if (player_moves == 2 && possible_move != null){
              return(possible_move)
            }
            
            console.log('finished checkRows')
            return
        }

        function checkColumnsW(){
            var player_moves = 0
            var pos = 0
            var possible_moves = null
            var posArray = [0,3,6]
            var possible_columns = null
            for(var x = 0; x <= 2; x++){
                for(var c = 0; c <= 2; c ++){
                    pos = posArray[c] + x
                    if(game.state[pos == 'O']) {
                        player_moves++
                        possible_columns = x
                    } else if(game.state[pos] == "") {
                        possible_moves = pos
                    }
                    
                }
                if(player_moves == 2 && possible_moves != null) {
                    return(possible_moves)
                }
            }
            console.log('finished check columns')
            return
        }

        function checkDiagonalsW() {
            var d1 = null
            var d2 = null
            var pos1 = null
            var pos2 = null
            if(game.state[0] == 'O') {
                d1++
            } else if (game.state[0] == '') {
                pos1 = 0
            }
            if(game.state[2] == 'O') {
                d2++
            } else if (game.state[2] == '') {
                pos2 = 2
            }
            if(game.state[4] == 'O') {
                d1++
                d2++
            } else if (game.state[4] == '') {
                pos1 = 4
                pos2 = 4
            }
            if(game.state[6] == 'O'){
                d2++
            } else if (game.state[6] == '') {
                pos2 = 6
            }
            if(game.state[8] == 'O'){
                d1++
            } else if (game.state[8] == '') {
                pos1 = 8
            }

            if(d1 == 2) {
                return(pos1)
            } else if (d2 == 2) {
                return(pos2)
            }

        }


        /*
            FUNCTIONS FOR PREVENTING PLAYER TO WIN
        */
        //Checks rows

        function checkRowsL() {
            var player_moves = 0
            var pos = 0
            var possible_move = null
            var possible_row = null
            for(var x = 0; x <= 2; x++) {
                player_moves = 0
                pos = 0
                possible_moves = null
                possible_rows = null
                for(var c = 0; c <= 2; c++) {
                    pos = c + 3*x
                    if(game.state[pos] == 'X') {
                        player_moves++
                        possible_row = x
                    }
                    if(game.state[pos] == '') {
                        possible_move = pos
                    }
                }

                if (player_moves == 2 && possible_move != null){
                    return(possible_move)

                }
            }
            console.log('finished checkRows')
            return
        }

        function checkDiagonalsL() {
            var d1 = null
            var d2 = null
            var pos1 = null
            var pos2 = null
            if(game.state[0] == 'X') {
                d1++
            } else if (game.state[0] == '') {
                pos1 = 0
            }
            if(game.state[2] == 'X') {
                d2++
            } else if (game.state[2] == '') {
                pos2 = 2
            }
            if(game.state[4] == 'X') {
                d1++
                d2++
            } else if (game.state[4] == '') {
                pos1 = 4
                pos2 = 4
            }
            if(game.state[6] == 'X'){
                d2++
            } else if (game.state[6] == '') {
                pos2 = 6
            }
            if(game.state[8] == 'X'){
                d1++
            } else if (game.state[8] == '') {
                pos1 = 8
            }

            if(d1 == 2) {
                return(pos1)
            } else if (d2 == 2) {
                return(pos2)
            }

        }

        function checkColumnsL(){
            var player_moves = 0
            var pos = 0
            var possible_moves = null
            var posArray = [0,3,6]
            var possible_columns = null
            for(var x = 0; x <= 2; x++){
                for(var c = 0; c <= 2; c ++){
                    pos = posArray[c] + x
                    if(game.state[pos == 'X']) {
                        player_moves++
                        possible_columns = x
                    } else if(game.state[pos] == "") {
                        possible_moves = pos
                    }
                    
                }
                if(player_moves == 2 && possible_moves != null) {
                    return(possible_moves)
                }
            }
            console.log('finished check columns')
            return
        }

        // PLAYS RANDOM POSITION

        function play_random_position() {
            played = false
            

            while (!played) {
                var position
                number = Math.random()
                if (number <= 0.1) {
                    position = 0
                } else if (number <= 0.2) {
                    position = 1
                } else if (number <= 0.3) {
                    position = 2
                } else if (number <= 0.4) {
                    position = 3
                } else if (number <= 0.5) {
                    position = 4
                } else if (number <= 0.6) {
                    position = 5
                } else if (number <= 0.7) {
                    position = 6
                } else if (number <= 0.8) {
                    position = 7
                } else if (number > 0.8) {
                    position = 8
                }
                if(game.state[position] == ''){
                    played = true
                    return position
            } 
            
        }

        }

        a1 = checkColumnsL()
        b1 = checkRowsL()
        c1 = checkDiagonalsL()
        a2 = checkColumnsW()
        b2 = checkRowsW()
        c2 = checkDiagonalsW()
        d = play_random_position()

        if(a2 != null) {
            game.makeMove(a)
            return
        }
        if(b2 != null) {
            game.makeMove(b)
            return
        }
        if(c2 != null) {
            game.makeMove(c)
            return
        }
        if(a1 != null) {
            game.makeMove(a)
            return
        }
        if(b1 != null) {
            game.makeMove(b)
            return
        }
        if(c1 != null) {
            game.makeMove(c)
            return
        }
        if(d != null) {
            game.makeMove(d)
            return
        }
      
    }
}
}