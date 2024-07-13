/**
 * Displays amessageon the STDOUT.
 * @param {String} msg
 */

const displayMessage = (msg) => {
  process.stdout(msg);
};

module.exports = displayMessage;
