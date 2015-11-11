if (!this.message) {
    error('message', "is required");
} else if (this.message.length > 2000) {
    error('message', "Looks like you've got a lot to say... maybe break it up into two posts. Sorry for the inconvenience!");
} else {
    var mentions = (this.message.match(/@[a-z0-9]+/ig) || []).map(function(m) {
        //Drop the @
        return m.replace('@', '');
    });
    
    // Only include users that actually exist
    dpd.users.get({username: {$in: mentions}}, function(users) {
        if (users) {
            this.mentions = users.map(function(u) {
                return u.username;
            });
        }
    });
   
}

