import React from 'react';
import { Toolbar, Link, Typography } from '@mui/material';

function Navbar() {
  const tabs = [
    {title: 'About', url: '#'},
    {title: 'Section 1', url: '#'},
    {title: 'Section 2', url: '#'},
    {title: 'Section 3', url: '#'},
    {title: 'Stay In Touch', url: '#'},
  ]

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          {'Meycauayan College Batch 92'}
        </Typography>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {tabs.map((section) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Navbar;
