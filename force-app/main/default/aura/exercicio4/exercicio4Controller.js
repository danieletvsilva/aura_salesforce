({
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Produto cadastrado com sucesso!",
            "message": "Record ID: " + event.getParam("id")
        });
    }
})