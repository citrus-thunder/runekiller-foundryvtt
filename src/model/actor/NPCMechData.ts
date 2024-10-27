import BaseMechData from "./BaseMechData";

const {
	HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class NPCMechData extends BaseMechData {
	static defineSchema() {
		const baseSchema = super.defineSchema();
		return mergeObject(baseSchema, {
			// Data unique to NPC Mechs
			class: new StringField(),
		}) as Object;
	}
}