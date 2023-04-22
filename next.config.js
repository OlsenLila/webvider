const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'olsenlila8',
                mongodb_password: 'hchecnam3D0QEkTr',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'myblog-dev'
            },
        };
    }

    return {
        env: {
            mongodb_username: 'olsenlila8',
            mongodb_password: 'hchecnam3D0QEkTr',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'myblog'
        },
    };
};