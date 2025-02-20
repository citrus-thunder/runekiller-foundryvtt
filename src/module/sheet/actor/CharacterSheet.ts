import RunekillerActorSheet from "./RunekillerActorSheet";

export default class CharacterSheet extends RunekillerActorSheet {
	constructor(data: any, options: any) {
		super(data, options);
	}

	/** @override */
	get template() {
		return `systems/runekiller/template/sheet/actor/character/character-sheet.hbs`;
	}

	getData(): any {
		const data: any = super.getData();
		console.log(data); // temp
		
		return data;
	}

	/** @override */
	activateListeners(html: JQuery<HTMLElement>): void {
		super.activateListeners(html);
	}
}