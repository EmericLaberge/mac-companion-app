import React from 'react';
import { useAtom } from 'jotai';
import AppCard from './Components/AppCard/AppCard';
import { appsAtom, searchQueryAtom } from './atoms';
import NavBar from './Components/Navbar/NavBar';
const ListOfApps: React.FC = () => {
  const [apps] = useAtom(appsAtom);
  const [searchQuery] = useAtom(searchQueryAtom);

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      {filteredApps.map((app) => (
        <AppCard
          key={app.name}
          name={app.name}
          description={app.description}
          image={app.image}
          link={app.link}
        />
      ))}
    </div>
  );
};

export default ListOfApps;
