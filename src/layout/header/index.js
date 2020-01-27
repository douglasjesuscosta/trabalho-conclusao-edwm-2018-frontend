import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Header = () => {

    const handleItemClick = () => {

    }

    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={false}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='messages'
                active={false}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='friends'
                active={false}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={false}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    );
}

export default Header;