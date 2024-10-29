// https://foundryvtt.com/article/system-data-models/
// https://foundryvtt.com/article/v10-data-model/

const {
	HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class BaseCharacterData extends foundry.abstract.TypeDataModel {
	static defineSchema(): Object {
		console.log('defining base character schema');
		return {
			// Data common to PCs and NPCs
			ancestry: new StringField(),
			attributes: new SchemaField({
				charisma: new NumberField({ initial: 0 }),
				constitution: new NumberField({ initial: 0 }),
				dexterity: new NumberField({ initial: 0 }),
				intellect: new NumberField({ initial: 0 }),
				strength: new NumberField({ initial: 0 }),
				wisdom: new NumberField({ initial: 0 }),
			}),
			background: new StringField(),
			biography: new HTMLField(),
			callsign: new StringField({ required: true, trim: true }),
			feats: new ArrayField(new SchemaField({
				name: new StringField(),
				description: new HTMLField(),
			})),
			hp: new SchemaField({
				value: new NumberField(),
				min: new NumberField({ initial: 0 }),
				max: new NumberField(),
			}),
			mark: new StringField(),
			notes: new HTMLField(),
			portrait: new FilePathField({ required: false, categories: ["IMAGE"] }),
			pronouns: new StringField(),
			rank: new StringField(),
			skills: new ArrayField(
				new SchemaField({
					name: new StringField(),
					value: new NumberField({ initial: 0 }),
					description: new HTMLField(),
					attribute: new StringField(),
				}),
				{
					initial: this.getDefaultSkills
				}
			),
		}
	}

	static getDefaultSkills(): Object[] {
		return [];
	}
}