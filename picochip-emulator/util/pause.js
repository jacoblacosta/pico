function pause(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
module.exports = pause;