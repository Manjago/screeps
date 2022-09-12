var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store[RESOURCE_ENERGY] == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            console.log("!1");
         //   console.log("tsource (" + creep.memory.tsource+ ")");
            console.log("!2");
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
                creep.say("mo " + sources[0].id);
            } else {
                creep.say("load");
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
                creep.say("find");
            }
        }
	}
};

module.exports = roleUpgrader;