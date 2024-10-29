import RunekillerActorSheet from "./RunekillerActorSheet";

export default class MechSheet extends RunekillerActorSheet {
	constructor(data: any, options: any) {
		super(data, options);
	}

	/** @override */
	get template() {
		return `systems/runekiller/template/sheet/actor/mech/mech-sheet.hbs`;
	}

	getData(): any {
		const data: any = super.getData();
		console.log(data); // temp
		
		return data;
	}

	/** @override */
	activateListeners(html: JQuery<HTMLElement>): void {
		super.activateListeners(html);
		// Apparently this method is load-bearing; we cannot register multiple sheets without it
		// otherwise we get a jquery error. I assume it's probably a race condition with jQuery being initialized.
	}
}