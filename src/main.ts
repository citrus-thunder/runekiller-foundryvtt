// Import Base Types
import RunekillerActor from "./module/sheet/actor/RunekillerActor.js";

// Import Models
import CharacterData from "./model/actor/CharacterData.js";

// Import Sheets
import CharacterSheet from "./module/sheet/actor/CharacterSheet.js";

import './runekiller.scss';

const SYSTEM_NAME = 'runekiller';

Hooks.once('init', async () => {
	// Register Data Models
	Object.assign(CONFIG.Actor.dataModels, {
		character: CharacterData
	});

	// Register Sheets
	CONFIG.Actor.documentClass = RunekillerActor;
	Actors.unregisterSheet('core', ActorSheet);
	Actors.registerSheet(SYSTEM_NAME, CharacterSheet, { label: 'Character', types: ['character'], makeDefault: true });
});