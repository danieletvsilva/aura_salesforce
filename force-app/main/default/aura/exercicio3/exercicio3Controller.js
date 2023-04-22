({
	doInit: function(component, event, helper) {
    component.set('v.columns', [
        {label: 'Name', fieldName: 'Name', type: 'text'},
        {label: 'Account', fieldName: 'AccountId', type: 'text'},
        {label: 'Stage', fieldName: 'StageName', type: 'text'}
    ]);
        
    helper.getContacts(component, component.get('v.showNotContactedOnly'));

},
	handleShowNotContactedOnlyChange: function(component, event, helper) {
        var showNotContactedOnly = component.get('v.showNotContactedOnly');
        helper.getContacts(component, showNotContactedOnly);
}
});