import RunekillerActorSheet from "./RunekillerActorSheet";

export default class CharacterSheet extends RunekillerActorSheet {
	constructor(data: any, options: any) {
		super(data, options);
	}

	/** @override */
	get template() {
		return `systems/runekiller/template/sheet/actor/character/character-sheet.hbs`;
	}
}