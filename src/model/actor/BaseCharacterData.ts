// https://foundryvtt.com/article/system-data-models/
// https://foundryvtt.com/article/v10-data-model/

const {
	HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class BaseCharacterData extends foundry.abstract.TypeDataModel {
	static defineSchema(): Object {
		return {
			// Data common to PCs and NPCs
			ancestry: new StringField(),
			attributes: new SchemaField({
				charisma: new NumberField(),
				constitution: new NumberField,
				dexterity: new NumberField(),
				intellect: new NumberField(),
				strength: new NumberField(),
				wisdom: new NumberField(),
			}),
			background: new StringField(),
			biography: new HTMLField(),
			callsign: new StringField({ required: true, trim: true }),
			feats: new ArrayField(new SchemaField()),
			hp: new SchemaField({
				value: new NumberField(),
				min: new NumberField({ initial: 0 }),
				max: new NumberField(),
			}),
			mark: new StringField(),
			notes: new HTMLField(), // todo: ensure in system.json
			portrait: new FilePathField({ required: false, categories: ["IMAGE"] }),
			pronouns: new StringField(),
			rank: new StringField(),
			skills: new ArrayField(new SchemaField({
				name: new StringField(),
				value: new NumberField(),
				description: new HTMLField(),
			})),
		}
	}
}