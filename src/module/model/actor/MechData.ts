import BaseMechData from "./BaseMechData";

const {
	HTMLField, SchemaField, NumberField, StringField
} = foundry.data.fields;

export default class MechData extends BaseMechData {
	static defineSchema(): Object {
		const baseSchema = super.defineSchema();
		console.log('defining player mech schema');	
		return mergeObject(baseSchema, {
			// Data unique to PC Mechs
			biography: new HTMLField(), // todo: ensure in system.json
			cp: new SchemaField({
				value: new NumberField({ initial: 1 })
			}),
			frame: new StringField(),
			sp: new NumberField(),
			repairs: new SchemaField({
				value: new NumberField(),
				min: new NumberField(),
				max: new NumberField(),
			}),
		}) as Object;
	}
}