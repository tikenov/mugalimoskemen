import { ActionIcon, Divider, Group, rem } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import React from 'react'
import './Footer.scss';
const Footer = () => {
    return (
        <footer className='footer'>
            <Divider my={'sm'} />
            <div className='row'>
                <div className='text'>
                    Mugalim Óskemen Scholarship Program
                </div>
                <Group gap={0} className='links' justify="flex-end" wrap="nowrap">
                    <a href='https://www.instagram.com/mugalim.oskemen/'>
                        <ActionIcon size="lg" color='#051d3f' variant="subtle">
                            <IconBrandInstagram style={{ width: rem(30), height: rem(30) }} stroke={2} />
                        </ActionIcon>
                    </a>
                </Group>
            </div>
        </footer >
    )
}

export default Footer