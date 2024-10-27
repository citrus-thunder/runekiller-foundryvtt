const {
	HTMLField, BooleanField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class BaseMechData extends foundry.abstract.TypeDataModel {
	static defineSchema(): Object {
		return {
			// Data common to PC Mechs and NPC Mechs
			conditions: new SchemaField({
				bolstered: new BooleanField({ initial: false }),
				burn: new NumberField({ initial: 0 }),
				exposed: new BooleanField({ initial: false }),
				hidden: new BooleanField({ initial: false }),
				immobilized: new BooleanField({ initial: false }),
				impaired: new BooleanField({ initial: false }),
				invisible: new BooleanField({ initial: false }),
				jammed: new BooleanField({ initial: false }),
				lock_on: new BooleanField({ initial: false }),
				overcharge: new NumberField({ initial: 0 }),
				prone: new BooleanField({ initial: false }),
				shredded: new BooleanField({ initial: false }),
				slowed: new BooleanField({ initial: false }),
				stunned: new BooleanField({ initial: false }),
			}),
			description: new StringField(),
			heat: new SchemaField({
				value: new NumberField(),
				min: new NumberField(),
				max: new NumberField(),
			}),
			hp: new SchemaField({
				value: new NumberField(),
				min: new NumberField(),
				max: new NumberField(),
			}),
			notes: new HTMLField(), // todo: add to system.json
			overshield: new NumberField(),
			skills: new SchemaField({
				agility: new NumberField(),
				engineering: new NumberField(),
				hull: new NumberField(),
				systems: new NumberField(),
			}),
			stats: new SchemaField({
				armor: new NumberField(),
				attack: new NumberField(),
				e_defense: new NumberField(),
				evasion: new NumberField(),
				save_target: new NumberField(),
				sensors: new NumberField(),
				size: new StringField(), // string so 'Size 1/2' makes sense
				speed: new NumberField(),
				tech_attack: new NumberField(),
			}),
			stress: new SchemaField({
				value: new NumberField({ initial: 4 }),
				min: new NumberField(),
				max: new NumberField({ initial: 4 }),
			}),
			structure: new SchemaField({
				value: new NumberField({ initial: 4 }),
				min: new NumberField(),
				max: new NumberField({ initial: 4 }),
			}),
		}
	}
}