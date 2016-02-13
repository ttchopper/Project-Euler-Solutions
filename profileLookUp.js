function lookUp(firstName, prop){
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName) {
            if (contacts[i][prop] !== undefined) {
    		    return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        } 	
    }
    return "No such contact";
}
