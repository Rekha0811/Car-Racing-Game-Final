class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.place = 0;
    }
  
    getCount(){
      var playerCountRef = database.ref('PLAYERCOUNT');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
      console.log("playerCount :" +playerCount)
    }
  
    updateCount(count){
      database.ref('/').update({
        PLAYERCOUNT: count
      });
      //console.log(playerCount)
    }
    getFinishedPlayers(){
      var finishedPlayersRef = database.ref('finishedPlayers');
      finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
      })
      console.log("finishedPlayers :" +finishedPlayers)
    }
  
    static updateFinishedPlayers(){
      database.ref('/').update({
        finishedPlayers: finishedPlayers+1
      });
      this.place +=1;
      console.log("place : "+this.place)
    }
    
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        place : this.place
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }