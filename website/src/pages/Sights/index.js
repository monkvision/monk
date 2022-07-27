import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import sightsData from '@monkvision/sights/dist';

console.log(sightsData);

// eslint-disable-next-line react/prop-types
function SightCard({ id, label, category, vehicleType, overlay }) {
  const base64 = btoa(unescape(encodeURIComponent(overlay)));

  return (
    <Card sx={{
      width: '100%',
      maxWidth: '320px',
      margin: 2,
    }}
    >
      <CardMedia
        component="img"
        alt={label}
        height="240"
        image={`data:image/svg+xml;base64,${base64}`}
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {label.en ? label.en.charAt(0).toUpperCase() + label.en.slice(1) : 'No label'}
          <Chip label={id} />
        </Typography>
      </CardContent>
      <Box component="pre" sx={{ backgroundColor: 'black', borderRadius: 0 }}>
        {JSON.stringify({ id, label, category, vehicleType }, null, 2)}
      </Box>
    </Card>
  );
}

function Sights() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout title={tagline} description={customFields.description}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingBottom: 2,
          }}
          maxWidth={false}
          disableGutters
        >
          <CssBaseline />
          {Object.values(sightsData)
            .filter((sight) => !!sight.overlay)
            .map((sight) => (
              <BrowserOnly>
                {() => <SightCard key={sight.id} {...sight} />}
              </BrowserOnly>
            ))}
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default Sights;
