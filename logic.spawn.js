var logicSpawn = {

    /** @param {Source} source **/
    run: function (source) {

        if (Game.spawns['Spawn1'].spawning) {
            console.log('already spawning');
            return;
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if (harvesters.length < 1) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName + ' for source ' + source.id);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                { memory: { role: 'harvester', sourceId: source.id } });
        }

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if (upgraders.length < 0) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName + ' for source ' + source.id);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                { memory: { role: 'upgrader', sourceId: source.id } });
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if (builders.length < 0) {
            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName + ' for source ' + source.id);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                { memory: { role: 'builder', sourceId: source.id } });
        }

    }
};

module.exports = logicSpawn;
