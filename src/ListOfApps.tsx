import React, { useState } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AppCard from './Components/AppCard/AppCard';
import { useAtom } from 'jotai';
import { alternateAppsAtom, AppsAtom } from './atoms';
import SearchBar from "material-ui-search-bar";
import { Typography } from '@mui/material';


const ListOfApps: React.FC = () => {
  const [apps, setApps] = useAtom(AppsAtom);
  const [alternateApps] = useAtom(alternateAppsAtom);
  // make the list of apps alternate between left and right


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (newValue: string) => {
    setSearchQuery(newValue);
  }

  const handleSearchSubmit = () => {
    setSearchQuery(searchQuery);
  }

  const toggleAdded = (brewFormula: string) => {
    const updatedApps = apps.map(app =>
      app.brewFormula === brewFormula ? { ...app, isAdded: !app.isAdded } : app
    );
    setApps(updatedApps);
  };
  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <Typography variant="h2" className="text-center my-4">
        Welcome to the Mac Companion!
      </Typography>
      <Typography variant="h4" className="text-center my-4">
        Here you can find a list of apps that you can add to
        your cart and by clicking on the cart icon on the top right corner, you will be able to 
        <strong> download all the apps you have selected with only one command.</strong>
      </Typography>
      <div className="flex flex-col items-center py-4">
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
          onRequestSearch={handleSearchSubmit}
          onCancelSearch={() => setSearchQuery('')}
        />
      </div>
      {filteredApps.length > 1 && (
        <div className="columns-2">
          {filteredApps.map((app) => (
            <div key={app.name} className="mt-4 flex justify-center break-inside-avoid"
            >
              <AppCard
                name={app.name}
                description={app.description}
                image={app.image}
                link={app.link}
                brewFormula={app.brewFormula}
                isAdded={app.isAdded}
                toggleAdded={toggleAdded}

              />
            </div>
          ))}
        </div>
      )}
      {filteredApps.length === 1 && (
        <div className="flex justify-center break-inside-avoid my-4">
          <AppCard
            name={filteredApps[0].name}
            description={filteredApps[0].description}
            image={filteredApps[0].image}
            link={filteredApps[0].link}
            brewFormula={filteredApps[0].brewFormula}
            isAdded={filteredApps[0].isAdded}
            toggleAdded={toggleAdded}
          />
        </div>
      )}
    </div>
  );
};

export default ListOfApps;

