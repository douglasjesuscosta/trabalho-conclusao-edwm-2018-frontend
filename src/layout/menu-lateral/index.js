import React from 'react';
import { Menu, Icon} from 'semantic-ui-react';


const MenuLateral = () => {

    return (
        <div>
            <Menu icon='labeled' vertical>
              <Menu.Item
                name='gamepad'>
                <Icon name='gamepad' /> Games 
              </Menu.Item>

              <Menu.Item
                name='video camera'>
                <Icon name='video camera' /> Channels 
              </Menu.Item>

              <Menu.Item
                name='video play'>
                <Icon name='video play' />
                Videos
              </Menu.Item>
            </Menu>
        </div>
    );
}

export default MenuLateral;