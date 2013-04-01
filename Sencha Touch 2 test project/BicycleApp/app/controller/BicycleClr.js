Ext.define('BicycleApp.controller.BicycleClr', {
    extend: 'Ext.app.Controller',
    config: {
		control: {
			'#BackHomeBut':{
				tap: 'onTapBackHomeBut'
			},
		}
    },
	/*On Back button event of Station screen, it move the User to Home Screen*/
	onTapBackHomeBut:function(button,e){
		Ext.getCmp('stationPanel').hide();
		Ext.getCmp('MainToolSearch').show();
		Ext.getCmp('homePanel').show({ type: 'slide',duration: 500,direction:'left'});
	},
	/*After selection of any Station, it will move to the relevant Station screen */
    onsendNewPage: function(data) {
        var ListData=Ext.getStore('BicycleStore').getData().all[data-1].data;
        if(!Ext.getCmp('stationPanel'))
			Ext.create('BicycleApp.view.stationPanel', {fullscreen: true});
        Ext.getCmp('stationPanel').items.items[2].items.items[0].setData({"bnTitle":ListData.n,"bnDes":"1.2 miles east of current location","NoOfCy":ListData.b,"NoOfP":ListData.e,"Data1":"Data Published by TFL 3 minutes ago","Data2":"Last checked 30s ago"});
        Ext.getCmp('MainToolSearch').hide();
        Ext.getCmp('homePanel').hide();
        Ext.getCmp('stationPanel').show({ type: 'slide',duration: 500,direction:'right'});
    },
	/*It will generate Map on Home page */
    onCreateMap: function(data) {

        var image = 'img/bn.png';
        //<![CDATA[
        if (GBrowserIsCompatible()) { 
            function createMarker(point,html,img1,data) {
                // ======== Add a "directions" link ======
                html += '<td><a onclick=BicycleApp.app.getControllerInstances()["BicycleApp.controller.BicycleClr"].onsendNewPage("'+data+'")>'+
                '<img src="img/arr.png"/><\/a></td></tr></table>';
                var marker = new GMarker(point,img1);
                GEvent.addListener(marker, "click", function() {
                    marker.openInfoWindowHtml(html);
                });
                return marker;
            }
            var blueIcon = new GIcon(G_DEFAULT_ICON);
            blueIcon.image = image;
            var ListS =data.query.results.items.s;
            console.log(Ext.getStore('BicycleStore'));
            Ext.getStore('BicycleStore').setData(ListS);
            var map = new GMap2(document.getElementById("map_canvas"));
            map.enableContinuousZoom();
            map.setCenter(new GLatLng(ListS[0].l,ListS[0].l2),14);
            for(var i=0;i<ListS.length;i++){
                var point = new GLatLng(ListS[i].l,ListS[i].l2);
                var marker = createMarker(point,'<table ><tr><td><div >'+ListS[i].n+'<br/>'+ListS[i].b+' Bikes,'+ListS[i].e+' Spaces<div>'+
                '</td>',blueIcon,ListS[i].i);
                map.addOverlay(marker);
            }
        }
        else {
            alert("Sorry, the Google Maps API is not compatible with this browser");
        }
        //]]>
        Ext.Viewport.setMasked(false);
    }
});