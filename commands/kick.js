exports.run => (client, message, args) {
// your code
const member = message.mentions.members.first();
member.kick('reason');
}
