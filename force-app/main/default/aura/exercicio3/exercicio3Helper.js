({
	getContacts: function(component) {
        var showNotContactedOnly = component.get('v.showNotContactedOnly');
        var action = component.get('c.getOpportunity');
        action.setParams({recordId: component.get('v.recordId'), showNotContactedOnly: showNotContactedOnly});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.opportunities', response.getReturnValue());
            } else {
                console.log('Error: ' + response.getError()[0].message);
            }
        });
        $A.enqueueAction(action);

    }
   
                       
});