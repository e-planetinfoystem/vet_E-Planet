Ext.define('BicycleApp.view.homePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.homePanel',

    config: {
        id: 'homePanel',
        itemId: 'homePanel',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Find Bike Location',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'locate',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'list',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'toolbar',
                cls: [
                    'searchTool'
                ],
                docked: 'top',
                id: 'MainToolSearch',
                itemId: 'MainToolSearch',
                layout: {
                    align: 'start',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'searchfield',
                        width: '95%',
                        placeHolder: 'Enter a place or poscode'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            },
            {
                xtype: 'component',
                cls: [
                    'map_componentCls'
                ],
                height: '100%',
                html: '<div id="map_canvas"  style="height:100%;" ></div>'
            }
        ],
        listeners: [
            {
                fn: 'onHomePanelPainted',
                event: 'painted'
            }
        ]
    },

    onHomePanelPainted: function(element, options) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        Ext.data.JsonP.request({
            url: 'http://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FQIerPnRAHNxOuRNfV55Z02%22%20as%20tfl%3B%20select%20*%20from%20tfl&format=json',
            callbackKey: 'callback',
            callback: function(res,req){
                BicycleApp.app.getControllerInstances()["BicycleApp.controller.BicycleClr"].onCreateMap(req)
            },
        });
    }

});