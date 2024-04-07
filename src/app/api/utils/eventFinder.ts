async function getUpcomingEventsHandler(location, interests) {
    const endpoint = "https://api.seatgeek.com/2/events";
    const clientId = "NDA4Mjk2MDJ8MTcxMjQ0NzE4MC4xOTUxOA";
    const queryParams = new URLSearchParams({
        client_id: clientId,
        lat: location.latitude,
        lon: location.longitude,
        per_page: 10
    });
    if (interests && interests.length > 0) {
        queryParams.set("q", interests.join(" "));
    }
    const url = `${endpoint}?${queryParams.toString()}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const events = data.events.map(event => ({
            title: event.title,
            datetime_utc: event.datetime_utc,
            venue: event.venue.name,
            url: event.url,
            venue_location: event.venue.address,
            venue_type: event.type,
            highest_price: event.stats.highest_price ? event.stats.highest_price : false,
            lowest_price: event.stats.lowest_price ? event.stats.lowest_price : false
        }));
        return events;
    } catch (error) {
        throw error;
    }
}

export async function getUpcomingEvents(location: JSON, interests: Array<string>) {
    try {
        const upcomingEvents = await getUpcomingEventsHandler(location, interests);
        return (upcomingEvents);
    } catch (error) {
        return error;
    }
}