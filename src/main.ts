// Import Base Types
import RunekillerActor from "./module/sheet/actor/RunekillerActor.js";

// Import Models
import CharacterData from "./module/model/actor/CharacterData.js";
import MechData from "./module/model/actor/MechData.js";

// Import Sheets
import CharacterSheet from "./module/sheet/actor/CharacterSheet.js";
import MechSheet from "./module/sheet/actor/MechSheet.js";

import './runekiller.scss';

const SYSTEM_NAME = 'runekiller';

Hooks.once('init', async () => {
	game[SYSTEM_NAME] = { CharacterSheet };
	// Register Data Models
	Object.assign(CONFIG.Actor.dataModels, {
		character: CharacterData,
		mech: MechData,
	});

	// Register Sheets
	CONFIG.Actor.documentClass = RunekillerActor;
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet(SYSTEM_NAME, CharacterSheet, { label: 'Character', types: ['character'], makeDefault: true });
	Actors.registerSheet(SYSTEM_NAME, MechSheet, { label: 'Mech', types: ['mech'], makeDefault: true });
});