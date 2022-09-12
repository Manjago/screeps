var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

		const source = Game.getObjectById(creep.memory.sourceId);

	    if(creep.store[RESOURCE_ENERGY] == 0) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                creep.say("mo " + source.id);
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