const notes = new Array(15)
.fill(1)
.map((_, i) => ({
    id: Date.now() + 1,
    title: `Note ${i}`
}));

module.exports = notes;