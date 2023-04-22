public with sharing class OpportunityController {
    @AuraEnabled
    public static List<Opportunity> getOpportunity(Id recordId, Boolean showNotContactedOnly) {
        List<Opportunity> opportunities = [SELECT Id, Name, StageName, Account.Name, Not_Contacted__c
                                   FROM Opportunity
                                   WHERE StageName like 'Negotiation/Review'
                                   AND Not_Contacted__c = :showNotContactedOnly
                                   ORDER By Name ASC];

        return opportunities;
    }
}