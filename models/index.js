const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false });

const Place = db.define('place', {
	address: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
});

module.exports = { db: db };