import React from 'react';
import { useAtom } from 'jotai';
import AppCard from './Components/AppCard/AppCard';
import { appsAtom, searchQueryAtom } from './atoms';
import NavBar from './Components/Navbar/NavBar';
import Grid from '@mui/material/Grid';
const ListOfApps: React.FC = () => {
  const [apps] = useAtom(appsAtom);
  const [searchQuery] = useAtom(searchQueryAtom);

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <Grid container spacing={2}>
      {filteredApps.map((app) => (
      <div className="flex justify-center align-center">
        <AppCard 
          key={app.name}
          name={app.name}
          description={app.description}
          image={app.image}
          link={app.link}
        />
      </div>
      ))}
      </Grid>
    </div>
  );
};

export default ListOfApps;
