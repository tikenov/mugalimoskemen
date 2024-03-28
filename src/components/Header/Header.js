import React from 'react'
import { Group, Burger, Drawer, ScrollArea, Divider, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../images/logo.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { pathname } = useLocation();
    const labels = [
        { label: 'Жоба туралы', url: '/about' },
        { label: 'Қатысушыларға', url: '/participants' },
        { label: 'Бірлестіктер', url: '/associations' },
        { label: 'Жобаға тіркелу', url: '/register' },
        { label: 'Жобаны қолдау', url: '/support' },
        { label: 'Байланыс', url: '/contacts' },
        { label: 'FAQ', url: '/faq' }
    ]
    const links = labels.map(({ label, url }) => (
        <Link key={url} to={url} className={`navlink${pathname === url ? ' active' : ''}`} onClick={closeDrawer} >
            {label}
        </Link >
    ))
    return (
        <header className="header">
            <Group justify="space-between" h="100%">
                <Link to="/">
                    <img src={logo} alt='logo' width={200} />
                </Link>
                <Group h="100%" gap={0} visibleFrom="md">
                    {links}
                </Group>
                {/* <Group visibleFrom="sm">
                    <Button variant="default">Log in</Button>
                </Group> */}
                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
            </Group>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" className='leftMenu'>
                    <div className='drawer'>
                        {links}
                        {/* <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group> */}
                    </div>
                </ScrollArea>
            </Drawer>
            <Divider my="sm" />
        </header >
    )
}

export default Header