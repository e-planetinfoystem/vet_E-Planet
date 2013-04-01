/*Store All Cycle Station information*/
Ext.define('BicycleApp.store.BicycleStore', {
    extend: 'Ext.data.Store',

    config: {
        storeId: 'BicycleStore',
        fields: [
            {
                name: 'i'
            },
            {
                name: 'n'
            },
            {
                name: 'l'
            },
            {
                name: 'l2'
            },
            {
                name: 'b'
            },
            {
                name: 'e'
            },
            {
                name: 'd'
            }
        ]
    }
});