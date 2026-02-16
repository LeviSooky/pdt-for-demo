import type { PageServerLoad } from './$types';
import { EventService } from '$lib/services/event-service';

const eventService = new EventService();

export const load: PageServerLoad = async ({ params, locals, fetch }) => {
  const lang = params.lang;

  if (locals.prefetchedEvent) {
    return { event: locals.prefetchedEvent };
  }

  const event = await eventService.getUpcomingEvent(fetch, lang);

  return { event };
};