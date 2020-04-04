'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import plugins from 'plugins';

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

plugins.on('init-main-gui', function (payload) {
    ReactDOM.render(<XrdMainGui />, document.getElementById(payload.mainGuiId));
});

plugins.on('plugin-hand-shake', function (payload) {
    if (payload === 'main-menu') {
        plugins.emit('init-main-menu', {elementId: 'main-menu'});
    } else if (payload === 'main-graph') {
        plugins.emit('init-main-graph', {elementId: 'main-graph'});
    }
});

plugins.emit('plugin-hand-shake', 'xrd-main-gui');
