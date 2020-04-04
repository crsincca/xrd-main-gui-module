'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import dispatcher from '@crsinc-xrd/xrd-dispatcher-module';

class XrdMainGui extends React.Component {
    render() {
        return (
            <div>
                <div id='main-menu'></div>
                <div id='main-modal'></div>
                <div id='main-graph'></div>
            </div>
        );
    }
}

dispatcher.on('init-main-gui', function (payload) {
    ReactDOM.render(<XrdMainGui />, document.getElementById(payload.mainGuiId));
});

dispatcher.on('plugin-hand-shake', function (payload) {
    if (payload === 'main-menu') {
        dispatcher.emit('init-main-menu', {elementId: 'main-menu'});
    } else if (payload === 'main-graph') {
        dispatcher.emit('init-main-graph', {elementId: 'main-graph'});
    }
});

dispatcher.emit('plugin-hand-shake', 'xrd-main-gui');
