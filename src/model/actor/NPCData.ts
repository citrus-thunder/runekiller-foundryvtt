// https://foundryvtt.com/article/system-data-models/
// https://foundryvtt.com/article/v10-data-model/

import BaseCharacterData from "./BaseCharacterData";

const {
	HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export default class NPCData extends BaseCharacterData {
	static defineSchema() {
		const baseSchema = super.defineSchema();
		return mergeObject(baseSchema, {
			// Data unique to Non-Player Characters (NPCs)
		}) as Object;
	}
}