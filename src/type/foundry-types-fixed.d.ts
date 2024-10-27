// Custom type definitions to fix holes in imported type packages

interface CONFIG {
	Actor: {
		documentClass: ConfigureDocumentClassOrDefault<typeof Actor>;
		collection: ConstructorOf<Actors>;
		sidebarIcon: string;
		typeLabels: Record<string, string>;
		// CONFIG.Actor.dataModels is missing from @types
		dataModels: any; // todo: check
	}
}

namespace foundry {
	export let abstract = {
		// foundry.abstract.TypeDataModel is missing from @types
		TypeDataModel: any
	}

	export let data = {
		// foundry.data.fields is missing from @types
		fields: any
	}
}