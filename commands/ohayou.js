const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('ohayou')
		.setDescription('Greets you!'),
	async execute(interaction) {
		await interaction.reply('Ohayou, onii-chan!');
	},
};