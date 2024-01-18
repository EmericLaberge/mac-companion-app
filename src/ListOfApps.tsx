// import React from 'react';
// import AppCard from './Components/AppCard/AppCard';
// import { appsAtom, searchQueryAtom } from './atoms';
// import NavBar from './Components/Navbar/NavBar';
// import Grid from '@mui/material/Grid';
// import { useState } from 'react';
// import { useAtom } from 'jotai';
// import SearchBar from "material-ui-search-bar";
//
// const ListOfApps: React.FC = () => {
//   const [apps] = useAtom(appsAtom);
//   const [searchQuery, setSearchQuery] = useState('');
//
//   const handleSearch = (newValue: string) => {
//     setSearchQuery(newValue);
//   }
//
//   const handleSearchSubmit = () => {
//     setSearchQuery(searchQuery)
//   }
//
//
//
//
//   const filteredApps = apps.filter((app) =>
//     app.name.toLowerCase().startsWith(searchQuery.toLowerCase())
//   );
//   const appNumber = filteredApps.length;
//   const searchtext = useState('');
// return (
//     <div>
//       <NavBar />
//     <div className="flex flex-col items-center">
//   <SearchBar 
//     value={searchQuery}
//     onChange={(newValue) => handleSearch(newValue)}
//     onRequestSearch={handleSearchSubmit}
//   />
//   </div>
//       <Grid container spacing={2}>
//         {filteredApps.map((app, index) => (
//         <React.Fragment key={app.name}>
//             {index % 2 === 0 && (
//               <Grid container item>
//                 <Grid item xs={6}>
//                   <AppCard
//                     name={app.name}
//                     description={app.description}
//                     image={app.image}
//                     link={app.link}
//                   />
//                 </Grid>
//                 {filteredApps[index + 1] && (
//                   <Grid item xs={6}>
//                     <AppCard
//                       name={filteredApps[index + 1].name}
//                       description={filteredApps[index + 1].description}
//                       image={filteredApps[index + 1].image}
//                       link={filteredApps[index + 1].link}
//                     />
//                   </Grid>
//                 )}
//               </Grid>
//             )}
//           </React.Fragment>
//         ))}
//       </Grid>
//     </div>
//   );
// };
//
// export default ListOfApps;
//
import React, { useState } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AppCard from './Components/AppCard/AppCard';
import { useAtom } from 'jotai';
import {alternateAppsAtom, AppsAtom} from './atoms';
import SearchBar from "material-ui-search-bar";


const ListOfApps: React.FC = () => {
  const [apps] = useAtom(AppsAtom);
  const [alternateApps] = useAtom(alternateAppsAtom);
  // make the list of apps alternate between left and right


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (newValue: string) => {
    setSearchQuery(newValue);
  }

  const handleSearchSubmit = () => {
    setSearchQuery(searchQuery);
  }

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
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
          <div key={app.name} className={`${filteredApps.length === 2 ? 'mt-4' : 'my-4'} flex justify-center break-inside-avoid`}
          >
            <AppCard
              name={app.name}
              description={app.description}
              image={app.image}
              link={app.link}
              brewFormula={app.brewFormula}
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
          />
        </div>
      )}
    </div>
  );
};

export default ListOfApps;

