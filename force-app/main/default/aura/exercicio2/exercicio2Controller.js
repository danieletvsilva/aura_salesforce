({  
    init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [   

                {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'phone'},
                {label: 'Email', fieldName: 'Email__c', type: 'email'},

]);
    	helper.getData(cmp);
    }

});