const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'olsenlila8',
                mongodb_password: 'XXXXXXXXXXXX',
                mongodb_clustername: 'XXXXX',
                mongodb_database: 'XXXXXX-dev'
            },
        };
    }

    return {
        env: {
            mongodb_username: 'olsenlila8',
            mongodb_password: 'XXXXXXXXXXXXX',
            mongodb_clustername: 'XXXXXXXX',
            mongodb_database: 'XXXXXXXXXXXX'
        },
    };
};
