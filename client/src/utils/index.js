export async function fetchCalenderEvents() {
    const request = await fetch('https://friendly-space-spork-jxjjxx4qwgqhpvv7-3000.app.github.dev/events/get');

    return await request.json();
}