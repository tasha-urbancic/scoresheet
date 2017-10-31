exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('templates').insert([
			{
				name: 'Carcassonne',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Ticket to Ride',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Puerto Rico',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Power Grid',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'The Pillars of the Earth',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Splendor',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Dominion',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'San Juan',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Terraforming Mars',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Clank!',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Blood Rage',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'The Castles of Burgundy',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Agricola',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Keyflower',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Trajan',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Stone Age',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Suburbia',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'El Grande',
				footer: ''
			}
		]),
		knex('templates').insert([
			{
				name: 'Spirits of the Rice Paddy',
				footer: ''
			}
		])
	]);
};
