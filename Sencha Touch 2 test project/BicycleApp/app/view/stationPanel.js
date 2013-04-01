
Ext.define('BicycleApp.view.stationPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.stationPanel',

    config: {
        id: 'stationPanel',
        itemId: 'stationPanel',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Station Information',
                items: [
                    {
                        xtype: 'button',
						id:'BackHomeBut',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'refresh',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            },
            {
                xtype: 'fieldset',
                cls: [
                    'StationField'
                ],
                items: [
                    {
                        xtype: 'component',
                        tpl: [
                            '<table width="100%">',
                            '    <tr><td rowspan="2" width="55px"><img src="img/bn.png" /></td><td class="FielsTitelCls">{bnTitle}</td></tr>',
                            '    <tr><td class="FielsDesCls">{bnDes}</td></tr>',
                            '</table>',
                            '<table width="100%" style="margin-top:5px;margin-bottom:10px;">',
                            '    <tr>',
                            '       <td style="float:left;width:50%;height:80px;">',
                            '           <table style="background:#1583B2;height:100%;width:80%;">',
                            '               <tr align="center"><td style="color:#FFFFFF;font-size:2em;">{NoOfCy}</td></tr>',
                            '               <tr align="center"><td style=""><img src="img/Cy.png"></td></tr>',
                            '           </table>',
                            '        </td>',
                            '        <td style="float:right;width:50%;height:80px;">',
                            '             <table style="background:#15B245;height:100%;width:80%;float:right;">',
                            '               <tr align="center"><td style="color:#FFFFFF;font-size:2em;">{NoOfP}</td></tr>',
                            '               <tr align="center"><td style="padding-bottom:0.5em;"><span style="padding:0.4em 0.7em;background:#FFFFFF;color:#15B245;border-radius:0.2em;">p</span></td></tr>',
                            '           </table>',
                            '        </td>',
                            '    </tr>',
                            '</table>',
                            '<table width="100%">',
                            '    <tr><td class="FielsTitelCls">{Data1}</td></tr>',
                            '    <tr><td class="FielsDesCls">{Data2}</td></tr>',
                            '</table>'
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls: [
                    'StationField'
                ],
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'action',
                        iconMask: true,
                        text: 'Route Planning'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'favorites',
                        iconMask: true,
                        text: 'Add to favorites'
                    }
                ]
            }
        ]
    }

});