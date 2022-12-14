var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var logicSpawn = require('logic.spawn');

module.exports.loop = function () {

    for(var name in Game.rooms) {
    //    console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
      //      console.log('Clearing non-existing creep memory:', name);
        }
    }

    for(var name in Game.rooms) {
        var sources = Game.rooms[name].find(FIND_SOURCES);
        for(var index in sources) {
        //    console.log("find source " + sources[index]);
            logicSpawn.run(sources[index])
        }
    }
    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}