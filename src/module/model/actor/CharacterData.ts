// https://foundryvtt.com/article/system-data-models/
// https://foundryvtt.com/article/v10-data-model/

import BaseCharacterData from "./BaseCharacterData";

const {
	NumberField
} = foundry.data.fields;

export default class CharacterData extends BaseCharacterData {
	static defineSchema() {
		console.log('defining player character schema');
		const baseSchema = super.defineSchema();
		return mergeObject(baseSchema, {
			// Data unique to Player Characters (PCs)
			advances: new NumberField({ initial: 0 }),
		}) as Object;
	}

	/** @override */
	static getDefaultSkills(): Object[] {
		return super.getDefaultSkills().concat([
			{
				name: 'Hull (RW)',
				value: 0,
				description: '',
				attribute: 'strength',
			},
			{
				name: 'Agility (RW)',
				value: 0,
				description: '',
				attribute: 'dexterity',
			},
			{
				name: 'Systems (RW)',
				value: 0,
				description: '',
				attribute: 'intellect',
			},
			{
				name: 'Engineering (RW)',
				value: 0,
				description: '',
				attribute: 'constitution',
			},
			{
				name: 'Athletics',
				value: 0,
				description: '',
				attribute: 'dexterity',
			},
			{
				name: 'Common Knowledge',
				value: 0,
				description: '',
				attribute: 'intellect',
			},
			{
				name: 'Perception',
				value: 0,
				description: '',
				attribute: 'wisdom',
			},
			{
				name: 'Persuasion',
				value: 0,
				description: '',
				attribute: 'charisma',
			},
			{
				name: 'Stealth',
				value: 0,
				description: '',
				attribute: 'dexterity',
			},
		]);
	}

	get rank() {
		let rankName = 'Novice';
		const actor: any = this;
		const advances = actor.advances;

		if (advances >= 0 && advances <= 3) {
			rankName = 'Novice';
		}
		else if (advances >= 4 && advances <= 7) {
			rankName = 'Seasoned';
		}
		else if (advances >= 8 && advances <= 11) {
			rankName = 'Veteran';
		}
		else if (advances >= 12 && advances <= 15) {
			rankName = 'Heroic'
		}
		else if (advances >= 16) {
			rankName = 'Legendary';
		}

		return rankName;
	}

	set rank(value) {
		return;
	}
}