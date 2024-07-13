/**
 * Displays amessageon theSTDOUT.
 * @param {String} msg
 */
const displayMessage = (msg) => {
  process.stdout(msg);
};

module.exports = displayMessage;
