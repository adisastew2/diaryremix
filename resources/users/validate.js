if (this.username.length > 20) {
    error('username', "Try a different username. One under 20 characters if you please.");
}

if (this.username.match(/[^a-z0-9]/i)) {
    error('username', "Only use letters for your username please.");
}