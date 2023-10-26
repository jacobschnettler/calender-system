function fetchCalenderEvents(request, response) {
    try {
        console.log('fetching calender events...');

        const events = [
            {
                date: new Date('10-2-2005'),
                label: 'The second coming'
            }
        ];

        response.json({
            events: events
        });
    } catch (error) {
        console.log('Unexpected error.', error);

        response.json({
            error: 'Unexpected error while trying to fetch calender events.'
        })
    }
}

module.exports = {
    fetchCalenderEvents
}