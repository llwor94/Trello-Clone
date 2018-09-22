// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './db/db.sqlite3' }, // change this if you want a different name for the database
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './db/seeds' },
  },
};
