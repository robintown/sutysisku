
    window = this;
    var sorcu={};
    var bau = location.href.split('/').slice(-2)[0];
    if (bau==='cipra'){bau='en';}
    var cll;
    postMessage({kind: 'loading'});
    importScripts('bangu.js?sisku=1591812762771','../data/parsed-ldp.js?sisku=1591812762771', '../sisku.js?sisku=1591812762771');
    postMessage({kind: 'ready'});
    this.onmessage = function(ev) {
      if (ev.data.kind == 'newSearch') {
        sisku(ev.data, function(results) {
          postMessage({
            kind: 'searchResults',
            results: results,
            req: {
              seskari: ev.data.seskari,
              query: ev.data.query
            }
          })
        })
      }
    }