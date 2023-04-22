public with sharing class exercicio2Controller {
    @AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accounts =
                [SELECT Id, Name, Phone, Email__c, AnnualRevenue, CreatedById
					FROM Account 
					ORDER BY Name ASC LIMIT 10];
        //Add isAccessible() check
        return accounts;
    }
}