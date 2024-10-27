import BaseMechData from "./BaseMechData";

const {
	HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class MechData extends BaseMechData {
	static defineSchema(): Object {
		const baseSchema = super.defineSchema();
		return mergeObject(baseSchema, {
			// Data unique to PC Mechs
			biography: new HTMLField(), // todo: ensure in system.json
			cp: new SchemaField({
				value: new NumberField({ initial: 1 })
			}),
			frame: new StringField(),
			sp: new NumberField(),
			repairs: new SchemaField({
				value: 0,
				min: 0,
				max: 0,
			}),
		}) as Object;
	}
}