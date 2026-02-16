// See https://svelte.dev/docs/kit/types#app.d.ts

import type { EventModel } from "$lib/models/event-model.model";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			upcomingEvent?: EventModel
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
