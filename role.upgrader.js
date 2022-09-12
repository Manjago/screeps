var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

		const source = Game.getObjectById(creep.memory.sourceId);

	    if(creep.store[RESOURCE_ENERGY] == 0) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.say("u->" + source.id);
                creep.moveTo(source);
            } else {
                creep.say("u-load");
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.say("u-upg");
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;